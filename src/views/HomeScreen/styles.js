import { StyleSheet } from 'react-native';
import { red } from 'ansi-colors';

const homePageStyles = StyleSheet.create({
	container: {
        flex: 1,
		justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    button: {
        fontSize: 42, 
        backgroundColor: 'red'
    }
});

export default homePageStyles;
