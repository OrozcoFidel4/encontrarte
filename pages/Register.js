import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { useState } from 'react'

//Icono
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import DateTimePicker from '@react-native-community/datetimepicker'
import { set } from 'react-hook-form'

//Form
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Esquema de validación con Yup
const validationSchema = yup.object().shape({
  nombre: yup
    .string()
    .required('El correo electrónico es obligatorio'),
  apellido: yup
    .string()
    .required('El correo electrónico es obligatorio'),
  email: yup
    .string()
    .email('Debe ser un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .required('La contraseña es obligatoria'),
  direccion: yup
    .string()
    .required('La direccion es obligatoria'),
  ciudad: yup
    .string()
    .required('La ciudad es obligatoria'),
  celular: yup.string()
    .matches(
      /^[0-9]{10}$/, 
      'El número de teléfono debe tener 10 dígitos'
    )
    .required('El número de teléfono es obligatorio')
});


const Register = () => {

  const Navigation = useNavigation()

  // Usando react-hook-form para manejar el formulario
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  
  const onSubmit = (data) => {
      console.log('Formulario enviado:', data);
      Navigation.navigate('Login');
  }

  //Fecha y Picker useState
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState()
  
  //Metodo para mostrar el Date
  const toggleDatePicker =()=>{
    setShowPicker(!showPicker);
  }

  const onChange = ({type}, selectedDate) => {
    if (type == 'set') {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker()
    }
  }

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

        <Controller
          name='email'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Nombre(s)' keyboardType='email-address' value={field.value} onChangeText={field.onChange}/>
          )}
        />

        <Controller
          name='Apellidos'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Apellido(s)' value={field.value} onChangeText={field.onChange}/>
          )}
        />


        <Controller
          name='email'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Correo Electronico' keyboardType='email-address' value={field.value} onChangeText={field.onChange}/>
          )}
        />

        <Controller 
          name='password'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Contraseña' value={field.value} onChangeText={field.onChange}/>
          )}
        />

        <Controller 
          name='direccion'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Direccion' value={field.value} onChangeText={field.onChange}/>
          )}
        />

        <Controller
          name='ciudad'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Ciudad' value={field.value} onChangeText={field.onChange}/>
          )}
        />

        <Controller 
          name='celular'
          control={control} 
          render={({ field }) => (
                    <TextInput style={styles.input} placeholder='Celular' value={field.value} onChangeText={field.onChange} keyboardType='phone-pad'/>
          )}
        />
          


        

        <Pressable style={styles.input} title='Fecha De Nacimiento' onPress={toggleDatePicker}/>
        
        {showPicker && (<DateTimePicker
        mode='date'
        display='spinner'
        value={date}
        onChange={onChange}/>)}

        
        
        

        
        <TouchableOpacity style={styles.boton} onPress={handleSubmit(onSubmit)}>
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

      {errors.email && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.email.message}</Text>
        </View>}
      
      {errors.password && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.password.message}</Text>
        </View>}
      
      {errors.ciudad && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.ciudad.message}</Text>
        </View>}
      
      {errors.direccion && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.direccion.message}</Text>
        </View>}
      
      
      {errors.celular && <View style={styles.msgContainer}>
        <MaterialIcons name="cancel" size={24} color="red" />
        <Text style={styles.msgText}>{errors.celular.message}</Text>
        </View>}

      <View style={styles.marginBottom}></View>

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
  },
  marginBottom:{
    marginBottom: 30
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