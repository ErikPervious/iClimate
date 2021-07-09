import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Menu() {
    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.openDrawer()}
        >
            <Feather 
                name="align-left" 
                size={36} 
                color="#373737" 
            />
        </TouchableOpacity>
    )
}