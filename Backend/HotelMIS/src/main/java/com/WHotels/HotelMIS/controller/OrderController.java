package com.WHotels.HotelMIS.controller;

import com.WHotels.HotelMIS.model.Order;
import com.WHotels.HotelMIS.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="api/v1/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/placed")
    public List<Order> getPlacedOrders(){
        return orderService.getPlacedOrders();
    }
    @GetMapping("/prepared")
    public List<Order> getPreparedOrders(){
        return orderService.getPreparedOrders();
    }
}
