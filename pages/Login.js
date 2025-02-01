import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'

//Icono
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

//Form
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Esquema de validación con Yup
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria'),
});

const Login = () => {

  const Navigation = useNavigation()

  // Usando react-hook-form para manejar el formulario
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
      console.log('Formulario enviado:', data);
      Navigation.navigate('HomeTab');
    };

  //Fuentes Personalizadas
      const [fontsLoaded] = useFonts({
          MadeTommy: require('../assets/fonts/MADE TOMMY Regular_PERSONAL USE.otf'),
          MadeTommyBold: require('../assets/fonts/MADE TOMMY Bold_PERSONAL USE.otf'),
          MalgunGothic: require('../assets/fonts/malgun-gothic.ttf'),
      });

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <View style={styles.container}>

      <Image style={styles.image} source={require('../assets/LogoEncontrarte.png')} resizeMode='contain'/>
      


<View style={styles.form}>
        <Text style={styles.titulo}>Iniciar Sesión</Text>

        {/* Email */}
        <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextInput style={styles.input} placeholder='Correo Electronico' keyboardType='email-address' value={field.value} onChangeText={field.onChange}/>
        )}
        />


        {/* Password */}
        <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextInput style={styles.input} placeholder='Contraseña' secureTextEntry={true} value={field.value} onChangeText={field.onChange}/>
        )}
        />


        <TouchableOpacity style={styles.boton} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.textoBtn}>
            Ingresar
          </Text>
        </TouchableOpacity>

        <View style={styles.containerTexto}>
          <Text style={styles.texto}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => Navigation.navigate('Register')} >
            <Text style={styles.registrate}>Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      {errors.email && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.email.message}</Text>
        </View>}
      
      {errors.password && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.password.message}</Text>
        </View>}

      

      <View style={styles.marginBottom}></View>
      
      
      
    </View>
    </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#E3298F',
    height: "100%",
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width:'70%',
    height: 100,
    marginBottom: 30
  },
  form:{
    width:'80%',
    height: 350,
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
  },
  marginBottom:{
    marginBottom: 50
  },
  msgContainer:{
    flexDirection: 'row',
    width: 'auto',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF9F9'
  },
  msgText:{
    color: 'black',
    fontFamily: 'MalgunGothic',
    fontSize: 14,
    marginLeft: 10
  }
})