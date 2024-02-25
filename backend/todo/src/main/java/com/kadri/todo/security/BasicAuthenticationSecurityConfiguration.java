package com.kadri.todo.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class BasicAuthenticationSecurityConfiguration {

	// Filter chain
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		/// authenticate all requests
		return http
				.authorizeHttpRequests(auth -> auth.anyRequest()
						.authenticated())
				// basic authentication
				.httpBasic(Customizer.withDefaults())
				// stateless session
				.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
				// disable csrf
				.csrf().disable().build();

	}

}
