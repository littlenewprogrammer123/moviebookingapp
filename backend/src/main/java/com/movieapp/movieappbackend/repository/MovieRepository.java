package com.movieapp.movieappbackend.repository;

import com.movieapp.movieappbackend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {
    // custom queries can go here
}
