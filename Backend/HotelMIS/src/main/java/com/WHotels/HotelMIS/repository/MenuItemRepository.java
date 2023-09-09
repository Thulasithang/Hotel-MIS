package com.WHotels.HotelMIS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.WHotels.HotelMIS.model.MenuItem;
@Repository
public interface MenuItemRepository extends JpaRepository<MenuItem, Integer> {

}
