package com.WHotels.HotelMIS.service;

import com.WHotels.HotelMIS.model.MenuItem;
import com.WHotels.HotelMIS.model.OrderMenuItem;
import com.WHotels.HotelMIS.model.Orders;
import com.WHotels.HotelMIS.repository.MenuItemRepository;
import com.WHotels.HotelMIS.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {


    @Autowired
    OrderRepository orderRepository;

    @Autowired
    MenuItemRepository MenuItemRepository;

    public List<Orders> getPlacedOrders() {
        return orderRepository.getPlacedOrders();
    }

    public List<Orders> getPreparedOrders() {
        return orderRepository.getPreparedOrders();
    }

    public ResponseEntity<String> createOrder(List<Integer> itemIds, Integer tableId) {
        List<MenuItem> menuItemsOrdered = MenuItemRepository.getMenuItemsById(itemIds);
        Orders order = new Orders();
        order.setTableId(tableId);
        order.setMenuItems(menuItemsOrdered);
        orderRepository.save(order);
        System.out.println("This is the Order service file. Received itemIds: " + itemIds + " for tableId: " + tableId);
        return new ResponseEntity<>("Order created successfully", HttpStatus.CREATED);
    }

}
