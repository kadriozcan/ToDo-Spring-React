package com.kadri.todo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kadri.todo.entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{
	
	List<Todo> findByUsername(String username);
	
}
