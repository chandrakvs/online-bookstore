package com.chandra.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chandra.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
