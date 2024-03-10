package com.kadri.todo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kadri.todo.entity.Todo;
import com.kadri.todo.service.TodoService;

@RestController
public class TodoResource {

	private TodoService todoService;
	
	public TodoResource(TodoService todoService) {
		
		this.todoService = todoService;
	}

	@GetMapping("/users/{username}/todos")
	public List<Todo> getAll(@PathVariable String username) {
		return todoService.findByUsername(username);
	}
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getById(@PathVariable String username, @PathVariable int id) {
		return todoService.findById(id);
	}
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> delete(@PathVariable String username, @PathVariable int id) {
		todoService.deleteById(id);
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public Todo update(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo) {
		todoService.updateTodo(todo);
		return todo;
	}
	
	@PostMapping("/users/{username}/todos")
	public Todo update(@PathVariable String username, @RequestBody Todo todo) {
		Todo createdTodo = todoService.addTodo(username, todo.getDescription(), todo.getTargetDate(), todo.isDone());
		return createdTodo;
	}
}
