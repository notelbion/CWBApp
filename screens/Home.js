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
                    color="rgba(255, 255, 255, .9)"
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
                    color="rgba(255, 255, 255, .9)"
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
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontWeight: "300",
        marginTop: 20,
    },
    text: {
        color: '#fff',
        fontSize: hp("2.5%"),
        fontFamily: 'Avenir',
        fontWeight: "300",
    },
    textNextPerf: {
        marginTop: hp("1.5%"),
        color: '#fff',
        fontSize: hp("2.5%"),
        fontFamily: 'Avenir',
        fontWeight: "300",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});

const slides = [
    {
        key: 'k1',
        title: 'Lidhja e botës është qëllimi ynë',
        text: 'Lidhja e botës është qëllimi ynë',
        image: {
            uri:
                'https://reactnativecode.com/wp-content/uploads/2019/04/calendar.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#008081',
    },
    {
        key: 'k2',
        title: 'Për të lidhur botën në duhet të kemi marrëdhënie të mira',
        text: 'Për të lidhur botën në duhet të kemi marrëdhënie të mira',
        image: {
            uri:
                'https://reactnativecode.com/wp-content/uploads/2019/04/cloud.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#008081',
    },
    {
        key: 'k3',
        title: 'Çelësi kryesor për një marrëdhënie të mirë është komunikimi',
        text: 'Latest Technology Reports',
        image: {
            uri: 'https://reactnativecode.com/wp-content/uploads/2019/04/computer.png',
        },
        titleStyle: styles.title,
        textStyle: styles.text,
        imageStyle: styles.image,
        backgroundColor: '#008081',
    }
];