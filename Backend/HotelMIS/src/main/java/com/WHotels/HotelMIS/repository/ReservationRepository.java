package com.WHotels.HotelMIS.repository;

import com.WHotels.HotelMIS.model.Reservation;
import com.WHotels.HotelMIS.model.Table;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {


}
