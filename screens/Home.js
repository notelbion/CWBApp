import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, Image, TouchableHighlight } from 'react-native';
import Info from '../info2.json';
import { FloatingAction } from "react-native-floating-action";

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            TextInputValue: "",
            Video1: "",
            pathsLength: false,
        }
        global.paths = [];
        global.myText = ""
        global.myFullText = ""
        global.tobeshown = []
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
            this.props.navigation.navigate('ImageDisplay')
    }

    GjuhaShqipe = () => {
        alert("GjuhaShqipe")
    }

    GjuhaShenjave = () => {
        alert("GjuhaShenjave")
    }

    render() {
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
                            placeholder="Shkruani këtu..."
                            style={styles.inputStyling}
                            onChangeText={TextInputValue => this.setState({ TextInputValue })}
                        />
                        <TouchableHighlight
                            style={styles.SendButton}
                            onPress={this.buttonClickListener}
                        ><Image style={styles.sendImage} source={require('../assets/send.png')} /></TouchableHighlight>
                </View>
                    
                
                <FloatingAction
                    actions={actions}
                    onPressItem={name => {
                        console.log(`selected button: ${name}`);
                    }}
                />
            </View>


            
        );
    }
}


export default Home;

const styles = StyleSheet.create({
    UnderView: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "97.5%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: "90%",
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
        width: "50%",
        height: 40,
        justifyContent: "center",
        margin: 0.025,
        borderColor: "#777",
        borderWidth: 1,
        borderRadius: 10,
    },
    TextinButtonGjShq: {
        fontSize: 17.5,
        color: "#008081",
        fontFamily: "Helvetica Neue",
        fontWeight: "200",
    },
    TextinButtonGjShe: {
        fontSize: 17.5,
        color: "#008081",
        fontFamily: "Helvetica Neue",
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
        fontFamily: 'Helvetica Neue',
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
        right: 77.5,
        borderBottomRightRadius: 5
    }
});

const actions = [
    {
        text: "Accessibility",
        icon: require("../assets/send.png"),
        name: "bt_accessibility",
        position: 2
    },
    {
        text: "Location",
        icon: require("../assets/internet.png"),
        name: "bt_room",
        position: 3
    },
    {
        text: "Video",
        icon: require("../assets/excel.png"),
        name: "bt_videocam",
        position: 4
    }
];