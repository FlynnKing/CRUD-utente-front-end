package com.utentibelli.demo.common.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.utentibelli.demo.model.Utente;
import com.utentibelli.demo.repository.UtenteRepository;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class ApplicationStartUpRunner implements CommandLineRunner {

    @Autowired
    UtenteRepository utenteRepository;

    @Override
    public void run(String... args) throws Exception {

        Utente utente = new Utente();
        utente.setEmail("user@email.em");
        utente.setNome("Mario Rossi");
        utente.setCognome("m.rossi");
        utente.setPassword("password");
        utenteRepository.save(utente);
        log.info("INSERIMENTO UTENTE: {}", utente.getNome());

        Utente utente1 = new Utente();
        utente1.setEmail("costy@email.em");
        utente1.setNome("Costanza Blu");
        utente1.setCognome("c.Blu");
        utente1.setPassword("eeeeeeeeee");
        utenteRepository.save(utente1);
        log.info("INSERIMENTO UTENTE: {}", utente1.getNome());

        Utente utente2 = new Utente();
        utente2.setEmail("dadino@email.em");
        utente2.setNome("io bello");
        utente2.setCognome("d.rossi");
        utente2.setPassword("macarena");
        utenteRepository.save(utente2);
        log.info("INSERIMENTO UTENTE: {}", utente2.getNome());



      
    }

}
