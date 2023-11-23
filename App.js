import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import ButtonGradient from './ButtonGradient';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Imagen */}
      <Image
        source={require('./img/Logo.jpg')} // Ajusta el nombre de tu imagen según sea necesario
        style={styles.imagen}
      />
      <Text style={styles.titulo}>Hello</Text>
      <Text style={styles.subtitulo}> Sign in to your account</Text>
      <TextInput 
        placeholder='jhon@gmail.com'
        style={styles.textInput}
      />
      <TextInput 
        placeholder='password'
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword}>Forgot your password</Text>
      <ButtonGradient/>
      <Text style={styles.forgotPassword}>Don't have an account</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
  },
  textInput: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff' 
  },
  imagen: {
    flex: 20,
    width: '100%', // O ajusta el ancho según tus necesidades
    height: 200, // O ajusta la altura según tus necesidades
    resizeMode: 'cover', // O ajusta la propiedad de redimensionamiento según tus necesidades
    borderRadius: 30,
  },
  forgotPassword: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
