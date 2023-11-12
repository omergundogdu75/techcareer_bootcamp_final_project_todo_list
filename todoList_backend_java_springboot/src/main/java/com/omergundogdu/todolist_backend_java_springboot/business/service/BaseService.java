package com.omergundogdu.todolist_backend_java_springboot.business.service;

import java.util.List;

public interface BaseService <T>{
    T findById(Long id);
    List<T> getAll();

    T save(T entity);

    T update(T entity);
    List<T> updateAll(List<T> entities);

    boolean delete(Long id);

    boolean deleteAll();
}
