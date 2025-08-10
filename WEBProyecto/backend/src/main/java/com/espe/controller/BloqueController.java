package com.espe.controller;

import com.espe.entity.Bloque;
import com.espe.services.BloqueService;
import org.springframework.web.bind.annotation.*;
import com.espe.dto.GenerarRequest;

import java.util.List;

@RestController
@RequestMapping("/api/bloques")
@CrossOrigin(origins = "http://localhost:5173")
public class BloqueController {
    private final BloqueService service;

    public BloqueController(BloqueService service) {
        this.service = service;
    }

    @GetMapping
    public List<Bloque> getAll() {
        return service.getAll();
    }

    @PostMapping
    public Bloque addBloque(@RequestBody Bloque bloque) {
        return service.save(bloque);
    }

@GetMapping("/validar/{usuarioId}")
public boolean validarCadena(@PathVariable Long usuarioId) {
    return service.validarCadenaPorUsuario(usuarioId);
}
    @PostMapping("/generar")
public List<Bloque> generarBlockchain(@RequestBody GenerarRequest request) {
    return service.generarBlockchain(request.getUsuarioId(), request.getDificultad());
}

@GetMapping("/usuario/{usuarioId}")
public List<Bloque> getBloquesPorUsuario(@PathVariable Long usuarioId) {
    return service.getBloquesPorUsuario(usuarioId);
}

}