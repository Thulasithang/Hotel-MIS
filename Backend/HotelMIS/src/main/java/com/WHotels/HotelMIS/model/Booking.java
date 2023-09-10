package com.WHotels.HotelMIS.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.sql.Date;


@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer bookingId;

    @Column(nullable = false)
    private Integer customerId;

    @Column(nullable = false)
    private Integer roomId;

    @Column(nullable = false)
    private Date CheckIn;

    @Column(nullable = false)
    private Date CheckOut;

    @Column
    private BigDecimal total;

}
