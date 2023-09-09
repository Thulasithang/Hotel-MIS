package com.WHotels.HotelMIS.repository;

import com.WHotels.HotelMIS.model.Menuitem;
import com.WHotels.HotelMIS.model.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuItemRepository extends JpaRepository<Menuitem, Long> {

    @Query(value = "SELECT * FROM menuitem ORDER BY menuitem_id ASC", nativeQuery = true)
    List<Menuitem> findByOrderByIdAsc();

    @Query("SELECT m FROM Menuitem m WHERE m.quantity > 0")
    List<Menuitem> findInStockMenuItems();
}
