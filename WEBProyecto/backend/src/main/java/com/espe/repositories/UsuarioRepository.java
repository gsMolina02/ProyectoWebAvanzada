package com.espe.repositories;

import com.espe.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    boolean existsByNombre(String nombre);
    Usuario findByNombre(String nombre);
}