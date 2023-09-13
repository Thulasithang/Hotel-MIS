package com.WHotels.HotelMIS.controller;



import com.WHotels.HotelMIS.model.Menuitem;
import com.WHotels.HotelMIS.model.Table;
import com.WHotels.HotelMIS.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping(path="api/v1/menuitem")
public class MenuItemController {

    private final MenuItemService menuItemService;

    @Autowired
    MenuItemController(MenuItemService menuItemService) {
        this.menuItemService = menuItemService;
    }

    @GetMapping
    public List<Menuitem> getMenuItems(){
        return menuItemService.getMenuItems();
    }
    @GetMapping(path="/instock")
    public List<Menuitem> getInStockMenuItems(){
        return menuItemService.getInStockMenuItems();
    }

}


