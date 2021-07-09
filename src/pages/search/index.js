import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    Keyboard,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import api, { key } from '../../services/api';
import Conditions from '../../components/conditions';

export default function Search() {

    const [input, setInput] = useState('');
    const [city, setCity] = useState(null);
    const [error, setError] = useState(null);

    const navigation = useNavigation();
    

    async function handleSearch() {
        const response = await api.get(`/weather?key=${key}&city_name=${input}`)

        if(response.data.by === 'default') {
            setError('Cidade não encontrada!');
            setInput('');
            setCity(null);
            Keyboard.dismiss();
            return;
        }

        setCity(response.data.results);
        setInput('');
        Keyboard.dismiss();
    }

    if(city) {
        return(
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Feather name="chevron-left" size={32} color="#000" />
                    <Text style={{fontSize: 22}}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.searchBox}>
                    <TextInput
                        value={input}
                        onChangeText={(valor) => setInput(valor)}
                        placeholder="Ex: Campinas, SP"
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                        <Feather name="search" size={22} color='#fff'/>
                    </TouchableOpacity>
                </View>

                <LinearGradient 
                    style={styles.header} 
                    colors={['#1ed6ff', '#97c1ff']}
                >
                    <Text style={styles.date}>{city.date}</Text>
                    <Text style={styles.city}>{city.name}</Text>
                    <View>
                        <Text style={styles.temp}>{city.temp}º</Text>
                    </View>

                    <Conditions weather={city} />
                </LinearGradient>

            </SafeAreaView>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Feather name="chevron-left" size={32} color="#000" />
                <Text style={{fontSize: 22}}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.searchBox}>
                <TextInput
                    value={input}
                    onChangeText={(valor) => setInput(valor)}
                    placeholder="Ex: Campinas, SP"
                    style={styles.input}
                />
                <TouchableOpacity style={styles.icon} onPress={handleSearch}>
                    <Feather name="search" size={22} color='#fff'/>
                </TouchableOpacity>
            </View>
            {error && <Text style={{marginTop: 25, fontSize: 18}}>{error}</Text>}
        </SafeAreaView>
    )
}