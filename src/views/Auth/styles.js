import { StyleSheet } from 'react-native';
import generalStyles from '../../components/generalStyles';

const authPagesStyles = StyleSheet.create({
	container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width:  '100%'
    },
    title: {
        fontSize: 35,
        fontFamily: 'vince',
        color: generalStyles.defaultColor.color,
        textAlign: 'center',
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    formContainer: { 
        width: '100%',
        padding: 5,
        marginTop: '10%',
        borderWidth: 0,
        borderColor: 'pink'
    },
    form: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    formInputContainer: {
        borderColor: generalStyles.defaultColor.color,
        borderWidth: 1,
        width: '100%',
        borderRadius: 4,
        borderStyle: 'solid',
        paddingTop: 14,
        paddingRight: 5,
        paddingBottom: 14,
        paddingLeft: 5,
        marginTop: 10
    },
    formInput: {
        fontFamily: 'vince',
        fontSize: 24,
        textTransform: 'lowercase'
    },
    formButtonContainer: {
        paddingLeft: 15,
        paddingRight: 15, 
    },
    formButtonText: {
        fontFamily: 'vince',
        fontSize: 30,
        textTransform: 'capitalize'
    },
    formButton: {
        width: '100%',
        borderRadius: 4,
        borderStyle: 'solid',
        paddingTop: 10,
        paddingRight: 5,
        paddingBottom: 10,
        paddingLeft: 5,
        marginTop: 10
    },
    prompt: {
        fontFamily: 'vince',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        textDecorationLine: 'underline',
    },
    error: {
        fontFamily: 'vince',
        color: 'red',
        marginTop: 4,
        fontSize: 16,
        textTransform: 'lowercase'
    }
});

export default authPagesStyles;
