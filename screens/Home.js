import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, Button, View, TextInput, Image, TouchableHighlight, Platform } from 'react-native';
import Info from '../info2.json';
import AppIntroSlider from 'react-native-app-intro-slider';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show_Main_App: false,
            TextInputValue: "",
            Video1: "",
            pathsLength: false,
            inputvalue: ""
        }
        global.paths = [];
        global.myText = ""
        global.myFullText = ""
        global.tobeshown = []
    };

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    };

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    buttonClickListener = () => {
        FjaletShqip = []
        Info.map(item => {
            FjaletShqip.push(item.Shqip)
        })
        const { TextInputValue } = this.state;
        const TextInputUpper = TextInputValue.toUpperCase();
        const TextInputSplit = TextInputUpper.split(" ");
        FjaletShqip.forEach(element => {
            if (TextInputSplit.includes(element)) {
                tobeshown.push(element);
            }
        })
        myText = tobeshown,
        myFullText = TextInputValue       
        tobeshown.forEach(element => {
            Info.map(item => {
                if (item.Shqip === element) {
                    paths.push(item.VideoPath)
                    paths.push(item.Shqip)
                    this.setState({
                        Video1: item.VideoPath,
                        pathsLength: true,
                    });
                }
            })
        });
        this.textInput.clear()
        this.props.navigation.navigate('ImageDisplay');

    }

    GjuhaShenjave = () => {
        this.props.navigation.navigate('Reply')
    }

    _renderNextButton = () => {
        return (
            <View style={styles.nextperfbtn}>
                <Text style={styles.textNextPerf}> Vazhdo </Text>
                <Ionicons
                    name="md-arrow-round-forward"
                    color="#333"
                    size={hp("3%")}
                    style={{ backgroundColor: 'transparent', marginTop: hp("1.35%") }}
                />
            </View>
        );
    };
    _renderDoneButton = () => {
        return (
            <View style={styles.nextperfbtn}>
                <Text style={styles.textNextPerf}> Përfundo </Text>
                <Ionicons
                    name="md-checkmark"
                    color="#333"
                    size={hp("3%")}
                    style={{ backgroundColor: 'transparent', marginTop: hp("1.35%") }}
                />
            </View>
        );
    };

    render() {
        if (this.state.show_Main_App) {
            return (
                <View style={styles.container}>
                    <View style={styles.ChooseLang}>
                        <TouchableHighlight
                            style={styles.GjShq}
                            onPress={this.GjuhaShqipe}
                        ><Text style={styles.TextinButtonGjShq}>Shqip</Text></TouchableHighlight>
                        <TouchableHighlight
                            style={styles.GjShq}
                            onPress={this.GjuhaShenjave}
                        ><Text style={styles.TextinButtonGjShe}>Gjuha e shenjave</Text></TouchableHighlight>
                    </View>
                    <View style={styles.UnderView}>
                        <TextInput
                            ref={input => { this.textInput = input }}
                            placeholder="Shkruani këtu..."
                            style={styles.inputStyling}
                            onChangeText={TextInputValue => this.setState({ TextInputValue })}
                        />
                        <TouchableHighlight
                            style={styles.SendButton}
                            onPress={this.buttonClickListener}
                        ><Image style={styles.sendImage} source={require('../assets/send.png')} /></TouchableHighlight>
                    </View>

                </View>
            );
        } else {
            return (
                <AppIntroSlider
                    style={{ margin: 0 }}
                    slides={slides}
                    renderDoneButton={this._renderDoneButton}
                    renderNextButton={this._renderNextButton}
                    onDone={this.on_Done_all_slides}
                    showSkipButton={false}
                    onSkip={this.on_Skip_slides}
                />
            );
        }
    }
        
    }


export default Home;

const styles = StyleSheet.create({
    UnderView: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        width: wp("97.5%"),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: "100%",
        marginTop: 25
    },  
    ChooseLang: {
        alignItems: "center",
        marginTop: 50,
        justifyContent:"center",
        flexDirection: "row"
    },
    container: {
        flex: 1,
        backgroundColor: '#008081',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    ImpWord: {
        color: 'red',
        fontSize: 14
    },

    fullText: {
        color: "blue",
        fontSize: 20
    },
    GjShq: {
        backgroundColor: "white",
        alignItems: "center",
        width: wp("50%"),
        height: 40,
        justifyContent: "center",
        margin: 0.025,
        borderColor: "#777",
        borderWidth: 1,
        borderRadius: 10,
    },
    TextinButtonGjShq: {
        fontSize: 18.5,
        color: "#008081",
        fontFamily: "Avenir",
        fontWeight: "300",
    },
    nextperfbtn: {
        display: "flex",
        justifyContent: "center",
        flexDirection:'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    TextinButtonGjShe: {
        fontSize: 16,
        color: "#008081",
        fontFamily: "Avenir",
        fontWeight: "200",
    },
    sendImage: {
        resizeMode: "center",
        height: "100%",
        width: "100%"
    },
    VideoPathImage: {
        height: 150,
        width: 150
    },
    inputStyling: {
        width: 250, 
        borderColor: '#777', 
        borderWidth: 0.5,
        borderRadius: 5,
        marginTop: 25,
        height: 175,
        paddingTop: 10,
        padding: 12.5,
        fontFamily: 'Avenir',
        fontWeight: "200",
        fontSize: 17.5,
        // shadowColor: "#555",
        // shadowOffset: {width: 0, height: 3},
        // shadowOpacity: 1,
        // opacity: 1
    },
    SendButton: {
        backgroundColor: '#008081', 
        height: 50, 
        width: 50,
        position: "absolute",
        top: 150,
        right: wp("18.5%"),
        borderBottomRightRadius: 5
    },
    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: hp("3.5%"),
        color: '#333',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontWeight: "300",
        marginTop: hp("50%"),
        marginBottom: hp("5%")
    },
    text: {
        color: '#333',
        fontSize: hp("2.5%"),
        fontFamily: 'Avenir',
        fontWeight: "300",
        marginTop: hp("-20%")
    },
    textNextPerf: {
        marginTop: hp("1.5%"),
        color: '#333',
        fontSize: hp("2.5%"),
        fontFamily: 'Avenir',
        fontWeight: "300",
    },
    image1: {
        marginTop: hp("-125%"),
        width: wp("120%"),
        height: hp("100%"),
        resizeMode: 'contain'
    },
    image2dif: {
        marginTop: hp("-131.5%"),
        width: wp("120%"),
        height: hp("100%"),
        resizeMode: 'contain'
    }
});

const slides = [
    {
        key: 'k1',
        title: 'Ndryshim!',
        text: 'Duke ndryshuar për të mirë, ne i japim shpresë vetes, familjes, shoqërisë dhe të gjithë komunitetit për të pasur marrëdhënie të mira dhe reciproke',
        image: require("../assets/change.png"),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image1,
        backgroundColor: '#fff',
    },
    {
        key: 'k2',
        title: 'Komunikim!',
        text: 'Çelësi kryesor për të pasur marrëdhënie të mira është komunikimi',
        image: require("../assets/communicate.png"),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image2dif,
        backgroundColor: '#fff',
    },
    {
        key: 'k3',
        text: 'Krijimi i lidhjeve me njëri tjetrin në mënyra prej më të ndryshmeve, na mundëson një jetesë paqësore e të mirëqenë ndërshoqërore',
        title: "Lidhje!",
        image: require("../assets/connect.png"),
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image1,
        backgroundColor: '#fff',
    }
];