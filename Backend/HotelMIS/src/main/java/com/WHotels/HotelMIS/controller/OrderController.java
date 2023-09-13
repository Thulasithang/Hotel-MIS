package com.WHotels.HotelMIS.controller;

import com.WHotels.HotelMIS.model.Orders;
import com.WHotels.HotelMIS.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "api/v1/order")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/placed")
    public List<Orders> getPlacedOrders() {
        return orderService.getPlacedOrders();
    }

    @GetMapping("/prepared")
    public List<Orders> getPreparedOrders() {
        return orderService.getPreparedOrders();
    }

    @PostMapping("/create")
    public ResponseEntity<String> createOrder(@RequestBody Map<String, Object> requestData) {
        try {
            List<?> items = (List<?>) requestData.get("items"); // Assuming items can be any type
            Integer tableId = (Integer) requestData.get("tableId"); // Assuming tableId is an integer

            // Process the received data, e.g., create an order
            // Example:
            // Order createdOrder = orderService.createOrder(items, tableId);
            // return ResponseEntity.ok("Order placed successfully with ID: " + createdOrder.getOrderId());

            // For testing purposes, return a response with received data
            System.out.println("Received items: " + items + " for tableId: " + tableId);
            return ResponseEntity.ok("Received items: " + items + " for tableId: " + tableId);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing the request: " + e.getMessage());
        }
    }
}
