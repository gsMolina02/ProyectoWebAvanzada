package com.espe.services;

import com.espe.entity.Bloque;
import com.espe.repositories.BloqueRepository;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.security.MessageDigest;

@Service
public class BloqueService {
    private final BloqueRepository repo;

    public BloqueService(BloqueRepository repo) {
        this.repo = repo;
    }

    public List<Bloque> getAll() {
        return repo.findAll();
    }

    public Bloque save(Bloque bloque) {
        // Aquí puedes agregar la lógica de hash y validación
        return repo.save(bloque);
    }

public boolean validarCadenaPorUsuario(Long usuarioId) {
    List<Bloque> bloques = repo.findByUsuarioIdOrderByBlockIndexAsc(usuarioId);
    if (bloques.isEmpty()) return true;

    // Validar bloque Génesis
    Bloque genesis = bloques.get(0);
    if (genesis.getPreviousHash() == null || !genesis.getPreviousHash().equals("0")) return false;
    if (!genesis.getHash().equals(calcularHash(genesis))) return false;

    if (bloques.size() == 1) return true;

    for (int i = 1; i < bloques.size(); i++) {
        Bloque actual = bloques.get(i);
        Bloque anterior = bloques.get(i - 1);

        // Validar índice consecutivo
        if (actual.getIndex() != anterior.getIndex() + 1) return false;

        // Validar previousHash
        if (!actual.getPreviousHash().equals(anterior.getHash())) return false;

        // Validar hash
        String hashCalculado = calcularHash(actual);
        if (!actual.getHash().equals(hashCalculado)) return false;
    }
    return true;
}

    // Ejemplo de función para calcular el hash (ajusta según tu algoritmo real)
private String calcularHash(Bloque bloque) {
    // Usar un formato fijo para el timestamp
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
    String datos = bloque.getIndex() + bloque.getTimestamp().format(formatter) +
                   bloque.getData() + bloque.getPreviousHash() + bloque.getNonce();
    try {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hashBytes = digest.digest(datos.getBytes());
        StringBuilder hexString = new StringBuilder();
        for (byte b : hashBytes) {
            String hex = Integer.toHexString(0xff & b);
            if(hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    } catch (NoSuchAlgorithmException e) {
        throw new RuntimeException(e);
    }
}

public List<Bloque> generarBlockchain(Long usuarioId, int dificultad) {
    List<Bloque> cadena = new ArrayList<>();
    // Buscar el último bloque del usuario
Bloque ultimoBloque = repo.findTopByUsuarioIdOrderByBlockIndexDesc(usuarioId); // Debes tener este método en tu repositorio

    String previousHash = (ultimoBloque != null) ? ultimoBloque.getHash() : "0";
    int startIndex = (ultimoBloque != null) ? ultimoBloque.getIndex() + 1 : 0;
    int cantidadBloques = 5; // Puedes ajustar la cantidad

    for (int i = 0; i < cantidadBloques; i++) {
        Bloque bloque = new Bloque();
        bloque.setIndex(startIndex + i);
        bloque.setTimestamp(LocalDateTime.now());
        bloque.setPreviousHash(previousHash);
        bloque.setUsuarioId(usuarioId);

        if (startIndex + i == 0) {
            bloque.setData("Genesis Block del usuario " + usuarioId);
        } else {
            bloque.setData("Bloque #" + (startIndex + i) + " del usuario " + usuarioId);
        }

        // Minado
        int nonce = 0;
        String hash;
        String prefix = "0".repeat(dificultad);
        int maxIntentos = 100000;
        int intentos = 0;
        do {
            bloque.setNonce(Long.valueOf(nonce));
            hash = calcularHash(bloque);
            nonce++;
            intentos++;
            if (intentos > maxIntentos) break;
        } while (!hash.startsWith(prefix));
        bloque.setHash(hash);

        repo.save(bloque);
        cadena.add(bloque);
        previousHash = hash;
    }
    return cadena;
}
public List<Bloque> getBloquesPorUsuario(Long usuarioId) {
    return repo.findByUsuarioIdOrderByBlockIndexAsc(usuarioId);
}
}