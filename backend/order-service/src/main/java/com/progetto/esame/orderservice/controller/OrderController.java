package com.progetto.esame.orderservice.controller;

import com.progetto.esame.orderservice.model.Order;
import com.progetto.esame.orderservice.repo.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class OrderController {

	@Autowired
	OrderRepository repository;

	@GetMapping("/orders")
	public List<Order> getAllOrders() {
		System.out.println("Get all orders...");

		List<Order> orders = new ArrayList<>();
		repository.findAll().forEach(orders::add);

		return orders;
	}
//
	@PostMapping(value = "/orders/create")
	public Order postOrder(@RequestBody Order order) {

		Order _order = repository.save(new Order(order.getUserId(),order.getProductsId()));
		return _order;
	}
}
