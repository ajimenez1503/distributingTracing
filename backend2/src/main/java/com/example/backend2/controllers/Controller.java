package com.example.backend2.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class Controller {
    private static final Logger log = LoggerFactory.getLogger(Controller.class);


    @GetMapping("/hello2")
    public ResponseEntity<String> hello2() {
        log.info("Get request '/hello2'");
        return new ResponseEntity<>("hello2\n", HttpStatus.OK);
    }
}
