import React, { Component } from 'react';
import { Font } from 'expo';

import Routes from './src/routes';

export default class App extends Component {
	// state = {
	// 	fontLoaded: false
	// }

	// async componentDidMount() {
	// 	await Font.loadAsync({
	// 	  'vice': require('./assets/fonts/vinchand.ttf'),
	// 	});

	// 	this.setState({ fontLoaded: true });
	// }

	render() {
		// const { fontLoaded } = this.state;
		// const allProps = { ...this.props, fontLoaded };

		return <Routes />;
	}
}
