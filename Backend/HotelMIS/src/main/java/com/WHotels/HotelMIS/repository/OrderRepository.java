package com.WHotels.HotelMIS.repository;

import com.WHotels.HotelMIS.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {



    @Query(value = "SELECT * FROM orders WHERE order_status = 'placed'", nativeQuery = true)
    List<Order> getPlacedOrders();
    @Query(value = "SELECT * FROM orders WHERE order_status = 'prepared'", nativeQuery = true)
    List<Order> getPreparedOrders();
}
