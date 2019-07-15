import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { View, FlatList, ActivityIndicator, Alert } from "react-native";
import { ListItem, Badge, Card } from "react-native-elements";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PropTypes from 'prop-types';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import ideaFeedsStyles from "./styles";
import {
    confidenceRatingTitle, impactRatingTitle, easeRatingTitle,
    ideasScreenName
} from "../../helpers/defaults";
import { 
    getAllIdeas, getIdea, editIdea, deleteIdea 
} from '../../redux/actionCreators/ideaActions';
import CustomModal from "../../components/Modal";
import { closeModal, openModal } from '../../redux/actionCreators/utilsActions';
import * as NavigationService from '../../services/NavigationService';

const IdeaFeeds = (props) => {
    const [ideaOnView, setIdeaOnView] = useState(null);

    const { 
        utils: { modal }, navigation, newSort,
        ideas, isLoading, getAllIdeas, deleteIdea,
        limit, offset, total, openModal, closeModal,
        editIdea, currentSortOption
    } = props;

    useEffect(() => {
        console.log('here1111')
        if (!newSort && (!ideas.length || ideas.length < total)) {
            console.log('here here')
            getAllIdeas(limit, offset, currentSortOption);
        }
    }, []);

    const handleScrollEnd = () => {
        if (ideas.length >= limit && ideas.length < total) {
            console.log('here222')
            const nextOffset = offset + limit;
            getAllIdeas(limit, nextOffset, currentSortOption);
        }
    }

    const getBadgeColor = (rating) => {
        if (rating < 5) {
            return "error"
        } else if (rating > 7) {
            return "success"
        } else {
            return "warning"
        }
    }

    const handleEditIdea = (ideaId) => {
        editIdea(ideaId);
        NavigationService.navigate('update', { view: 'update' });
    }

    const handleViewIdea = (idea) => {
        setIdeaOnView(idea);
        openModal();
    }

    const handleCloseModal = () => {
        setIdeaOnView(null);
        closeModal();
    }

    const renderBadge = (ratingTitle, rating) => {
        return (
			<View>
				<Text customStyles={ideaFeedsStyles.badgeLabel}>
					{ratingTitle}
				</Text>
				<Badge
					status={getBadgeColor(rating)}
					value={rating}
					textStyle={ideaFeedsStyles.badgeText}
					badgeStyle={ideaFeedsStyles.badge}
				/>
			</View>
        );
    }

    const renderDeletePrompt = (ideaId) => {
        return Alert.alert(
            'confirm delete?',
            '',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => deleteIdea(ideaId),
                style: 'cancel'
            },
            ],
            {cancelable: false},
        );
    }

    const renderFeedOptionsMenu = (idea) => {
        return (
            <Fragment>
                <Menu>
                    <MenuTrigger>
                        <MaterialIcon
                            name="menu"
                            color={generalStyles.disabledColor.color}
                            size={20}
                        />
                    </MenuTrigger>
                    <MenuOptions customStyles={{
                        optionsContainer: { width: 'auto' },
                    }}>
                    <MenuOption onSelect={() => handleEditIdea(idea.id)} 
                        style={{ margin: 5 }}
                    >
                        <MaterialIcon
                            name="square-edit-outline"
                            color={generalStyles.disabledColor.color}
                            size={20}
                        />
                    </MenuOption>
                    <MenuOption style={{ margin: 5 }}
                        onSelect={() => renderDeletePrompt(idea.id)}
                    >
                        <MaterialIcon
                            name="trash-can"
                            color={generalStyles.disabledColor.color}
                            size={20}
                        />
                    </MenuOption>
                    </MenuOptions>
                </Menu>
            </Fragment>
        );
    };

    const renderIdeaView = () => {
        return (
            <Card
                title={ideaOnView.title}
                containerStyle={ideaFeedsStyles.ideaContainer}
                titleStyle={ideaFeedsStyles.ideaTitle}
            >
                <View style={ideaFeedsStyles.ratings}>
                    {renderBadge(confidenceRatingTitle, ideaOnView.confidence)}
                    {renderBadge(easeRatingTitle, ideaOnView.ease)}
                    {renderBadge(impactRatingTitle, ideaOnView.impact)}	
                </View>
            </Card>
        );
    }

    const renderIdeaViewModal = () => {
        return (
            <CustomModal
                visibility={modal.isVisible}
                handleModalClose={handleCloseModal}
                transparent={true}
            >
                {renderIdeaView()}
            </CustomModal>
        );
    }

    const renderFeed = (idea) => {
        return (
            <View>
                <ListItem
                    titleProps={{
                        ellipsizeMode: "tail",
                        numberOfLines: 1
                    }}
                    title={idea.title}
                    badge={{
                        value: idea.average,
                        status: getBadgeColor(idea.average),
                        textStyle: ideaFeedsStyles.badgeTitle,
                        badgeStyle: ideaFeedsStyles.badge2
                    }}
                    leftIcon={renderFeedOptionsMenu(idea)}
                    topDivider={true}
                    bottomDivider={true}
                    titleStyle={ideaFeedsStyles.feed}
                    containerStyle={ideaFeedsStyles.feedContainer}
                    onPress={() => handleViewIdea(idea)}
                    underlayColor={generalStyles.disabledColor.color}
                />
            </View>
        );
    }

    const renderNoFeeds = () => {
        return (
            <View style={ideaFeedsStyles.noContent}>
                <MaterialIcon
                    name="lightbulb-on-outline"
                    type="MaterialCommunityIcon"
                    size={54}
                    color={generalStyles.disabledColor.color}
                />
                <Text customStyles={ideaFeedsStyles.noContentText}>
                    No Ideas!
                </Text>
            </View>
        );
    }

    const renderFeeds = () => {
        return (
            <FlatList
                contentContainerStyle={ideaFeedsStyles.container}
                data={ideas}
                keyExtractor={(_, index) => index.toString()}
                onEndReached={handleScrollEnd}
                onEndReachedThreshold={0}
                renderItem={({ item }) => renderFeed(item)}
            />
        );
    }

    const renderView = () => {
        return (
            <Fragment>
                {ideas.length ?
                    renderFeeds()
                    :
                    renderNoFeeds()
                }
                {ideaOnView && renderIdeaViewModal()}
            </Fragment>
        );
    }

    return (
            <Fragment>
                {isLoading ?
                    <ActivityIndicator />
                    :
                    renderView()
                }
            </Fragment>
    );
}

IdeaFeeds.propTypes = {
    navigation: PropTypes.object.isRequired,
    utils: PropTypes.object.isRequired,
    ideas: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    getAllIdeas: PropTypes.func.isRequired,
    getIdea: PropTypes.func.isRequired,
    editIdea: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    newSort: PropTypes.bool.isRequired,
    currentSortOption: PropTypes.string.isRequired,
};

export const mapStateToProps = ({ idea, utils }) => ({ 
    utils,
    ideas: idea.ideas,
    isLoading: idea.isLoading,
    limit: idea.pagination.limit,
    offset: idea.pagination.offset,
    total: idea.pagination.total,
    newSort: idea.newSort,
    currentSortOption: idea.sortOption
});

const mapDispatchToProps = {
    getAllIdeas,
    getIdea,
    editIdea,
    deleteIdea,
    openModal,
    closeModal
};


export default connect(mapStateToProps, mapDispatchToProps)(IdeaFeeds);
