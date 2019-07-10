import React, { useState, useEffect } from "react";
import { View, ImageBackground, Overlay, ActivityIndicator } from "react-native";
import { Header } from "react-native-elements";

import CustomButton from "../../components/CustomButton";
import Text from "../../components/CustomText";
import generalStyles from "../../components/generalStyles";
import { fontLoader } from "../../helpers/utils";
import homePageStyles from "./styles";

const HomeScreen = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    const handleLoginButton = () => {
        const { navigate } = props.navigation;
        return navigate('Signup');
    }

    useEffect(() => {
        const loadFonts = async () => {
            await fontLoader();

            setFontLoaded(true);
        }

        loadFonts();
    }, []);

    return (
        <ImageBackground source={require('../../../assets/idea2.jpg')}
            style={homePageStyles.backgroundImage}
        >
            {fontLoaded ?
                <View style={[homePageStyles.container, generalStyles.overlay]}>
                    <Header
                        placement="left"
                        centerComponent={{ text: 'IDEAS', style: homePageStyles.title }}
                        rightComponent={{ icon: 'menu', color: '#fff' }}
                        statusBarProps={{ barStyle: 'light-content' }}
                        containerStyle={{...homePageStyles.header}}
                    />
                    <View style={homePageStyles.content}>
                        <View style={{ 
                            marginBottom: 10, marginTop: 0, borderWidth: 0,
                            borderColor: 'red',
                            width: '100%', alignItems: 'flex-end',
                            padding: 10
                        }}>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Think</Text>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Analyze</Text>
                            <Text fontLoaded={fontLoaded} 
                                customStyles={homePageStyles.intro}>Do</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <CustomButton
                                title="sign up"
                                handleButtonPress={handleLoginButton}
                                customStyles={{
                                    alignSelf: 'flex-end',
                                    justifyContent: 'center', padding: 5, 
                                    paddingLeft: 30, paddingRight: 30,
                                }}
                                customTextStyles={{  
                                    textAlign: 'center', fontFamily: 'vince',
                                    fontSize: 24
                                }}
                            />
                        </View>
                    </View>
                </View> : <ActivityIndicator />
            }
        </ImageBackground>
    );
}

export default HomeScreen;