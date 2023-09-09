package com.WHotels.HotelMIS.model;

import java.math.BigDecimal;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer menuitemId;
    private String foodType;
    private String name;
    private String description;
    private Integer quantity;
    private BigDecimal price;
    private BigDecimal discount;
    private String imageUrl;
}
