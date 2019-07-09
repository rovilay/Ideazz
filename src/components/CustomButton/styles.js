import { StyleSheet } from 'react-native';
import generalStyles from '../generalStyles';

const buttonStyles = StyleSheet.create({
    button: {
        width: 'auto',
        fontSize: 16,
        fontWeight: '500',
        backgroundColor: generalStyles.defaultColor.color,
        borderColor: generalStyles.defaultColor.color,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 4,
        // paddingTop: 14,
        // paddingRight: 16,
        // paddingBottom: 14,
        // paddingLeft: 16,
        
    },
    buttonText: {
        textTransform: 'capitalize',
        color: '#ffffff',
        fontWeight: '700',
    },
});

export default buttonStyles;
