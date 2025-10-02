package com.movieapp.movieappbackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;
import java.util.List;

@Document(collection = "bookings")
public class Booking {
    @Id
    private String id;

    private String movieTitle;
    private String movieId;
    private List<Integer> seats;
    private String name;
    private String email;
    private Instant bookedAt;

    public Booking() {}

    // getters/setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getMovieTitle() { return movieTitle; }
    public void setMovieTitle(String movieTitle) { this.movieTitle = movieTitle; }

    public String getMovieId() { return movieId; }
    public void setMovieId(String movieId) { this.movieId = movieId; }

    public List<Integer> getSeats() { return seats; }
    public void setSeats(List<Integer> seats) { this.seats = seats; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public Instant getBookedAt() { return bookedAt; }
    public void setBookedAt(Instant bookedAt) { this.bookedAt = bookedAt; }
}
