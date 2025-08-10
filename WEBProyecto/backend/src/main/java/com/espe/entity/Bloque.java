package com.espe.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Bloque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "block_index")
    private Integer blockIndex;

    private LocalDateTime timestamp;
    private String data;
    private String previousHash;
    private String hash;
    private Long nonce;
    @Column(name = "usuario_id")
    private Long usuarioId;

    // Constructor vacío
    public Bloque() {}

    

    // Getters y setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Integer getIndex() { return blockIndex; }
    public void setIndex(Integer index) { this.blockIndex = index; }

    public LocalDateTime getTimestamp() { return timestamp; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public String getPreviousHash() { return previousHash; }
    public void setPreviousHash(String previousHash) { this.previousHash = previousHash; }

    public String getHash() { return hash; }
    public void setHash(String hash) { this.hash = hash; }

    public Long getNonce() { return nonce; }
    public void setNonce(Long nonce) { this.nonce = nonce; }

    public Long getUsuarioId() {
    return usuarioId;
}
    public void setUsuarioId(Long usuarioId) {
    this.usuarioId = usuarioId;
}

}