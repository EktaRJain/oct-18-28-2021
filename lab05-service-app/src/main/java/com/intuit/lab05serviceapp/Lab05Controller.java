package com.intuit.lab05serviceapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Lab05Controller {

    @GetMapping("/coviddata")
    public String getCovidData() {
        return "[\n" +
                "                { \"country\": \"USA\", \"cases\": 188592, \"recovered\": 7251, \"deaths\": 4055 },\n" +
                "                { \"country\": \"Italy\", \"cases\": 105792, \"recovered\": 15729 , \"deaths\": 12428 },\n" +
                "                { \"country\": \"Spain\", \"cases\": 95923, \"recovered\": 19259, \"deaths\": 8464 },\n" +
                "                { \"country\": \"France\", \"cases\": 52128, \"recovered\": 9444, \"deaths\": 3523 },\n" +
                "                { \"country\": \"India\", \"cases\": 1590, \"recovered\": 148, \"deaths\": 45 }\n" +
                "            ]";
    }
}
