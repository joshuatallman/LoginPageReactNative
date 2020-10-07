import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
return(
  <View style={{flex:1}}>
    <View style={styles.container}>
    <Image style={{
      // resizeMode: 'center',      
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: 50
    }}
    source={require('./images/shop-basket.webp')}></Image>
    <TextInput style={styles.inpuContainer} placeholder="E-postanızı giriniz..." />
    <TextInput style={styles.inpuContainer} placeholder="Şifre giriniz..." />
    <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.button}>Giriş Yap</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.buttonContainer}>
    <Text style={styles.button}>Kayıt Ol</Text>
  </TouchableOpacity >
    </View>
  </View>

);
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#80CBC4',

  },
  inpuContainer: {
    backgroundColor: '#ECEFF1',
    padding: 20,
    margin: 10,
    borderRadius: 10
  },
  buttonContainer: {
    backgroundColor: '#546E7A',
    padding: 20,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  button: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 20
  }
});