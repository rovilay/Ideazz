import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Badge } from 'react-native-elements';
import PropTypes from 'prop-types';

import modalStyles from './styles';

const CustomModal = (props) => {
  	const { visibility, handleModalClose, children } = props;

	const renderCloseButton = () => {
		return (
			<TouchableOpacity
				onPress={handleModalClose}
				style={modalStyles.closeButtonContainer}
			>
				<Badge
					value="close"
					textStyle={modalStyles.closeButtonText}
					badgeStyle={modalStyles.closeButton}
				/>
			</TouchableOpacity>
		);
	}
	
  	return (
    	<View>
			<Modal
			{...props}
			animationType="slide"
			visible={visibility}
			>
				<View style={modalStyles.contentOverlay}
				>
					<View>
						{renderCloseButton()}
						{children}
					</View>
				</View>
			</Modal>
    </View>
  );
}

CustomModal.propTypes = {
  visibility: PropTypes.bool,
  handleModalClose: PropTypes.func.isRequired
}

CustomModal.defaultProps = {
  visibility: false
}

export default CustomModal;
