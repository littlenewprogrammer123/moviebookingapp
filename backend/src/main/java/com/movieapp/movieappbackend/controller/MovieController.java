package com.movieapp.movieappbackend.controller;

import com.movieapp.movieappbackend.model.Movie;
import com.movieapp.movieappbackend.repository.MovieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
@CrossOrigin(origins = "http://localhost:3000")
public class MovieController {

    private final MovieRepository movieRepository;

    public MovieController(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @GetMapping
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    @PostMapping
    public Movie addMovie(@RequestBody Movie movie) {
        return movieRepository.save(movie);
    }

    @GetMapping("/{id}")
    public Movie getMovie(@PathVariable String id) {
        return movieRepository.findById(id).orElse(null);
    }

    @DeleteMapping("/{id}")
    public void deleteMovie(@PathVariable String id) {
        movieRepository.deleteById(id);
    }
}
