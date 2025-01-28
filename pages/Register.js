import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'


const Register = () => {

  const Navigation = useNavigation()

  //Fuentes Personalizadas
      const [fontsLoaded] = useFonts({
          MadeTommy: require('../assets/fonts/MADE TOMMY Regular_PERSONAL USE.otf'),
          MadeTommyBold: require('../assets/fonts/MADE TOMMY Bold_PERSONAL USE.otf'),
          MalgunGothic: require('../assets/fonts/malgun-gothic.ttf'),
      });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/LogoEncontrarte.png')} resizeMode='contain'/>
      
      <View style={styles.form}>
        <Text style={styles.titulo}>Registrate</Text>
        <TextInput style={styles.input} placeholder='Correo Electronico'/>
        <TextInput style={styles.input} placeholder='Contraseña'/>
        <TextInput style={styles.input} placeholder='Direccion'/>
        <TextInput style={styles.input} placeholder='Ciudad'/>
        <TextInput style={styles.input} placeholder='Fecha De Nacimiento'/>
        <TextInput style={styles.input} placeholder='Celular'/>
        <TouchableOpacity style={styles.boton} onPress={() => Navigation.navigate('Login')}>
          <Text style={styles.textoBtn}>
            Registrar
          </Text>
        </TouchableOpacity>

        <View style={styles.containerTexto}>
          <Text style={styles.texto}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => Navigation.navigate('Login')}>
            <Text style={styles.registrate}>Inicia Sesion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({
  scroll:{
    backgroundColor: '#E3298F',
  },
  container:{
    height: "100%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200
  },
  image:{
    width:'70%',
    height: 100,
    marginBottom: 30
  },
  form:{
    width:'80%',
    height: 'auto',
    backgroundColor: '#FFFFF3',
    borderRadius: 20,
    alignItems: 'center',
    paddingVertical: 30,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  titulo:{
    fontFamily: 'MadeTommyBold',
    color: '#1A1A1A',
    fontSize: 35,
    marginBottom: 30
  },
  input:{
    backgroundColor: '#FFF9F9',
    width: '70%',
    height: 40,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius:10,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2
  },
  boton:{
    marginTop: 10,
    width: '35%',
    height: 35,
    backgroundColor: '#44634E',
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 0},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBtn:{
    fontFamily: 'MalgunGothic',
    fontSize: 15,
    color: '#FFFFF3'
  },
  containerTexto:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  texto:{
    fontFamily: 'MalgunGothic',
    fontSize: 15,
    color: '#1A1A1A'
  },
  registrate:{
    fontFamily: 'MalgunGothic',
    fontSize: 15,
    textDecorationLine: 'underline',
    color: '#44634E'
  }
})