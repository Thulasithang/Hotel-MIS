package com.WHotels.HotelMIS.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.WHotels.HotelMIS.model.MenuItem;
import com.WHotels.HotelMIS.service.MenuItemService;

@RestController
@RequestMapping("/menu")
@CrossOrigin(origins = "http://localhost:8081")
public class MenuItemController {

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping("/getMenu")
    public ResponseEntity<List<MenuItem>> getMenu() {
        return menuItemService.getMenu();
    }
    

}
