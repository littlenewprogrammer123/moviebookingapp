package com.movieapp.movieappbackend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "movies")
public class Movie {

    @Id
    private String id;
    private String title;
    private String director;
    private String genre;
    private Integer year;

    public Movie() {}

    public Movie(String title, String director, String genre, Integer year) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.year = year;
    }

    // getters / setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDirector() { return director; }
    public void setDirector(String director) { this.director = director; }
    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }
    public Integer getYear() { return year; }
    public void setYear(Integer year) { this.year = year; }
}
