package com.espe.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.espe.entity.Bloque;


public interface BloqueRepository extends JpaRepository<Bloque, Long> {
Bloque findTopByUsuarioIdOrderByBlockIndexDesc(Long usuarioId);
List<Bloque> findByUsuarioIdOrderByBlockIndexAsc(Long usuarioId);
}