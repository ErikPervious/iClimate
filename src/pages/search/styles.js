import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#E8F0FF',
        paddingTop: '10%',
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    searchBox: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ddd',
        width: '90%',
        height: 50,
        borderRadius: 8,
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        padding: 7
    },
    icon: {
        width: '15%',
        backgroundColor: '#13D6FF',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    header: {
        marginTop: '5%',
        width: '90%',
        paddingVertical: '3%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    date: {
        color: '#fff',
        fontSize: 16,
    },
    city: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    temp: {
        color: '#fff',
        fontSize: 90,
        fontWeight: 'bold'

    }
})

export default styles;