import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [nome,setNome] = useState('-Melância-');
  const [sessao, setSessao] = useState('Stranger Things');
  const [cor, setCor] = useState('#150526')
  const [exibindo,setExipindo] = useState(true)
  const clicado = () =>{
      setNome("-Sorvete-");
      setSessao("Gilmore Girls");
      setExipindo(false);
  } 

  return (
    <View style={styles.container}>
      <View styles={{backgroundColor: `{cor}`}}>
        <Text style={styles.titulo}>{nome}</Text>
        <Text style={styles.paragrafo}>{sessao}</Text>
        <Text style={styles.paragrafo}>{exibindo ? "Está em sessão" : "Acabou"}</Text>
        <StatusBar style="auto" />
        <Button title ='trocar sessão' onPress={clicado} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#150526',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color: '#F25C05',
    fontSize: 28,
  },
  paragrafo:{
    fontSize:12,
    color:'#F20505',
  }
});
