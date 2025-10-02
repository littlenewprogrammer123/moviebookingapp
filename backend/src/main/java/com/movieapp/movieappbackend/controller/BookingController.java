package com.movieapp.movieappbackend.controller;

import com.movieapp.movieappbackend.model.Booking;
import com.movieapp.movieappbackend.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000") // allow frontend dev server
public class BookingController {

    private final BookingRepository bookingRepository;

    public BookingController(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        if (booking.getBookedAt() == null) {
            booking.setBookedAt(Instant.now());
        }
        return bookingRepository.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}
