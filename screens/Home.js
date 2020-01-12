import React from 'react';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Button, View, TextInput, Image, TouchableHighlight, Platform, Linking, ScrollView } from 'react-native';
import Info from '../fjalet-e-reja.json';
import AppIntroSlider from 'react-native-app-intro-slider';
import Modal from "react-native-modal";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            show_Main_App: false,
            TextInputValue: '',
            Video1: "",
            isModalVisible: false,
            pathsLength: false,
            inputvalue: "",
            warning: ''
        }
        global.paths = [];
        global.myText = ""
        global.myFullText = ""
        global.tobeshown = []
    };

    componentWillMount() {
        this.setState({ TextInputValue: '', warning: '' });
        this.props.navigation.navigate('Home')
        global.paths = []
        global.tobeshown = []
        global.myFullText = ""
    }

    on_Done_all_slides = () => {
        this.setState({ show_Main_App: true });
    };

    on_Skip_slides = () => {
        this.setState({ show_Main_App: true });
    };

    buttonClickListener = () => {
        if (this.state.TextInputValue != '') {
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
        } else {
            this.setState({
                warning: 'Ju lutem shkruani në hapësirën më lartë'
            })
        }
    }

    Raporto = () => {
        Linking.openURL('https://forms.gle/GtEcKMEzva67MNNV9')
    }

    RrethNesh = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
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
                    <ScrollView contentContainerStyle={styles.UnderView}>
                        <TextInput
                            ref={input => { this.textInput = input }}
                            placeholder="Shkruani këtu..."
                            style={styles.inputStyling}
                            onChangeText={TextInputValue => this.setState({ TextInputValue })}
                        />
                        <Text style={{ color: 'red', fontSize: 13.5, fontFamily: 'Avenir-Light'}}> {this.state.warning} </Text>
                        <TouchableHighlight
                            style={styles.SendButton}
                            onPress={this.buttonClickListener}
                        >   
                            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10, display: 'flex', flexDirection: 'row' }}>
                                <Text style={{ fontFamily: 'Avenir-Light', fontSize: 17.5, color: 'white' }}> Dërgo </Text>
                                <FontAwesome
                                    name="send-o"
                                    color="#fff"
                                    size={hp("2.5%")}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                            </View>
                            
                        </TouchableHighlight>
                        <View style={{ justifyContent: 'flex-start', backgroundColor: 'none', paddingLeft: hp("1%"), margin: hp("2.5%") }}>
                            <Text style={{ textAlign: 'left', color: '#333', fontFamily: 'Avenir-Light', fontSize: 15}}>Klikoni më poshtë për të mësuar më shumë për këtë aplikacion</Text>
                            <TouchableHighlight
                                style={styles.AboutUsButton}
                                onPress={this.RrethNesh}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons
                                        name="md-information-circle"
                                        color="#fff"
                                        size={hp("4%")}
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                    <Text style={{
                                        fontFamily: "Avenir-Light",
                                        fontSize: 17.5,
                                        margin: hp("1.25%"), 
                                        color: 'white'}}>Rreth nesh</Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <View style={{ justifyContent: 'flex-start', backgroundColor: 'none', paddingLeft: hp("1%"), margin: hp("2.5%"), marginLeft: hp("-1.5%") }}>
                            <Text style={{ textAlign: 'left', color: '#333', fontFamily: 'Avenir-Light', fontSize: 15 }}>Klikoni në butonin më poshtë për sugjerim rreth përdorimit të aplikacionit</Text>
                            <TouchableHighlight
                                style={styles.ReportButton}
                                onPress={this.Raporto}
                            >
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <MaterialIcons
                                        name="chat"
                                        color="#fff"
                                        size={hp("4%")}
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                    <Text style={{
                                        fontFamily: "Avenir-Light",
                                        fontSize: 17.5,
                                        margin: hp("1.25%"),
                                        color: 'white'
                                    }}>Raporto</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                    </ScrollView>
                    <Modal isVisible={this.state.isModalVisible}>
                        <View style={{ flex: 1 }}>
                            <ScrollView contentContainerStyle={styles.container1}>
                                <Image style={{ width: wp("90%"), height: hp("40%"), margin: 0 }} source={require('../assets/logo.png')} />
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir',
                                    fontSize: 25,
                                    color: 'white'
                                }}> Rreth CWB </Text>
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 17.5,
                                    color: 'white'
                                }}>Lidhja e botës përtej barrierave është qëllimi kryesor i aplikacionit tonë. Caku i tij është lehtësimi i komunikimit ndërmjet personave të shurdhër dhe komunitetit. Ky projekt mundësohet nga Ipko Foundation dhe mbështetet nga Unicef Innovations Lab Kosovo.</Text>
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir',
                                    fontSize: 25,
                                    color: 'white'
                                }}> Historiku i shkurtër </Text>
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 17.5,
                                    color: 'white'
                                }}>CWB bashkoi idetë e 6 anëtarëve të ekipit me po të njejtin emër në fund të vitit 2019. Ky aplikacion lindi me idenë për të ndihmuar komunitetin tonë, në këtë rast, përkatësisht për t'i ndihmuar personave të shurdhër. Në vendin tonë jetojnë rreth 5000 të shurdhër dhe duke i marrë parasysh këto shifra, e pamë të arsyeshme që të marrim iniciativë për të ardhur me diçka në këtë aspekt dhe si rezultat dolëm me aplikacionin CWB. </Text>
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir',
                                    fontSize: 25,
                                    color: 'white'
                                }}> Kushtet e përdorimit </Text>
                                <Text style={{
                                    margin: hp("1.5%"),
                                    textAlign: 'center',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 17.5,
                                    color: 'white'
                                }}>Ne do të sigurohemi që ju të keni performancën e dëshirueshme gjatë përdorimit të aplikacionit CWB. Por, natyrisht se ju duhet t'i përshtateni disa rregullave (neneve) me anë të të cilave do të sigurohet performanca, transparenca dhe siguria gjatë përdorimit të këtij aplikacioni: </Text>
                                <Text style={{
                                    margin: hp("0.5%"),
                                    width: wp("87.5%"),
                                    textAlign: 'left',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 12.5,
                                    color: 'white'
                                }}>1. Aplikacioni mund të përdoret nga të gjithë;</Text>
                                <Text style={{
                                    margin: hp("0.5%"),
                                    width: wp("87.5%"),
                                    textAlign: 'left',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 12.5,
                                    color: 'white'
                                }}>2. Në këtë aplikacion nuk do t'iu kërkohet të jepni të dhëna, prandaj asnjë informatë personale digjitale nuk do të mund të keqpërdoret;</Text>
                                <Text style={{
                                    margin: hp("0.5%"),
                                    width: wp("87.5%"),
                                    textAlign: 'left',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 12.5,
                                    color: 'white'
                                }}>3. CWB jep maksimumin në lehtësimin e komunikimit mes palëve pjesëmarrëse në aplikacion, por nuk merr përgjegjësi në rast të një keqkuptimi të mundshëm mes këtyre të fundit gjatë komunikimit brenda aplikacionit;</Text>
                                <Text style={{
                                    margin: hp("0.5%"),
                                    width: wp("87.5%"),
                                    textAlign: 'left',
                                    fontFamily: 'Avenir-Light',
                                    fontSize: 12.5,
                                    color: 'white'
                                }}>4. Si përdorues të aplikacionit, CWB ju dëshiron mirëseardhje dhe shfletim të këndshëm në aplikacionin tonë!</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <MaterialIcons
                                            name="copyright"
                                            color="#fff"
                                            size={hp("4%")}
                                            style={{ backgroundColor: 'transparent' }}
                                        />
                                        <Text style={{
                                            fontFamily: "Avenir-Light",
                                            fontSize: 17.5,
                                            margin: hp("2%"),
                                            color: 'white'
                                        }}>Të gjitha të drejtat e rezervuara! </Text>
                                        
                                    </View>
                                <Text style={{
                                    fontFamily: "Avenir-Light",
                                    fontSize: 17.5,
                                    fontStyle: 'italic',
                                    margin: hp("1.25%"),
                                    color: 'white'
                                }}>Prishtinë, 2020 </Text>
                                <View style={{ width: wp("90%"), justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <TouchableHighlight
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 7,
                                        },
                                        shadowOpacity: 0.41,
                                        shadowRadius: 9.11,

                                        elevation: 14,
                                        width: 40, height: 40, backgroundColor: '#fff', position: 'absolute', justifyContent: 'center', alignItems: 'center', padding: 0, borderRadius: 5, marginTop: hp("0.05%"), marginRight: hp("2.5%")
                                    }}
                                    onPress={this.RrethNesh}
                                >
                                    <MaterialIcons
                                        name="close"
                                        color="#333"
                                        size={hp("3%")}
                                        style={{ display: 'flex' }}
                                    />
                                </TouchableHighlight>
                                </View>

                            </ScrollView>
                        </View>
                    </Modal>
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
        marginTop: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14
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
    container1: {
        backgroundColor: '#008081',
        alignItems: 'center',
        borderRadius: 5,
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
    },
    SendButton: {
        backgroundColor: '#008081', 
        height: 42.5, 
        width: wp("45%"),
        margin: hp("1%"),
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        borderRadius: 10
    },
    AboutUsButton: {
        backgroundColor: '#008081',
        height: 42.5,
        width: wp("45%"),
        marginTop: hp("0.5%"),
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        borderRadius: 10
    },
    ReportButton: {
        backgroundColor: '#008081',
        height: 42.5,
        width: wp("45%"),
        marginTop: hp("0.5%"),
        position: "relative",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,

        elevation: 14,
        borderRadius: 10
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