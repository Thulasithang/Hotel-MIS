package com.WHotels.HotelMIS.service;

import com.WHotels.HotelMIS.model.Order;
import com.WHotels.HotelMIS.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<Order> getPlacedOrders(){
        return orderRepository.getPlacedOrders();
    }

    public List<Order> getPreparedOrders(){
        return orderRepository.getPreparedOrders();
    }

    public void getOrderByTableID(){ // TO BE IMPLEMENTED
        }


}
