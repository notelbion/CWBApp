import React from 'react';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Button, View, TextInput, Image, TouchableHighlight, Platform, Linking, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class SendToHm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show_Main_App: false,
            TextInputValue: '',
        }
    };

    ballinaClick = () => {
        this.props.navigation.navigate('Home')
        global.paths = []
        global.tobeshown = []
        global.myFullText = ""
    }
    render() {
        return (
            <View style={styles.UnderView}>
                <Text style={styles.InSignLang}> Në gjuhë shqipe: </Text>
                <Text style={styles.OutputText}>{global.wordstoShow.join(", ")} </Text>
                <TouchableHighlight
                    style={styles.BallinaButton}
                    onPress={this.ballinaClick}
                >
                    <React.Fragment>
                        <Image style={styles.BallinaButtonImage} source={require('../assets/home.png')} />
                        <Text style={styles.ButtonsText}>Ballina</Text>
                    </React.Fragment>

                </TouchableHighlight>
            </View>
            
        )
    }
}

export default SendToHm;

const styles = StyleSheet.create({
    UnderView: {
        backgroundColor: "#008081",
        alignItems: "center",
        justifyContent: "center",
        width: wp("100%"),
        height: "100%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14
    },  
    OutputText: {
        marginLeft: 15,
        fontFamily: "Avenir",
        fontWeight: "200",
        fontSize: 27.5,
        color: "white",
        textDecorationStyle: "solid",
        marginTop: 10,
        textDecorationLine: "underline",
        textTransform: 'capitalize'
    },
    InSignLang: {
        marginTop: 25,
        color: "white",
        fontSize: 20,
        fontFamily: "Avenir",
        fontWeight: "200",
        marginLeft: 15
    },
    BallinaButton: {
        height: 42.5,
        width: wp("75%"),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        margin: hp("5%"),
        shadowColor: "#333",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1
    },
    BallinaButtonImage: {
        height: 30,
        width: 30,
        resizeMode: 'center',
        marginRight: 10
    },
    ButtonsText: {
        fontFamily: "Avenir",
        fontSize: 18,
        fontWeight: "500"
    },
});