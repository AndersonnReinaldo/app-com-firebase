import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import firebase from '../../firebaseConnection';

import { useNavigation } from '@react-navigation/native'


export const Login = () => {

  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function cadastrar(){

    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) =>{

        firebase.database().ref('usuarios').child(value.user.uid).set({
          nome : name
        })
      alert('USUARIO CRIADO COM SUCESSO!');
      setName('');
      setEmail('');
      setPassword('');

    }).catch(err => console.err)


  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={value => setName(value)}
        value={name}
      />

    <Text style={styles.texto}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={value => setEmail(value)}
        value={email}
      />

      <Text style={styles.texto}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        onChangeText={value => setPassword(value)}
        value={password}
      />

      <Button title="ACESSAR" onPress={() => cadastrar()} />

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent:'center'
  },
  containerList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17,
  },
});
