import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Conditions({ weather }) {
    return(
        <View style={styles.container}>
            <View style={styles.condition}>
                <Feather name="wind" size={23} color="#1ED6FF"/>
                <Text>{weather.wind_speedy}</Text>
            </View>
            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-up" size={23} color="#1ED6FF"/>
                <Text>{weather.sunrise}</Text>
            </View>
            <View style={styles.condition}>
                <MaterialCommunityIcons name="weather-sunset-down" size={23} color="#1ED6FF"/>
                <Text>{weather.sunset}</Text>
            </View>
            <View style={styles.condition}>
                <Feather name="droplet" size={23} color="#1ED6FF"/>
                <Text>{weather.humidity}</Text>
            </View>
        </View>
    )
}