import React from 'react';
import { StyleSheet, Text, Button, View, TextInput, Image, TouchableHighlight, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import Info from '../info2.json';

class Reply extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            checked: false,
            toShow: 100
        }
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

    _ShowMore = () => {
        this.state.toShow = this.state.toShow + 120;
        alert(this.state.toShow)
    }


    render() {
        const { search } = this.state;
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
                <Searchbar
                    placeholder="Kërkoni për fjalë..."
                    onChangeText={query => { this.setState({ search: query }); }}
                    value={search}
                    onIconPress={() => Alert.alert('HEHE')}
                    style={{
                        width: wp("75%"),
                        borderRadius: 7.5,
                        height: hp("7.5%"),
                        marginTop: hp("2%")
                    }}
                />
                <View style={{
                    flex: 1,
                    maxWidth: "100%",
                    height: "100%",
                    backgroundColor: 'none',
                    paddingTop: 25,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ScrollView contentContainerStyle={styles.scrollview}>
                        {
                            Info.slice(0, this.state.toShow).map(item => {
                                return <React.Fragment>
                                    <TouchableHighlight onPress={this._Selected} underlayColor="white">
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            margin: 10
                                        }}>
                                            <Image style={styles.VideoPathImage} source={{ uri: item.VideoPath }} />
                                            <Text style={styles.textbelowimage}> {item.Shqip} </Text>
                                            <CheckBox
                                                center
                                                title='Selekto'
                                                checked={this.state.checked}
                                                checkedColor='#008081'
                                                fontFamily='Avenir'
                                                onPress={() => this.setState({ checked: !this.state.checked})}
                                            />
                                        </View>
                                    </TouchableHighlight>
                                </React.Fragment>

                            })
                        }
                    </ScrollView>
                </View>
                <TouchableHighlight style={styles.showMoregifs} onPress={this._ShowMore} underlayColor="white">
                    <Text style={{ fontSize: hp("2.5%"), fontFamily: "Avenir-Light", color: "#333" }}>
                        <Ionicons
                            name="md-arrow-dropdown"
                            color="#333"
                            size={hp("3.5%")}
                            style={{ backgroundColor: 'transparent', marginTop: hp("1%") }}
                        /> Më shumë </Text>
                </TouchableHighlight>
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
    }
});
