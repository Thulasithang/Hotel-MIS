package com.WHotels.HotelMIS.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.WHotels.HotelMIS.model.MenuItem;
import com.WHotels.HotelMIS.repository.MenuItemRepository;

@Service
public class MenuItemService {

    @Autowired
    MenuItemRepository menuItemRepository;
    
    public ResponseEntity<List<MenuItem>> getMenu() {
        try{
            return new ResponseEntity<>(menuItemRepository.findAll(), HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();;
        }
        return new ResponseEntity<>(new ArrayList<>(), HttpStatus.BAD_REQUEST);
    }

}
