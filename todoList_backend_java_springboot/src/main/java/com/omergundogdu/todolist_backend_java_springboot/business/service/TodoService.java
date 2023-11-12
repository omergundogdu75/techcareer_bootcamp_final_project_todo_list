package com.omergundogdu.todolist_backend_java_springboot.business.service;

import com.omergundogdu.todolist_backend_java_springboot.models.entities.Todo;

public interface TodoService extends BaseService<Todo> {
    boolean deleteTodoByDoneTrue();

}
