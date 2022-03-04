package com.zad1.Zadanie1;

import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.*;

import javax.xml.crypto.Data;
import java.util.*;

@RestController
public class Controller {

    @PostMapping("register")
    public registerResponse register(@RequestParam("name") String name) throws Exception {

        if(name == null)
            throw new Exception("Name parameter required.");

        return new registerResponse("OK", Database.registerUser(name));
    }

    @PostMapping("delete")
    public void delete(@RequestParam("name") String name) throws Exception {
        if(name == null)
            throw new Exception("Name parameter required.");

        Database.deleteUser(name);
    }

    @GetMapping("stats")
    public Map<String, Integer> stats(@RequestParam(value = "mode", required = false) String mode){
        if(mode == null)
            return Database.getTopUsers(3);

        switch (mode){
            case "ALL":
                return Database.getTopUsers(-1);
            case "IGNORE_CASE":
                return Database.getUsersIgnoreCase();
        }
        return new LinkedHashMap<>();
    }

    @ExceptionHandler(MissingServletRequestParameterException.class)
    public String handleMissingParams(MissingServletRequestParameterException ex) {
        String name = ex.getParameterName();
        return "Bad request: "  + name + " parameter is missing";
    }
}

