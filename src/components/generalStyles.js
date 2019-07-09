import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
    },
    header: {
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
    },
    defaultColor: {
        color: '#1E89DC'
    },
    whiteColor: {
        color: '#ffffff',
    },
    blackColor: {
        color: '#000000',
    },
    absoluteFillObject: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)'
    }
});

export default generalStyles;
