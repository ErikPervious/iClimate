import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        zIndex: 9,
        width: 70,
        height: 70,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        left: 15,
        top: 15,
        borderRadius: 50,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3
        }
    }
})

export default styles;