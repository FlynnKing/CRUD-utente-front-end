import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import { AggiornamentoUtenti } from '../App'


function FormUtente() {


    const { setBambini, idd, nome, setNome, cognome, setCognome } = useContext(AggiornamentoUtenti);

    function inserimento() {
    
        try {
            fetch('http://localhost:8080/api/utente', {
                method: 'POST',
                body: JSON.stringify({ nome: nome, cognome: cognome }),
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then(data => {
                    fetch('http://localhost:8080/api/utenti')
                        .then(response => response.json())
                        .then(data => {
                            setBambini(data.content)
                        }).catch((err) => {
                            console.log(err.message);
                        });
                    console.log("siiii èa ndaatììì")
                })
        } catch (error) {
            console.log(error);
        }
    }

    function ModificaUtente(idd) {
        console.log(idd)
        fetch('http://localhost:8080/api/utente/' + idd, {
            method: 'PUT',
            body: JSON.stringify({ nome: nome, cognome: cognome }),
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(() => {
            document.getElementById('modifica').style.display = 'none';
            document.getElementById('aggiungi').style.display = '';
        })
            .then(() => {
                fetch('http://localhost:8080/api/utenti')
                    .then(response => response.json())
                    .then(data => {
                        setBambini(data.content)
                    }).catch((err) => {
                        console.log(err.message);
                    });

            })
            .catch((err) => {
                console.log(err.message);
            })

    }

    function annulla() {
        document.getElementById('modifica').style.display = 'none';
        document.getElementById('aggiungi').style.display = '';
    }
    return (
        <Card className="col-4" style={{ width: '18rem' }}>

            <Card.Body>

                <Form.Label className="mt-3" htmlFor="nome" style={{ color: 'black' }}>Nome</Form.Label>
                <Form.Control type="text" id="nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                <Form.Label className="mt-4" htmlFor="cognome" style={{ color: 'black' }}>Cognome</Form.Label>
                <Form.Control type="text" id="cognome" value={cognome} onChange={(e) => { setCognome(e.target.value) }} />

                <Button id='aggiungi' className="mt-4" onClick={() => { inserimento() }} variant="primary" type="submit" style={{ display: "inline" }}>Aggiungi bimbo</Button>
                <div id='modifica' className="row" aria-disabled="true" style={{ display: "none" }}>
                    <Button className="mt-4 m-1 col" onClick={() => { ModificaUtente(idd) }} variant="warning" style={{ display: "block" }} type="submit" >aggiorna</Button>
                    <Button className="mt-4 m-1 col" onClick={() => { annulla() }} variant="danger" style={{ display: "block" }} type="submit" >annulla</Button>
                </div>

            </Card.Body>
        </Card>
    );
}

export default FormUtente;