package com.espe.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"com.espe.entity"})
@EnableJpaRepositories(basePackages = {"com.espe.repositories"})
@ComponentScan(basePackages = {"com.espe.controller", "com.espe.entity", "com.espe.repositories", "com.espe.services"})
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}	