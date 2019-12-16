import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import Info from '../info2.json';

class ImageDisplay extends React.Component {
    constructor(props) {
        super(props)

        // this.FjalaVete = global.tobeshown.map(element => {
        //     return element;
        // })
    };
    
    render() {
        
        return(
            <View style={styles.container}>
                <Text style={styles.FullText}> Fjalia që ju shkruajtët: </Text>
                <Text style={styles.OutputText}> {global.myFullText} </Text>
                <Text style={styles.InSignLang}> Në gjuhë të shenjave: {global.tobeshown} </Text>
                <View style={styles.ImagesRow}>
                        {global.paths.map(item => {
                            return <React.Fragment>
                                <Image style={styles.VideoPathImage} source={{ uri: item }} />
                            </React.Fragment>
                        })}
                </View>
                <View style={styles.buttonRow}>
                    <TouchableHighlight
                        style={styles.BallinaButton}
                        onPress={this.buttonClickListener}
                    >
                        <React.Fragment>
                            <Image style={styles.BallinaButtonImage} source={require('../assets/home.png')} />
                            <Text style={styles.ButtonsText}>Ballina</Text>
                        </React.Fragment>
                        
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.ReplyButton}
                        onPress={this.buttonClickListener}
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
        paddingLeft: 15,
        flex: 1,
        backgroundColor: '#008081',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    buttonRow: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: "95%"
    },
    ImagesRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: "95%"
    },
    VideoPathImage: {
        marginTop: 10,
        height: 100,
        width: 180,
    },
    FullText: {
        color: "white",
        fontSize: 17.5,
        marginTop: 70,
        fontFamily: "Helvetica Neue",
        fontWeight: "200",
    },
    OutputText: {
        fontFamily: "Helvetica Neue",
        fontWeight: "200",
        fontSize: 25,
        color: "white",
        textDecorationStyle: "solid",
        marginTop: 10,
        textDecorationLine: "underline"
    },
    AboveSignLang: {
        marginTop: 10,
        color: "white",
        fontSize: 18,
        fontFamily: "Helvetica Neue",
        fontWeight: "200",
    },
    InSignLang: {
        marginTop: 50,
        color: "white",
        fontSize: 17.5,
        fontFamily: "Helvetica Neue",
        fontWeight: "200",
    },
    ReplyButton: {
        height: 42.5,
        width: 180,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
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
        width: 180,
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
        fontFamily: "Helvetica Neue",
        fontSize: 18,
        fontWeight: "500"
    }
});
