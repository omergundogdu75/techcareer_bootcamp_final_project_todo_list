package com.omergundogdu.todolist_backend_java_springboot.business.serviceImpl;

import com.omergundogdu.todolist_backend_java_springboot.business.service.TodoService;
import com.omergundogdu.todolist_backend_java_springboot.models.entities.Todo;
import com.omergundogdu.todolist_backend_java_springboot.models.repositories.TodoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TodoServiceImpls implements TodoService {

    private final TodoRepository todoRepository;

    @Override
    public Todo findById(Long id) {
        Optional<Todo> isNull = todoRepository.findById(id);
        if (isNull.isPresent()){
            return todoRepository.findById(id).get();
        }
        return null;
    }

    @Override
    public List<Todo> getAll() {
        return todoRepository.findAll(Sort.by(Sort.Order.asc("id")));
    }

    @Override
    public Todo save(Todo entity) {
        return todoRepository.save(entity);
    }

    @Override
    public Todo update(Todo entity) {
        return todoRepository.save(entity);
    }

    @Override
    public List<Todo> updateAll(List<Todo> entities) {
        return todoRepository.saveAll(entities);
    }

    @Override
    public boolean delete(Long id) {
        todoRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean deleteAll() {
        todoRepository.deleteAll();
        return true;

    }

    @Override
    public boolean deleteTodoByDoneTrue(Todo entities) {
            todoRepository.deleteAll(entities.isDone());
            return true;
    }
}
