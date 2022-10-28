package com.example.backend1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class Controller {
    private static final Logger log = LoggerFactory.getLogger(Controller.class);


    @GetMapping("/hello")
    public String hello() {
        log.info("Get request '/hello'");
        return "hello\n";
    }
}
