import './App.css';
import ListaUtente from './components/ListaUtente';
import FormUtente from './components/FormUtente';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

// or less ideally

export const AggiornamentoUtenti = React.createContext();
function App() {
  const [bambini, setBambini] = useState([]);
  const [idd, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <AggiornamentoUtenti.Provider value={{ bambini, setBambini, idd, setId, nome, setNome, cognome, setCognome}}>
          <Card className="container">
            <div className="container row">
              <FormUtente />
              <ListaUtente />
            </div>
          </Card>
        </AggiornamentoUtenti.Provider>

      </header>
    </div>
  );
}

export default App;
