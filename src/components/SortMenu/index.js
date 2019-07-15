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
    ideasScreenName,
    sortOptions
} from "../../helpers/defaults";
import { getAllIdeas } from '../../redux/actionCreators/ideaActions';

const SortMenu = (props) => {
    const { 
        navigation, isLoading, getAllIdeas, deleteIdea,
        limit, offset, total, openModal, closeModal,
        editIdea, currentSortOption
    } = props;

    useEffect(() => {
        // if (!ideas.length || ideas.length < total) {
        //     getAllIdeas();
        // }
    }, []);

    // useEffect(() => {
    //     console.log('here1111')
    //     if (!newSort && !ideas.length || ideas.length < total) {
    //         console.log('here here')
    //         getAllIdeas(limit, offset, currentSortOption);
    //     }
    // }, []);

    const handleSortOptionClick = (sortOptionValue) => {
        getAllIdeas(limit, 0, sortOptionValue);
    }

    const getMenuOptionStyle = (sortOptionValue) => {
        const backgroundStyle = { backgroundColor: generalStyles.whiteColor.color };
        const textStyle = { color: generalStyles.blackColor.color };

        if (currentSortOption === sortOptionValue) {
            backgroundStyle.backgroundColor = generalStyles.defaultColor.color;
            textStyle.color = generalStyles.whiteColor.color;
        }

        return { backgroundStyle, textStyle }
    }


    const renderSortOptionsMenu = () => {
        return (
            <Fragment>
                <Menu>
                    <MenuTrigger>
                        <MaterialIcon
                            name="sort"
                            color={generalStyles.whiteColor.color}
                            size={24}
                        />
                    </MenuTrigger>
                    <MenuOptions customStyles={{
                        optionsContainer: { width: "auto" },
                    }}>
                        {sortOptions.map((option, index) => {
                            const { backgroundStyle, textStyle } = getMenuOptionStyle(option.value);

                            return (
                                <MenuOption style={{ margin: 5, ...backgroundStyle }}
                                    onSelect={() => handleSortOptionClick(option.value)}
                                    key={index} 
                                >
                                    <Text customStyles={{ 
                                        textTransform: "capitalize",
                                        fontSize: 20,
                                        ...textStyle
                                    }}>
                                        {option.name}
                                    </Text>
                                </MenuOption>
                            );
                        })}
                    </MenuOptions>
                </Menu>
            </Fragment>
        );
    };

    return (
        <Fragment>
            {renderSortOptionsMenu()}
        </Fragment>
    );
}

SortMenu.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    getAllIdeas: PropTypes.func.isRequired,
    currentSortOption: PropTypes.string.isRequired,
};

export const mapStateToProps = ({ idea }) => ({ 
    isLoading: idea.isLoading,
    limit: idea.pagination.limit,
    offset: idea.pagination.offset,
    total: idea.pagination.total,
    currentSortOption: idea.sortOption
});

const mapDispatchToProps = {
    getAllIdeas
};


export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
