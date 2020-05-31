package com.chandra.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.chandra.onlinebookstore.entity.Book;

//@CrossOrigin("*") // allows all requests from outside
@CrossOrigin("http://localhost:4200")
public interface BookRepository extends JpaRepository<Book, Long> {

}
