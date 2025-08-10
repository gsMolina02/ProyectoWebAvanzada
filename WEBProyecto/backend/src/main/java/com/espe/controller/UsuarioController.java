package com.espe.controller;

import com.espe.entity.Usuario;
import com.espe.services.UsuarioService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {
    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/registro")
    public String registrarUsuario(@RequestBody Usuario usuario) {
        boolean registrado = usuarioService.registrarUsuario(usuario);
        if (registrado) {
            return "Registro exitoso";
        } else {
            return "El nombre de usuario ya está ocupado";
        }
    }
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody Usuario usuario) {
    boolean valido = usuarioService.validarLogin(usuario.getNombre(), usuario.getContrasena());
    if (valido) {
        Usuario usuarioCompleto = usuarioService.buscarPorNombre(usuario.getNombre());
        return ResponseEntity.ok(Map.of(
            "mensaje", "Login exitoso",
            "usuario", usuarioCompleto
        ));
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(Map.of(
            "mensaje", "Usuario o contraseña incorrectos"
        ));
    }
}

@GetMapping("/{id}")
public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
    Usuario usuario = usuarioService.buscarPorId(id);
    if (usuario != null) {
        return ResponseEntity.ok(usuario);
    } else {
        return ResponseEntity.notFound().build();
    }
}
}