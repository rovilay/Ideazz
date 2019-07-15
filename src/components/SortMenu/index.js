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
        editIdea
    } = props;

    useEffect(() => {
        // if (!ideas.length || ideas.length < total) {
        //     getAllIdeas();
        // }
    }, []);


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
                            return (
                                <MenuOption style={{ margin: 5 }}
                                    onSelect={() => console.log(option, "selected")}
                                    key={index} 
                                >
                                    <Text customStyles={{ 
                                        textTransform: "capitalize",
                                        fontSize: 20 
                                    }}>
                                        {option}
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
};

export const mapStateToProps = ({ idea }) => ({ 
    isLoading: idea.isLoading,
    limit: idea.pagination.limit,
    offset: idea.pagination.offset,
    total: idea.pagination.total,
});

const mapDispatchToProps = {
    getAllIdeas
};


export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
