package com.WHotels.HotelMIS.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
public class RoomType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int room_type_id;

    @Column(nullable = false)
    private String type;

    @Column(name = "max_adult_occupancy", nullable = false)
    private Integer maxAdultOccupancy;

    @Column(name = "max_child_occupancy", nullable = false)
    private Integer maxChildOccupancy;

    @Column
    private Integer roomSize;

    @Column
    private String description;

    @Column(name = "room_price", nullable = false)
    private Integer roomPrice;

    @Column
    private Integer numberOfRooms;

}

