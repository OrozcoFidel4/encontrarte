import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

import Navbar from '../components/Navbar'

const Producto = () => {
    return (
        <View style={{backgroundColor: '#fffff3'}}>
            <Navbar/>
            <ScrollView>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.tituloBold}>Bienvenido, </Text>
                    <Text style={styles.tituloRegular}>Usuario</Text>
                </View>

                <View style={styles.contenedorPrincipal}>
                    <View style={styles.contenedorProductos}>
                        
                        
                        
                    </View>

                    <Text style={styles.tituloCategorias}>Busca en nuestras categorias</Text>
                    
                    
                
                </View>
            </ScrollView>
        </View>
    )
}

export default Producto
const styles = StyleSheet.create({
    contenedorTitulo:{
        flexDirection: 'row',
        marginBottom: 20
    },
    tituloBold: {
        fontSize: 30,
        fontFamily: 'MadeTommyBold',
        marginLeft: 20,
        marginTop: 20,
        color: '#1A1A1A'
    },
    tituloRegular: {
        fontSize: 30,
        fontFamily: 'MadeTommy',
        marginTop: 20,
        color: '#1A1A1A'
    },
    contenedorPrincipal:{
        paddingBottom: 140
    },
    contenedorProductos:{
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        
    },
    tituloCategorias: {
        fontSize: 20,
        fontFamily: 'MadeTommyBold',
        marginLeft: 20,
        marginTop: 30,
        marginBottom: 20,
        color: '#1A1A1A'
    },
    
})