package com.omergundogdu.todolist_backend_java_springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
public class TodoListBackendJavaSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoListBackendJavaSpringbootApplication.class, args);
    }

}
