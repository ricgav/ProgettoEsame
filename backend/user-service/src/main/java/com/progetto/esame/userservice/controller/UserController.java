package com.progetto.esame.userservice.controller;

import com.progetto.esame.userservice.model.User;
import com.progetto.esame.userservice.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	UserRepository repository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all users...");

		List<User> users = new ArrayList<>();
		repository.findAll().forEach(users::add);

		return users;
	}

	@PostMapping(value = "/users/create")
	public User postUser(@RequestBody User user) {

		User _user = repository.save(new User(user.getMail(),user.getName(),
				user.getSurname(), user.getPassword(),user.getAddress(),user.isSeller()));
		return _user;
	}

	@GetMapping("/users/{id}")
	public User getUserById(@PathVariable("id") long id) {
		System.out.println("Get user by id...");

		User _user = repository.findById(id);

		return _user;
	}

	@GetMapping("/users/mail")
	public User getUserByMail(@RequestParam String mail) {
		System.out.println("Get user by mail...");

		User _user = repository.findByMail(mail);

		return _user;
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
		System.out.println("Delete Customer with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/users/delete")
	public ResponseEntity<String> deleteAllUser() {
		System.out.println("Delete All users...");

		repository.deleteAll();

		return new ResponseEntity<>("All users have been deleted!", HttpStatus.OK);
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