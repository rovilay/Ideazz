import { StyleSheet } from 'react-native';
import generalStyles from '../generalStyles';

const modalStyle = StyleSheet.create({
    contentOverlay: {
        ...generalStyles.overlay,
        height: '100%',
        justifyContent: 'center'
    },
    closeButtonContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    closeButtonText: { 
        fontFamily: 'vince',
        fontSize: 20,
        textAlign: 'center',
        color: generalStyles.blackColor.color
    },
    closeButton: {
        backgroundColor: generalStyles.whiteColor.color,
        justifyContent: 'center',
        height: 30
    }
});

export default modalStyle;
