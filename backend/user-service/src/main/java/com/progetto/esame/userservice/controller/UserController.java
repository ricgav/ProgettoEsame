package com.progetto.esame.userservice.controller;

import com.progetto.esame.userservice.model.User;
import com.progetto.esame.userservice.repo.UserRepository;
import com.progetto.esame.userservice.service.UserService;
import lombok.RequiredArgsConstructor;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	UserRepository repository;

	private final UserService userService;

	@GetMapping("/users")
	public ResponseEntity<?>  getAllUsers() {
		System.out.println("Get all users...");

		try {
			return new ResponseEntity<>(
					userService.getAllUsers(),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}

		// ----- OLD VERSIONE
		//List<User> users = new ArrayList<>();
		//repository.findAll().forEach(users::add);
		//return users;
	}

	@PostMapping("/users/create")
	public ResponseEntity<?> createUser (@RequestBody User user){
		try {
			return new ResponseEntity<>(
					userService.saveNewUser(user),
					HttpStatus.CREATED);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@GetMapping("/login")
	public ResponseEntity<?>  userLogin (@RequestParam String mail, @RequestParam String password) {
		System.out.println("Login...");
		Optional<User> optUser = userService.mailExists(mail);
		if (optUser.isPresent()) {
			User user = optUser.get();
			if (userService.login(user, password)) {

				return new ResponseEntity<>(
						user,
						HttpStatus.OK);
			}
			else {
				return errorLoginResponse(mail);
			}
		} else {
			return errorUserNotFound(mail);
		}

	}

	/*@GetMapping("/login")
	public ResponseEntity<?> login (@RequestParam String mail){
		//System.out.println(params);
		//System.out.println(params.values());
		if (userService.login(mail)) {
			return new ResponseEntity<>(
					"Login successful",
					HttpStatus.OK);
		}
		else {
			return errorResponse();
		}
	}*/

	@GetMapping("/users/{id}")
	public ResponseEntity<?> getUserById(@PathVariable("id") long id) {

		try {
			Optional<User> optUser = userService.getUserById(id);
			if (optUser.isPresent()) {
				return new ResponseEntity<>(
						optUser.get(),
						HttpStatus.OK);
			} else {
				return noUserFoundResponse(id);
			}
		} catch (Exception e) {
			return errorResponse();
		}
		//System.out.println("Get user by id...");
		//User _user = repository.findById(id);
		//return _user;
	}

	@GetMapping("/users/mail")
	public ResponseEntity<?> getUserByMail(@RequestParam String mail) {

		try {
			Optional<User> optUser = userService.getUserByMail(mail);
			if (optUser.isPresent()) {
				return new ResponseEntity<>(
						optUser.get(),
						HttpStatus.OK);
			} else {
				return noUserMailFoundResponse(mail);
			}
		} catch (Exception e) {
			return errorResponse();
		}

		//User _user = repository.findByMail(mail);
		//return _user;
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
		System.out.println("Delete User with ID = " + id + "...");

		try {
			Optional<User> optUser = userService.getUserById(id);
			if (optUser.isPresent()) {
				userService.deleteUser(optUser.get());
				return new ResponseEntity<>(
						String.format("User with id: %d was deleted", id),
						HttpStatus.OK);
			} else {
				return noUserFoundResponse(id);
			}
		} catch (Exception e) {
			return errorResponse();
		}
		//repository.deleteById(id);
		//return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/users/delete")
	public ResponseEntity<String> deleteAllUser() {
		System.out.println("Delete All users...");

		repository.deleteAll();

		return new ResponseEntity<>("All users have been deleted!", HttpStatus.OK);
	}

	private ResponseEntity<String> errorResponse(){
		return new ResponseEntity<>("Something went wrong :(", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	private ResponseEntity<String> errorLoginResponse(String mail) {
		return new ResponseEntity<>("Wrong password for user with mail: " + mail, HttpStatus.FORBIDDEN);
	}

	private ResponseEntity<String> errorUserNotFound(String mail){
		return new ResponseEntity<>("No user found with mail: " + mail, HttpStatus.NOT_FOUND);
	}

	private ResponseEntity<String> noUserFoundResponse(Long id){
		return new ResponseEntity<>("No user found with id: " + id, HttpStatus.NOT_FOUND);
	}

	private ResponseEntity<String> noUserMailFoundResponse(String mail){
		return new ResponseEntity<>("No user found with id: " + mail, HttpStatus.NOT_FOUND);
	}
}

//

//	@PutMapping("/users/{id}")
//	public ResponseEntity<User> updateCustomer(@PathVariable("id") long id, @RequestBody User customer) {
//		System.out.println("Update Customer with ID = " + id + "...");
//
//		Optional<User> customerData = repository.findById(id);
//
//		if (customerData.isPresent()) {
//			User _customer = customerData.get();
//			_customer.setName(customer.getName());
//			_customer.setAge(customer.getAge());
//			_customer.setActive(customer.isActive());
//			return new ResponseEntity<>(repository.save(_customer), HttpStatus.OK);
//		} else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}