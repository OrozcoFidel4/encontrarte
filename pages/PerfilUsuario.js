import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import Navbar from '../components/Navbar'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

const PerfilUsuario = () => {
    
    const Navigation = useNavigation()

    //Fuentes Personalizadas
        const [fontsLoaded] = useFonts({
            MadeTommy: require('../assets/fonts/MADE TOMMY Regular_PERSONAL USE.otf'),
            MadeTommyBold: require('../assets/fonts/MADE TOMMY Bold_PERSONAL USE.otf'),
            MalgunGothic: require('../assets/fonts/malgun-gothic.ttf'),
        });
    
    return (
        <View style={{backgroundColor: '#FFFFF3'}}>
            <Navbar/>
            <Text style={styles.titulo}>Mi Perfil</Text>

            <View style={styles.containerPrincipal}>
                <View style={styles.centerContainer}>
                    <TouchableOpacity>
                        <Image source={require('../assets/images.jpg')} style={styles.image}/>
                    </TouchableOpacity>

                    <Text style={styles.nombre}>Nombre Usuario</Text>

                    <Text style={styles.informacionTitulo}>Información</Text>
                    <Text style={styles.informacion}>• utslrc@gmail.edu.mc</Text>
                    <Text style={styles.informacion}>• Jalisco y 59</Text>
                    <Text style={styles.informacion}>• San Luis Rio Colorado Sonora</Text>
                    <Text style={styles.informacion}>• 10-12-1995</Text>
                    <Text style={styles.informacion}>• 653 539 1729</Text>
                </View>

                <View style={styles.containerBotones}>
                    <TouchableOpacity style={styles.editarBtn}>
                        <Text style={styles.textoBoton}>Editar Perfil</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cerrarBtn} onPress={() => Navigation.navigate('Login')}>
                        <Text style={styles.textoBoton}>Cerrar Sesion</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

export default PerfilUsuario

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontFamily: 'MadeTommyBold',
        marginLeft: 20,
        marginTop: 20
    },
    containerPrincipal:{
        paddingBottom:140
    },
    centerContainer:{
        alignItems: 'center',
        marginTop: 30
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 100
    },
    nombre:{
        fontSize: 25,
        fontFamily: 'MadeTommyBold',
        marginTop: 20
    },
    informacionTitulo:{
        fontSize: 20,
        fontFamily: 'MadeTommyBold',
        color: '#634455',
        margin: 10
    },
    informacion:{
        fontSize: 15,
        fontFamily: 'MalgunGothic',
        color: '#634455',
        margin: 2
    },
    containerBotones:{
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-evenly'
    },
    editarBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 50,
        backgroundColor: '#634455',
        borderRadius: 20
    },
    cerrarBtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: 50,
        backgroundColor: '#E3298F',
        borderRadius: 20
    },
    textoBoton:{
        fontSize: 15,
        fontFamily: 'MalgunGothic',
        color: '#fffff3',
    }
})