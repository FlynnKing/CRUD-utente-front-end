package com.utentibelli.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.utentibelli.demo.common.util.exeption.UpdateUtenteException;
import com.utentibelli.demo.model.Utente;
import com.utentibelli.demo.repository.UtenteRepository;

@Service
public class UtenteService {

    @Autowired
    UtenteRepository utenteRepository;

    public Page<Utente> findAll(Pageable pageable) {
		return utenteRepository.findAll(pageable);
	}

    public Utente save(Utente utente) {
        return utenteRepository.save(utente);
    }

    public Optional<Utente> findById(Long id) {
        return utenteRepository.findById(id);
    }

    public Utente update(Long id, Utente utente) {
        Optional<Utente> utenteResult = utenteRepository.findById(id);

        if (utenteResult.isPresent()) {
            Utente utenteUpdate = utenteResult.get();
            utenteUpdate.setNome(utente.getNome());
            utenteUpdate.setCognome(utente.getCognome());
            utenteUpdate.setEmail(utente.getEmail());
            utenteUpdate.setPassword(utente.getPassword());
            // utenteUpdate.setActive(utente.getActive());
            utenteRepository.save(utenteUpdate);
            return utenteUpdate;
        } else {
            throw new UpdateUtenteException("Utente non aggiornato");
        }

    }

    public void delete(Long id) {
		utenteRepository.deleteById(id);
	}


}
