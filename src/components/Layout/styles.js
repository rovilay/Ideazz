import { StyleSheet } from 'react-native';
import generalStyles from '../../components/generalStyles';

const layoutStyle = StyleSheet.create({
	container: {
        flex: 1,
		justifyContent: 'flex-start',
        alignItems: 'center',
        // borderColor: 'red',
        // borderWidth: 1,
        backgroundColor: 'transparent'
    },
    header: {
        flexBasis: '15%',
        borderBottomColor: 'transparent'
    },
    content: {
        flexBasis: '85%',
        justifyContent: 'center',
        fontFamily: 'vince',
        // alignItems: '',
        // borderColor: 'blue',
        // borderWidth: 1,
        width: '100%',
        // height: '100%',
    },
});

export default layoutStyle;
