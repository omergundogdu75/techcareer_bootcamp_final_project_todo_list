package com.omergundogdu.todolist_backend_java_springboot;

import org.springdoc.core.configuration.SpringDocSecurityConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@EnableTransactionManagement
public class TodoListBackendJavaSpringbootApplication {

    public static void main(String[] args) {
        SpringApplication.run(TodoListBackendJavaSpringbootApplication.class, args);
    }

}
