import axios from 'axios';
import {useState,useEffect} from 'react';
import Dados from './components/dados';
import './App.css'
import { Fundo } from './components/styled';
import Filtros from './components/Filtros';

function App() {
  const[users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://randomuser.me/api/?results=284")
      .then(res => setUsers(res.data.results))
      .catch(err => console.log("erro em pegar os usuarios",err))
  },[])
  const [dadosDoInput, setDadosInput] = useState({})

  function SalvarDados(dados){
    setDadosInput(dados)
    console.log("Dados da função SalvarDados: " + dados);
  }

  return (
   <>
   <Fundo>
      <Filtros
        EnvioEstados = {SalvarDados}
      />
    <Dados
      dadosDoInput={dadosDoInput}
      users={users}
    />
   </Fundo>
   </>
  );
}

export default App;
