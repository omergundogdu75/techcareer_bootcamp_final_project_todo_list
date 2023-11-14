package com.omergundogdu.todolist_backend_java_springboot.models.repositories;

import com.omergundogdu.todolist_backend_java_springboot.models.entities.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo,Long> {

    void deleteAllByDone(boolean entity);
    List<Todo> findAllByOrderByIdDesc();
}
