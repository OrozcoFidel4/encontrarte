import React from 'react'
import { View,Text, StyleSheet, ScrollView } from 'react-native'
import NavbarBack from '../components/NavbarBack'
import ProductCard from '../components/ProductCard'


const ListaProducto = () => {
    return (
        <View style={{backgroundColor: '#fffff3'}}>
                <NavbarBack/>
                <ScrollView>
                    
                    <Text style={styles.titulo}>Nombre Categoria</Text>
                    

                    <View style={styles.contenedorPrincipal}>
                        <View style={styles.contenedorProductos}>
                            
                            <ProductCard nombre='Cuadro de Caballos' precio={300} imageSource={require('../assets/producto.jpg')}></ProductCard>
                            <ProductCard nombre='Pintura Abstracta' precio={1500} imageSource={require('../assets/producto2.jpeg')}></ProductCard>
                            <ProductCard nombre='Pintura Marilyn' precio={1000} imageSource={require('../assets/producto3.jpg')}></ProductCard>
                            <ProductCard nombre='Buho Artesania' precio={80}imageSource={require('../assets/producto4.jpg')}></ProductCard>
                            <ProductCard nombre='Cuadro de Caballos' precio={300} imageSource={require('../assets/producto.jpg')}></ProductCard>
                            <ProductCard nombre='Pintura Abstracta' precio={1500} imageSource={require('../assets/producto2.jpeg')}></ProductCard>
                            <ProductCard nombre='Pintura Marilyn' precio={1000} imageSource={require('../assets/producto3.jpg')}></ProductCard>
                            <ProductCard nombre='Buho Artesania' precio={80}imageSource={require('../assets/producto4.jpg')}></ProductCard>
                            
                            
                        </View>
                    
                    </View>
                </ScrollView>
            </View>
    )
}

export default ListaProducto

const styles = StyleSheet.create({
    titulo: {
        fontSize: 30,
        fontFamily: 'MadeTommyBold',
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
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