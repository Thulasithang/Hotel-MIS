package com.WHotels.HotelMIS.service;

import com.WHotels.HotelMIS.model.Menuitem;
import com.WHotels.HotelMIS.model.Table;
import com.WHotels.HotelMIS.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemService {
    private final MenuItemRepository menuItemRepository;

    @Autowired
    public MenuItemService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    public List<Menuitem> getMenuItems(){
        return menuItemRepository.findByOrderByIdAsc();
    }

    public List<Menuitem> getInStockMenuItems(){
        return menuItemRepository.findInStockMenuItems();
    }
}
