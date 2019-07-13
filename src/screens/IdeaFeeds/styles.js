import { StyleSheet } from 'react-native';
import generalStyles from '../../components/generalStyles';

const ideaFeedsStyles = StyleSheet.create({
    container: {
        fontFamily: 'vince',
        backgroundColor: 'transparent',
        padding: 10
    },
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
    },
    badgeLabel: { 
        fontFamily: 'vince',
        fontSize: 24,
        textTransform: "capitalize"
    },
    badgeText: {
        fontFamily: 'vince',
        fontSize: 24,
        textAlign: 'center'
    },
    badge: {
        height: 30,
        justifyContent: 'center'
    },
    badge2: {
        height: 20,
        justifyContent: 'center'
    },
    badgeTitle: {
        fontFamily: 'vince',
        fontSize: 18,
        color: generalStyles.whiteColor.color
    },
    ideaContainer: {
        paddingLeft: 5,
        paddingRight: 5,
    },
    ideaTitle: { 
        fontFamily: 'vince', fontSize: 24,
        color: generalStyles.blackColor.color
    },
    ratings: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    noContent: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    noContentText: {
        fontFamily: 'vince',
        fontSize: 60,
        color: generalStyles.disabledColor.color
    },
    button: {
        fontSize: 42
    },
    feed: {
        fontFamily: 'vince',
        fontSize: 20,
        color: generalStyles.blackColor.color,
        textTransform: 'capitalize'
    },
    feedContainer: {
        borderColor: generalStyles.whiteColor.color,
        borderWidth: 2,
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
        shadowOffset: { width: 1, height: 5 },
        shadowColor: generalStyles.disabledColor.color,
        shadowOpacity: 0.5
    }
});

export default ideaFeedsStyles;
