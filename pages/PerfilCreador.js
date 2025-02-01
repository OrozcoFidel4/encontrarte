import React from 'react'
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import NavbarBack from '../components/NavbarBack'
import CreatorProductContainer from '../components/CreatorProductContainer'

const PerfilCreador = () => {
    
    const Navigation = useNavigation()

    //Fuentes Personalizadas
        const [fontsLoaded] = useFonts({
            MadeTommy: require('../assets/fonts/MADE TOMMY Regular_PERSONAL USE.otf'),
            MadeTommyBold: require('../assets/fonts/MADE TOMMY Bold_PERSONAL USE.otf'),
            MalgunGothic: require('../assets/fonts/malgun-gothic.ttf'),
        });
    
    return (
        <View style={{backgroundColor: '#FFFFF3'}}>
            <NavbarBack/>
            
            <ScrollView>
                <View style={styles.containerPrincipal}>
                    <View style={styles.centerContainer}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images.jpg')} style={styles.image}/>
                        </TouchableOpacity>

                        <Text style={styles.nombre}>Nombre Creador</Text>

                        <Text style={styles.informacionTitulo}>Información</Text>
                        <Text style={styles.informacion}>• utslrc@gmail.edu.mc</Text>
                        <Text style={styles.informacion}>• Jalisco y 59</Text>
                        <Text style={styles.informacion}>• San Luis Rio Colorado Sonora</Text>
                        <Text style={styles.informacion}>• 10-12-1995</Text>
                        <Text style={styles.informacion}>• 653 539 1729</Text>

                            <Text style={styles.tituloProductos}>Productos de Nombre Creador</Text>

                        <CreatorProductContainer nombre="Nombre Producto" precio={1000} imageSource={require('../assets/producto.jpg')}/>
                        <CreatorProductContainer nombre="Nombre Producto" precio={1000} imageSource={require('../assets/producto3.jpg')}/>
                        <CreatorProductContainer nombre="Nombre Producto" precio={10} imageSource={require('../assets/producto4.jpg')}/>
                        <CreatorProductContainer nombre="Nombre Producto" precio={120} imageSource={require('../assets/producto5.jpg')}/>
                    </View>

                    
                </View>
            </ScrollView>
            
        </View>
    )
}

export default PerfilCreador

const styles = StyleSheet.create({
    containerPrincipal:{
        paddingTop: 20,
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
    tituloProductos: {
        fontSize: 20,
        marginLeft: 20,
        fontFamily: 'MadeTommyBold',
        alignSelf: 'left',
        marginTop: 60,
        marginBottom: 10,
        color: '#1A1A1A'
    },
    
})