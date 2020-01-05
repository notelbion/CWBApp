import React from 'react';
import { StyleSheet, Text, Button, View, TouchableOpacity, Image, TouchableHighlight, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons, MaterialIcons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import Info from '../kategoria.json';

class Reply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selection: [],
            checked: false,
            toShow: 100,
            toshowornottoshow: 'none',
            backgroundColorofCategory: '',
            categoryShow: '',
            contentofScrollView: Info.slice(0, 10).map(item => { return <React.Fragment>
                <TouchableOpacity onPress={() => { 
                    this.setState(prevState => ({
                        selection: [...prevState.selection, item.VideoPath],
                        toshowornottoshow: 'flex',
                    }))
                    
                }}>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.41,
                        shadowRadius: 9.11,

                        elevation: 14,}}>
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
            contentofScrollView: Info.slice(0, 10).map(item => {
                return <React.Fragment>
                    <TouchableOpacity onPress={() => {
                        this.setState(prevState => ({
                            selection: [...prevState.selection, item.VideoPath],
                            toshowornottoshow: 'flex',
                        }))
                    }}>
                        <View style={{
                            justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.41,
                            shadowRadius: 9.11,

                            elevation: 14, }}>
                            <Image style={styles.VideoPathImage} source={{ uri: item.VideoPath }} />
                            <Text style={styles.textbelowimage}> {item.Shqip} </Text>
                        </View>
                    </TouchableOpacity>
                </React.Fragment>
            })
        }) 
    }

    SendToHome = () => {
        global.wordstoShow = []
    }

    Pershendetje = () => {
        this.state.categoryShow = 'Kategoria: Përshëndetje '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "PËRSHËNDETJE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14 }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Familja = () => {
        this.state.categoryShow = 'Kategoria: Familja '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "FAMILJA") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Profesione = () => {
        this.state.categoryShow = 'Kategoria: Profesione '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "PROFESIONI") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Ushqime = () => {
        this.state.categoryShow = 'Kategoria: Ushqime '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "USHQIM") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Trupi = () => {
        this.state.categoryShow = 'Kategoria: Trupi '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "TRUPI") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Materiale = () => {
        this.state.categoryShow = 'Kategoria: Materiale '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "MATERIALE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Orendi = () => {
        this.state.categoryShow = 'Kategoria: Orendi '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "ORENDI") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Religjion = () => {
        this.state.categoryShow = 'Kategoria: Religjion '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "RELIGJIONE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Koha = () => {
        this.state.categoryShow = 'Kategoria: Periudhat kohore '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "VITI") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Pyetje = () => {
        this.state.categoryShow = 'Kategoria: Pyetje '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "PYETJE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Kafshë = () => {
        this.state.categoryShow = 'Kategoria: Kafshë '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "KAFSHË") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Veprime = () => {
        this.state.categoryShow = 'Kategoria: Veprime '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "VEPRIME") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Shprehje = () => {
        this.state.categoryShow = 'Kategoria: Shprehje rutinë '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "SHPREHJE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Ngjyra = () => {
        this.state.categoryShow = 'Kategoria: Ngjyra '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "NGJYRA") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Numeror = () => {
        this.state.categoryShow = 'Kategoria: Numëror '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "NUMËROR") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Veshmbathje = () => {
        this.state.categoryShow = 'Kategoria: Veshmbathje '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "VESHMBATHJE") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14,
                                }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }

    Tjera = () => {
        this.state.categoryShow = 'Kategoria: Tjera '
        this.setState({
            backgroundColorofCategory: '#0F5B5C',
            contentofScrollView:
                Info.map(word => {
                    if (word.Kategoria === "TJERA") {
                        return <React.Fragment>
                            <TouchableOpacity onPress={() => {
                                this.setState(prevState => ({
                                    selection: [...prevState.selection, word.VideoPath],
                                    toshowornottoshow: 'flex',
                                }))
                            }}>
                                <View style={{
                                    justifyContent: 'center', alignItems: 'center', margin: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 7,
                                    },
                                    shadowOpacity: 0.41,
                                    shadowRadius: 9.11,

                                    elevation: 14, }}>
                                    <Image style={styles.VideoPathImage} source={{ uri: word.VideoPath }} />
                                    <Text style={styles.textbelowimage}> {word.Shqip} </Text>
                                </View>
                            </TouchableOpacity>
                        </React.Fragment>
                    }
                }
                )
        })
    }
    
    CategorySelector = () => {
        this.state.categoryShow = ''
        this.setState({
            backgroundColorofCategory: '#008081',
            contentofScrollView:
            <View style={{ margin: 0, padding: 0}}>
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
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Pershendetje} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialCommunityIcons
                                    name="human-greeting"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Përshëndetjet </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Familja} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialCommunityIcons
                                    name="baby-buggy"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Familja </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                <View style={styles.rowdisplay}>
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.Profesione} underlayColor="white">
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
                    <TouchableHighlight style={styles.categoryboxes} onPress={this.Ushqime} underlayColor="white">
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
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Trupi} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Ionicons
                                    name="ios-body"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Trupi </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Materiale} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialIcons
                                    name="content-copy"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Materiale </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowdisplay}>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Orendi} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialCommunityIcons
                                    name="sofa"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Orendi </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Religjion} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Image style={{
                                    height: hp("4%"),
                                    width: wp("5.5%"),
                                    resizeMode: 'contain'
                                }} 
                                source={require('../assets/pray.png')} />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Religjion </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowdisplay}>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Koha} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialIcons
                                    name="timeline"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Periudhat kohore </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Pyetje} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <FontAwesome
                                    name="question"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Pyetje </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowdisplay}>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Kafshë} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialCommunityIcons
                                    name="dog-side"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Kafshë </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Veprime} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <MaterialIcons
                                    name="done"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Veprime </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.rowdisplay}>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Shprehje} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Ionicons
                                    name="md-today"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Shprehje rutinë </Text>
                            </View>

                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Ngjyra} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Ionicons
                                    name="ios-color-palette"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Ngjyra </Text>
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
                                    fontWeight: "200"
                                }}> Numëror </Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.categoryboxes} onPress={this.Veshmbathje} underlayColor="white">
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                                <Ionicons
                                    name="ios-shirt"
                                    color="#333"
                                    size={hp("4%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={{
                                    fontSize: 16,
                                    color: "#333",
                                    fontFamily: "Avenir",
                                    fontWeight: "200"
                                }}> Veshmbathje </Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                <View style={styles.rowdisplay}>
                    <TouchableHighlight style={styles.categoryboxesunique} onPress={this.Tjera} underlayColor="white">
                        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <MaterialIcons
                            name="unfold-more"
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
                    paddingTop: hp("1%"),
                    alignItems: 'center',
                    marginTop: hp('-3%'),
                    justifyContent: 'center',
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
                    <ScrollView contentContainerStyle={styles.scrollview}>
                        {this.state.contentofScrollView}
                    </ScrollView>
                    <View style={{
                        width: wp("100%"),
                        height: 'auto',
                        display: "flex",
                        flexWrap: 'wrap',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        justifyContent: 'flex-start',
                        alignContent: 'center',
                        flexDirection: 'row',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        display: this.state.toshowornottoshow
                        }}>
                        {Object.entries(this.state.selection).map(([key, value]) => {
                            return <Image style={styles.VideoPathImageToSend} source={{ uri: value }} />
                        })}
                        <TouchableHighlight style={styles.sendToHm} onPress={this.SendToHome} underlayColor="white">
                            <MaterialIcons
                                name="send"
                                color="#333"
                                size={hp("4%")}
                                style={{ backgroundColor: 'transparent' }}
                            />
                        </TouchableHighlight>
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
    rowdisplay: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
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
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
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
        margin: hp("2%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },
    sendToHm: {
        padding: hp("1.25%"),
        justifyContent: 'center',
        position: 'absolute',
        marginTop: hp("0.5%"),
        marginLeft: hp("49.5%"),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
    },  
    categoryboxes: {
        padding: hp("1.25%"),
        backgroundColor: "white",
        borderRadius: 7.5,
        justifyContent: 'center',
        margin: hp("2%"),
        width: wp("40%")
    },
    categoryboxesunique: {
        padding: hp("1.25%"),
        backgroundColor: "white",
        borderRadius: 7.5,
        justifyContent: 'center',
        margin: hp("2%"),
        width: wp("87.5%"),
        marginBottom: 50
    }
});
