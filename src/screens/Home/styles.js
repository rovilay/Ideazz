import { StyleSheet } from 'react-native';
import generalStyles from '../../components/generalStyles';

const homePageStyles = StyleSheet.create({
	container: {
        flex: 1,
		justifyContent: 'flex-start',
        alignItems: 'center',
        // fontFamily: 'vince',
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
        flexBasis: '85%',
        justifyContent: 'center',
        // alignItems: '',
        // borderColor: 'blue',
        // borderWidth: 1,
        width: '100%',
        // height: '100%',
    },
    title: {
        fontFamily: 'vince',
        fontSize: 30,
        color: generalStyles.whiteColor.color
    },
    intro: {
        fontFamily: 'vince',
        fontSize: 60,
        color: generalStyles.whiteColor.color
    },
    button: {
        fontSize: 42, 
        // backgroundColor: 'red',
    }
});

export default homePageStyles;
