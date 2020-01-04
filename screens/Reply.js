import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import Info from '../info2.json';

class Reply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: [],
            checked: false,
            toShow: 100,
            backgroundColorofCategory: '',
            categoryShow: '',
            contentofScrollView: Info.slice(0, 50).map(item => { return <React.Fragment>
                <TouchableOpacity onPress={() => { 
                    this.setState(prevState => ({
                        selection: [...prevState.selection, item.VideoPath],
                    }))
                    
                }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10}}>
                            <Image style={styles.VideoPathImage} source={{ uri: item.VideoPath }} />
                            <Text style={styles.textbelowimage}> {item.Shqip} </Text>
                        </View>
                    </TouchableOpacity>
                </React.Fragment>
            
            }),
            
        };

        
    }

    GjuhaShqipe = () => {
        this.props.navigation.navigate('Home')
    }

    handleFirstCheckboxChange = (firstChecked) => {
        this.setState({ firstChecked })
    }

    handleSecondCheckboxChange = (secondChecked) => {
        this.setState({ secondChecked })
    }

    updateSearch = search => {
        this.setState({ search });
    };

    V0 = () => {
        this.setState({
            backgroundColorofCategory: '',
            contentofScrollView: Info.slice(0, 50).map(item => {
                return <React.Fragment>
                    <TouchableOpacity onPress={() => {
                        this.setState(prevState => ({
                            selection: [...prevState.selection, item.VideoPath],
                        }))
                    }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <Image style={styles.VideoPathImage} source={{ uri: item.VideoPath }} />
                            <Text style={styles.textbelowimage}> {item.Shqip} </Text>
                        </View>
                    </TouchableOpacity>
                </React.Fragment>
            })
        }) 
    }


    Numeror = () => {
        this.state.categoryShow = 'Kategoria: Numëror '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView: 
            Info.map(word => {
                if (word.Kategoria === "Numëror") {
                    return <React.Fragment>
                        <TouchableOpacity onPress={() => {
                            this.setState(prevState => ({
                                selection: [...prevState.selection, word.VideoPath],
                            }))
                        }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                            </View>
                        </TouchableOpacity>
                    </React.Fragment>
                }
            }
        )})
    }

    CategorySelector = () => {
        this.state.categoryShow = ''
        this.setState({
            backgroundColorofCategory: '#008081',
            contentofScrollView:
            <View>
                <View style={styles.rowdisplay1}> 
                    <Text style={{
                        color: "white",
                        fontFamily: 'Avenir-Light',
                        fontSize: hp("3.5%"),
                        margin: 10
                    }}> Zgjedhni kategorinë: </Text>
                    <TouchableHighlight onPress={this.V0}>
                    <MaterialIcons
                            name="close"
                            color="#fff"
                            size={hp("5%")}
                            style={{ backgroundColor: 'transparent', margin: hp("1.25%"), marginLeft: hp("10%") }}
                    />
                    </TouchableHighlight>
                </View>
                <View style={styles.rowdisplay}>
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.CategorySelector} underlayColor="white">
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <MaterialIcons
                                name="person-pin"
                                color="#333"
                                size={hp("4%")}
                                style={{ backgroundColor: 'transparent' }}
                            />
                            <Text style={{
                                fontSize: 16,
                                color: "#333",
                                fontFamily: "Avenir",
                                fontWeight: "200" }}> Profesione </Text>
                        </View>
                        
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.CategorySelector} underlayColor="white">
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                            <MaterialIcons
                                name="local-dining"
                                color="#333"
                                size={hp("4%")}
                                style={{ backgroundColor: 'transparent' }}
                            />
                            <Text style={{
                                fontSize: 16,
                                color: "#333",
                                fontFamily: "Avenir",
                                fontWeight: "200" }}> Ushqime </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.rowdisplay}>
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.Numeror} underlayColor="white">
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <MaterialIcons
                            name="format-list-numbered"
                            color="#333"
                            size={hp("4%")}
                            style={{ backgroundColor: 'transparent' }}
                        />
                            <Text style={{
                                fontSize: 16,
                                color: "#333",
                                fontFamily: "Avenir",
                                fontWeight: "200" }}> Numëror </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.CategorySelector} underlayColor="white">
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <MaterialIcons
                            name="questioncircleo"
                            color="#333"
                            size={hp("4%")}
                            style={{ backgroundColor: 'transparent' }}
                        />
                            <Text style={{
                                fontSize: 16,
                                color: "#333",
                                fontFamily: "Avenir",
                                fontWeight: "200" }}> Tjera </Text>
                        </View>
                    </TouchableHighlight>

                </View>
            </View>
        })
    }


    render() {
        return(
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
                <TouchableHighlight style={styles.filter} onPress={this.CategorySelector} underlayColor="white">
                        <MaterialIcons
                            name="sort"
                            color="#333"
                            size={hp("4%")}
                            style={{ backgroundColor: 'transparent'}}
                        />
                </TouchableHighlight>
                <View style={{
                    flex: 1,
                    maxWidth: "100%",
                    height: "100%",
                    backgroundColor: 'none',
                    paddingTop: hp("2%"),
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: "white",
                        fontFamily: 'Avenir-Light',
                        fontSize: hp("3%"),
                        margin: hp("1%"),
                        width: wp("100%"),
                        padding: hp("1%"),
                        textAlign: 'center',
                        backgroundColor: this.state.backgroundColorofCategory
                    }}> {this.state.categoryShow} </Text>
                    {/* <Text> {this.state.selectionview} </Text> */}
                    <TouchableHighlight
                        style={styles.GjShq}
                        onPress={() => { alert(this.state.selection) }}
                    ><Text>whos pressed</Text></TouchableHighlight>
                    <ScrollView contentContainerStyle={styles.scrollview}>
                        {this.state.contentofScrollView}
                    </ScrollView>
                    <View style={styles.view2}>
                        {Object.entries(this.state.selection).map(([key, value]) => {
                            return <Image style={styles.VideoPathImageToSend} source={{ uri: value }} />
                        })}
                        <MaterialIcons
                            name="send"
                            color="#333"
                            size={hp("5%")}
                            style={{ backgroundColor: 'transparent', margin: hp("1.25%"), marginLeft: hp("10%") }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Reply;


const styles = StyleSheet.create({
    scrollview: {
        width: wp("100%"),
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },  
    scrollview1: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },  
    view2: {
        width: wp("100%"),
        height: hp("7.5%"),
        display: "flex",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    }, 
    rowdisplay: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    rowdisplay1: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        backgroundColor: '#008081',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: wp("100%")
    },
    textbelowimage: {
        marginTop: 5,
        color: "white",
        fontSize: hp("2%"),
        fontFamily: "Avenir",
        fontWeight: "200",
        width: wp("40%"),
        textAlign: 'center'
    },
    ChooseLang: {
        alignItems: "center",
        marginTop: 50,
        justifyContent: "center",
        flexDirection: "row"
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
        fontSize: 16,
        color: "#008081",
        fontFamily: "Avenir",
        fontWeight: "200",
    },
    TextinButtonGjShe: {
        fontSize: 18.5,
        color: "#008081",
        fontFamily: "Avenir",
        fontWeight: "300",
    },
    VideoPathImage: {
        marginTop: 10,
        height: 100,
        width: wp("40%"),
    },
    VideoPathImageToSend: {
        margin: 5,
        height: hp("6%"),
        width: wp("20%"),
    },
    showMoregifs: {
        padding: wp("1.25%"),
        backgroundColor: "white",
        borderRadius: 7.5,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        width: wp("50%"),
        margin: hp("2%")
    },
    filter: {
        padding: hp("1.25%"),
        backgroundColor: "white",
        borderRadius: 7.5,
        justifyContent: 'center',
        margin: hp("2%")
    },
    categoryboxes: {
        padding: hp("1.25%"),
        backgroundColor: "white",
        borderRadius: 7.5,
        justifyContent: 'center',
        margin: hp("2%"),
        width: wp("40%")
    }
});
