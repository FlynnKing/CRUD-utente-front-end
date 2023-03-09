import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import React, {  useContext } from 'react';
import { AggiornamentoUtenti } from '../App'



function ListaUtente() {

  const { bambini, setBambini, setId, setNome, setCognome } = useContext(AggiornamentoUtenti);

  function EliminaUtente(id) {
    console.log("id")
    fetch('http://localhost:8080/api/utente/' + id, { method: 'DELETE' })
      .then(() => {
        // il filter ritorna tutti i true della condizione, trannte i false
        const newArray = bambini.filter(element => (element.id !== id))
        setBambini(newArray)
      })
      .catch((err) => {
        console.log(err.message);
      })

  }

  function cambioForm(id, nome, cognome) {
    document.getElementById('modifica').style.display = '';
    document.getElementById('aggiungi').style.display = 'none';
    setId(id);
    setNome(nome);
    setCognome(cognome);
  }



  return (

    <Card className="col" style={{ width: '18rem' }}>

      <Card.Body>
        <Form.Label className="pb-1" htmlFor="cognome" style={{ color: 'black' }}>Lista dei bimbi</Form.Label>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cognome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {
              bambini.map((element) => {
                return (
                  <tr key={element.id}>
                    <td>{element.id}</td>
                    <td>{element.nome}</td>
                    <td>{element.cognome}</td>
                    <td ><Button id={element.id} onClick={() => EliminaUtente(element.id)} variant="danger">Elimina</Button></td>
                    <td><Button id={element.id} onClick={() => cambioForm(element.id, element.nome, element.cognome)} variant="warning">Modifica</Button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default ListaUtente;