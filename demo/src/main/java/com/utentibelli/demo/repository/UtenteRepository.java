package com.utentibelli.demo.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

import com.utentibelli.demo.model.Utente;

public interface UtenteRepository extends JpaRepository<Utente, Long>{
    
    Page<Utente> findAll(Pageable pageable);
    
}
