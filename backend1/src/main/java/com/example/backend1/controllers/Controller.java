package com.example.backend1.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.client.RestTemplate;

@RestController
public class Controller {
    private static final Logger log = LoggerFactory.getLogger(Controller.class);


    @GetMapping("/hello1")
    public ResponseEntity<String> hello1() {
        log.info("Get request '/hello1'");
        String responseHello2 = "";

        try {
            ResponseEntity<String>  response = new RestTemplate().getForEntity(
                    "http://localhost:8082/hello2",
                    String.class);
            responseHello2 = response.getBody();
        }
        catch (Exception ex) {
            log.error("Something went wrong {}", ex.getMessage());
        }

        return new ResponseEntity<>("hello1 " + responseHello2, HttpStatus.OK);
    }
}
