import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Navbar from '../components/Navbar'
import { useFonts } from 'expo-font'
import CreatorContainer from '../components/CreatorContainer'

const Creadores = () => {
    
    //Fuentes Personalizadas
        const [fontsLoaded] = useFonts({
            MadeTommy: require('../assets/fonts/MADE TOMMY Regular_PERSONAL USE.otf'),
            MadeTommyBold: require('../assets/fonts/MADE TOMMY Bold_PERSONAL USE.otf'),
            MalgunGothic: require('../assets/fonts/malgun-gothic.ttf'),
        });

    return (
        <View style={{backgroundColor: '#FFFFF3'}}>
            <Navbar/>
            <ScrollView style={styles.scroll}>

                <View style={styles.scrollPadding}>
                    <Text style={styles.titulo}>Creadores</Text>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                    <CreatorContainer nombre="Nombre Creador" imageSource={require('../assets/images.jpg')}/>
                </View>
            </ScrollView>

        </View>
    )
}

export default Creadores

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontFamily: 'MadeTommyBold',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        color: '#1A1A1A'
    },
    scrollPadding:{
        paddingBottom: 140
    }
})