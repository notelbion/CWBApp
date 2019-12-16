import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Introduction extends React.Component {
    componentDidMount() {
        setTimeout(() => { this.props.navigation.navigate('Home')}, 3000); 
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextIntro}>Connecting the world beyond boundaries</Text>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}
                />

            </View>
        );
    }
}

export default Introduction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008081',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 450,
        height: 350
    }, 
    TextIntro: {
        fontSize: 25,
        color: "white",
        textAlign: "center",
        fontFamily: "Avenir-Light"
    }
});
