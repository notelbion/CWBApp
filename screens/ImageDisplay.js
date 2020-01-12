import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import Info from '../info2.json';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class ImageDisplay extends React.Component {
    constructor(props) {
        super(props)
        // this.FjalaVete = global.tobeshown.map(element => {
        //     return element;
        // })
    };
    ballinaClick = () => {
        this.props.navigation.navigate('Home')
        global.paths = []
        global.tobeshown = []
        global.myFullText = ""
    }
    replyClick = () => {
        this.props.navigation.navigate('Reply')
    }
    render() {
        var contenti = 0
        return(
            <View style={styles.container}>
                <Text style={styles.FullText}> Fjalia që ju shkruajtët: </Text>
                <Text style={styles.OutputText}> {global.myFullText} </Text>
                <Text style={styles.InSignLang}> Në gjuhë të shenjave: </Text>
                <Text style={styles.OutputTextToBeShown}> { paths.length > 0 ? global.tobeshown.join(", ") : (contenti = 1, "Oops") } </Text>
                <View style={{
                    flex: 1,
                    maxWidth: "100%",
                    height: "100%",
                    backgroundColor: 'none',
                    paddingTop: 25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ScrollView contentContainerStyle={styles.ImagesRow}>
                        {
                        contenti != 1 ? global.paths.map(item => {
                            return <Image style={styles.VideoPathImage} source={{ uri: item }} />
                        }) : <React.Fragment>
                                    <Text style={styles.OutputTextToBeShownSorry}>Na vjen keq! Asnjë rezultat nuk u gjet nga kërkimi juaj! </Text>
                                    <MaterialCommunityIcons
                                        name="emoticon-sad"
                                        color="#fff"
                                        size={hp("15%")}
                                        style={{ opacity: .75, backgroundColor: 'transparent', margin: hp("5%")}}
                                    />
                                </React.Fragment>
                    } 
                    </ScrollView>
                </View>
                <View style={styles.buttonRow}>
                    <TouchableHighlight
                        style={styles.BallinaButton}
                        onPress={this.ballinaClick}
                    >
                        <React.Fragment>
                            <Image style={styles.BallinaButtonImage} source={require('../assets/home.png')} />
                            <Text style={styles.ButtonsText}>Ballina</Text>
                        </React.Fragment>
                        
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.ReplyButton}
                        onPress={this.replyClick}
                    >
                        <React.Fragment>
                            <Image style={styles.ReplyButtonImage} source={require('../assets/reply.png')} />
                            <Text style={styles.ButtonsText}>Replikoni</Text>
                        </React.Fragment> 
                    </TouchableHighlight>
                </View>
                

            </View>
        )
    }
}
// const ImagePaths = this.props.getParam('ImagePaths');
export default ImageDisplay;


const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        flex: 1,
        backgroundColor: '#008081',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonRow: {
        alignItems: 'center',
        flexDirection: 'row',
        width: wp("100%"),
        marginBottom: hp("2.5%")
    },
    ImagesRow: {
        width: wp("100%"),
        justifyContent: 'center',
        alignItems: 'center',
    },
    VideoPathImage: {
        margin: 0,
        height: 130,
        width: wp("60%"),
    },
    FullText: {
        marginLeft: 15,
        color: "white",
        fontSize: 17.5,
        marginTop: 70,
        fontFamily: "Avenir",
        fontWeight: "200",
    },
    OutputText: {
        marginLeft: 15,
        fontFamily: "Avenir",
        fontWeight: "200",
        fontSize: 25,
        color: "white",
        textDecorationStyle: "solid",
        marginTop: 10,
        textDecorationLine: "underline",
    },
    OutputTextToBeShown: {
        marginLeft: 15,
        fontFamily: "Avenir",
        fontWeight: "200",
        fontSize: 25,
        color: "white",
        textDecorationStyle: "solid",
        marginTop: 10,
        textDecorationLine: "underline",
        textTransform: 'capitalize'
    },
    OutputTextToBeShownSorry: {
        marginLeft: 15,
        fontFamily: "Avenir",
        fontWeight: "200",
        fontSize: 25,
        textAlign: 'center',
        color: "white",
        textDecorationStyle: "solid",
        marginTop: 10,
    },
    AboveSignLang: {
        marginTop: 10,
        color: "white",
        fontSize: 18,
        fontFamily: "Avenir",
        fontWeight: "200",
    },
    InSignLang: {
        marginTop: 25,
        color: "white",
        fontSize: 17.5,
        fontFamily: "Avenir",
        fontWeight: "200",
        marginLeft: 15
    },
    ReplyButton: {
        height: 42.5,
        width: wp("45%"),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginLeft: wp("2.5%"),
        shadowColor: "#333",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 1,
    },
    ReplyButtonImage: {
        height: 30,
        width: 30,
        resizeMode: 'center',
        marginRight: 10
    },
    BallinaButton: {
        height: 42.5,
        width: wp("45%"),
        marginLeft: wp("4%"),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        shadowColor: "#333",
        shadowOffset: {width: 0, height: 4},
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
    }
});
