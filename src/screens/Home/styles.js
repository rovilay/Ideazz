import { StyleSheet } from 'react-native';
import generalStyles from '../../components/generalStyles';

const homePageStyles = StyleSheet.create({
	container: {
        flex: 1,
		justifyContent: 'flex-start',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    header: {
        flexBasis: '15%',
        borderBottomColor: 'transparent'
    },
    content: {
        flexBasis: '100%',
        justifyContent: 'center',
        width: '100%',
    },
    title: {
        fontFamily: 'vince',
        fontSize: 30,
        color: generalStyles.whiteColor.color
    },
    introContainer: {
        marginBottom: 10,
        marginTop: 0,
        borderWidth: 0,
        borderColor: 'red',
        width: '100%', alignItems: 'flex-end',
        padding: 10
    },
    intro: {
        fontFamily: 'vince',
        fontSize: 80,
        color: generalStyles.whiteColor.color
    }
});

export default homePageStyles;
