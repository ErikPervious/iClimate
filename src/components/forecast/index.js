import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'
import { condition } from '../../utils/condition';

export default function Forecast({ data }) {
    let icon = condition(data.condition)

    return(
        <View style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <Ionicons name={icon.name} color={icon.color} size={25}/>
            <View style={styles.temp}>
                <Text>{data.min}</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {data.max}º
                </Text>
            </View>
        </View>
    )
}