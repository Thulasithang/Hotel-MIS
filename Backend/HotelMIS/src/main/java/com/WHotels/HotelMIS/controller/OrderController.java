package com.WHotels.HotelMIS.controller;

import com.WHotels.HotelMIS.model.Order;
import com.WHotels.HotelMIS.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping
    public ResponseEntity<String> createOrder(@RequestBody int itemId) {
        Order createdOrder = orderService.createOrder(itemId);
        return ResponseEntity.ok("Order placed successfully with ID: " + createdOrder.getOrderId());
    }
}
