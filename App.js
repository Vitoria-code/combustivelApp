import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DetalhesModal from './src/DetalhesModal';

export default function App() {
  const [inputAlcool, setInputAlcool] = useState('');
  const [inputGasolina, setInputGasolina] = useState('');
  const [modal, setModal] = useState(false);

  function calcular() {
    const resultado = parseFloat(inputAlcool) / parseFloat(inputGasolina);
    if (resultado < 0.7) {
      return 'álcool';
    } else {
      return 'gasolina';
    }
  }

  function fecharModal() {
    setModal(false);
    setInputAlcool('');
    setInputGasolina('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaImg}>
        <Image style={styles.logo} source={require('./src/assets/logo.png')} />
        <Text style={styles.text}>Qual a melhor opção?</Text>
      </View>
      <Text style={styles.textInput}>Álcool (preço por litro):</Text>
      <TextInput
        value={inputAlcool}
        style={styles.input}
        onChangeText={text => setInputAlcool(text)}
        keyboardType="numeric"
      />
      <Text style={styles.textInput}>Gasolina (preço por litro):</Text>
      <TextInput
        value={inputGasolina}
        style={styles.input}
        onChangeText={text => setInputGasolina(text)}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.areaBtn} onPress={() => setModal(true)}>
        <Text style={styles.btn}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={modal}>
        <DetalhesModal
          fechar={fecharModal}
          vantajoso={calcular()}
          valorGasolina={inputGasolina}
          valorAlcool={inputAlcool}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  logo: {
    backgroundColor: '#FFF',
    borderRadius: 100,
  },
  areaImg: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  textInput: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    marginTop: 5,
  },
  input: {
    borderWidth: 2,
    backgroundColor: '#FFF',
    margin: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
  areaBtn: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
    margin: 5,
    marginTop: 20,
  },
  btn: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal: {
    color: '#FFF',
    backgroundColor: 'red',
  },
});
