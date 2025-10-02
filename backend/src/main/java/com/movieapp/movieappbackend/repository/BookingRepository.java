package com.movieapp.movieappbackend.repository;

import com.movieapp.movieappbackend.model.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
    // custom queries can go here
}
