import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    FlatList,
    View,
    Text
} from 'react-native';
import * as Location from 'expo-location';

import styles from './styles';
import Menu from '../../components/menu';
import Header from '../../components/header';
import Conditions from '../../components/conditions';
import Forecast from '../../components/forecast';
import api, { key } from '../../services/api';

export default function Home() {

    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState([]);
    const [icon, setIcon] = useState({ name:'cloud', color: '#fff'});
    const [background, setBackground] = useState(['#1ED6FF', '#97C1FF']);

    useEffect(() => {
        
        (async ()=>{
            let { status } = await Location.requestPermissionsAsync();

            if(status !== 'granted') {
                setErrorMsg('Acesso a localização negada');
                setLoading(false);
                return;
            }
            let location = await Location.getCurrentPositionAsync({accuracy:Location.Accuracy.High});
            
            const response = await api.get(`/weather?key=${key}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`);
            setWeather(response.data.results);

            if(response.data.results.currently === 'noite') {
                setBackground(['#0C3741', '#0F2F61']);
            }

            switch(response.data.results.condition_slug) {
                case 'clear_day':
                    setIcon({ name: 'partly-sunny', color: '#FFB300'})
                    break;
                case 'rain':
                    setIcon({ name: 'rainy', color: '#fff'})
                    break;
                case 'storm':
                    setIcon({ name: 'rainy', color: '#fff'})
                    break;
            }

            setLoading(false);

        })();

    }, []);

    if(loading) {
        return(
            <View style={styles.container}>
                <Text style={{fontSize: 17, fontStyle: 'italic'}}>Carregando Dados...</Text>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Menu/>
            <Header background={background} weather={weather} icon={icon}/>
            <Conditions weather={weather}/>
            <FlatList 
                style={styles.list} 
                data={weather.forecast} 
                keyExtractor={ item => item.date }
                renderItem={ ({ item }) => <Forecast data={item} /> }
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}