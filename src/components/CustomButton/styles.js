import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
    button: {
        width: 'auto',
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: '#5340ff',
        borderColor: '#5340ff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        paddingTop: 14,
        paddingRight: 16,
        paddingBottom: 14,
        paddingLeft: 16,
        
    },
    buttonText: {
        textTransform: 'capitalize',
        color: '#ffffff',
        fontWeight: '700',
    },
});

export default buttonStyles;
