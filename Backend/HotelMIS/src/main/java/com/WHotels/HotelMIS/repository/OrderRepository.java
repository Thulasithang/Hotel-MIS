package com.WHotels.HotelMIS.repository;

import com.WHotels.HotelMIS.model.Order;

import jakarta.transaction.TransactionScoped;
import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO orders (item_id) VALUES (:itemId)", nativeQuery = true)
    Order saveOrder(int itemId);
    @Query(value = "SELECT * FROM orders WHERE order_status = 'placed'", nativeQuery = true)
    List<Order> getPlacedOrders();
    @Query(value = "SELECT * FROM orders WHERE order_status = 'prepared'", nativeQuery = true)
    List<Order> getPreparedOrders();
    void createOrder(int itemId);
    
}
