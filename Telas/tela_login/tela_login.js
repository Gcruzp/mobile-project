import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function App() {

  return (
    <View style={styles.container}>
      
      <Image style={styles.logo}
        source={require('./assets/logobranca.png')}
      />

      <Text style={styles.texto1}> Bem-Vindo ao Comandante</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao}>
        <Text>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.texto2}>
        <FontAwesome5 name="anchor" size={24} color="white" />
        Ainda não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a353b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFF',
    width: '70%',
    marginBottom: 20,
    color: '#222',
    fontSize: 17, 
    borderRadius: 7,
    padding: 15,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto1: {
    fontSize: '20',
    color: 'white',
    padding: 15 ,
  },
  texto2: {
    color: 'white',
    padding: 15 ,
    margin: 10,
  },
  botao: {
    backgroundColor: 'white',
    width: '50%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },

});