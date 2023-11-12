package com.omergundogdu.todolist_backend_java_springboot.controller;

import com.omergundogdu.todolist_backend_java_springboot.business.service.TodoService;
import com.omergundogdu.todolist_backend_java_springboot.models.entities.Todo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1.0.0/todo")
@RequiredArgsConstructor
public class TodoController {

    private final TodoService todoService;

    @GetMapping("/id")
    public Todo getById(@RequestBody Todo todo){
        return todoService.findById(todo.getId());
    }
    @GetMapping("/all")
    public List<Todo> getAll(){
        return todoService.getAll();
    }

    @PostMapping("/save")
    public Todo save(@RequestBody Todo todo){
        return todoService.save(todo);
    }

    @PutMapping("/update")
    public Todo update(@RequestBody Todo todo){
        return todoService.update(todo);
    }
    @PutMapping("/updateAll")
    public List<Todo> update(@RequestBody List<Todo> todo){
        return todoService.updateAll(todo);
    }

    @PostMapping("/delete")
    public Boolean delete(@RequestBody Todo todo){
        System.out.println(todo);
        return todoService.delete(todo.getId());
    }
    @PostMapping("/deleteAll")
    public Boolean delete(){
        return todoService.deleteAll();
    }

    @Transactional
    @DeleteMapping("/doneDelete")
    public void deleteAllDone(){
         todoService.deleteAllByDone();
    }

}
