package com.kadri.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import jakarta.websocket.server.PathParam;

@RestController
public class HelloWorldController {
	
	@GetMapping("/hello")
	public String hello() {
		return "Hello world! v2";
	}
	
	@GetMapping("/hello/{name}")
	public String helloPathVariable(@PathVariable String name) {
		return "Hello, " + name;
	}

}
