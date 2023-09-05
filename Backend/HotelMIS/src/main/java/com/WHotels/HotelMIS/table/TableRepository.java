package com.WHotels.HotelMIS.table;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TableRepository extends JpaRepository<Table, Long> {

    @Query(value = "SELECT * FROM restaurant_table ORDER BY table_id ASC", nativeQuery = true)
    List<Table> findByOrderByNameAsc();

}

