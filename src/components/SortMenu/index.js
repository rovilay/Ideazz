import React, { Fragment } from "react";
import { connect } from 'react-redux';
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
import { sortOptions } from "../../helpers/defaults";
import { sortIdeas } from '../../redux/actionCreators/ideaActions';

const SortMenu = (props) => {
    const { sortIdeas, currentSortOption } = props;

    const handleSortOptionClick = (sortOptionValue) => {
        sortIdeas(sortOptionValue);
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
    sortIdeas: PropTypes.func.isRequired,
    currentSortOption: PropTypes.string.isRequired,
};

export const mapStateToProps = ({ idea }) => ({ 
    currentSortOption: idea.sortOption
});

const mapDispatchToProps = {
    sortIdeas
};


export default connect(mapStateToProps, mapDispatchToProps)(SortMenu);
