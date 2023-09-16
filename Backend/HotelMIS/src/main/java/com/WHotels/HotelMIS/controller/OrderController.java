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
import java.util.stream.Collectors;

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
            List<Map<String, Object>> items = (List<Map<String, Object>>) requestData.get("items"); 
            Integer tableId = (Integer) requestData.get("tableId"); 

            List<Integer> itemIds = items.stream()
            .map(item -> (Integer) item.get("id"))
            .collect(Collectors.toList());

            System.out.println("Received itemIds: " + itemIds + " for tableId: " + tableId);
            return orderService.createOrder(itemIds, tableId);  
    }
}
