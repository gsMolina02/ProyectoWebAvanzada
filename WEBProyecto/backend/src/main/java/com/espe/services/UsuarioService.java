package com.espe.services;

import com.espe.entity.Usuario;
import com.espe.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public boolean registrarUsuario(Usuario usuario) {
        if (usuarioRepository.existsByNombre(usuario.getNombre())) {
            return false;
        }   
        usuario.setContrasena(passwordEncoder.encode(usuario.getContrasena()));
        usuarioRepository.save(usuario);
        return true;
    }

    public Usuario buscarPorNombre(String nombre) {
        return usuarioRepository.findByNombre(nombre);
    }

    public boolean validarLogin(String nombre, String contrasena) {
        Usuario usuario = buscarPorNombre(nombre);
        if (usuario != null && passwordEncoder.matches(contrasena, usuario.getContrasena())) {
            return true;
        }
        return false;
    }
    public Usuario buscarPorId(Long id) {
    return usuarioRepository.findById(id).orElse(null);
}
}