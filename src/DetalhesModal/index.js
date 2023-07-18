import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

export default function DetalhesModal(props) {
  return (
    <View style={styles.container}>
      <View style={styles.areaImg}>
        <Image source={require('../assets/gas.png')} />
        <Text style={styles.titulo}>Compensa usar {props.vantajoso}</Text>
      </View>

      <View style={styles.area}>
        <Text style={styles.preco}> Com os preços:</Text>
        <Text style={styles.text}>Álcool: R$ {props.valorAlcool} </Text>
        <Text style={styles.text}>Gasolina: R$ {props.valorGasolina} </Text>
        <TouchableOpacity style={styles.areaBtn} onPress={props.fechar}>
          <Text style={styles.btn}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  areaImg: {
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
  area: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  preco: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 15,
  },
  areaBtn: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 8,
    marginTop: 25,
    width: '70%',
    borderRadius: 5,
  },
  btn: {
    color: 'red',
    textAlign: 'center',
    fontSize: 15,
  },
});
