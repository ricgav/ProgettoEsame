package com.progetto.esame.orderservice.controller;

import com.progetto.esame.orderservice.model.Order;
import com.progetto.esame.orderservice.repo.OrderRepository;
import com.progetto.esame.orderservice.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1")
public class OrderController {

	@Autowired
	private final OrderService orderService;


	@GetMapping("/orders")
	public ResponseEntity<?> getAllOrders() {
		System.out.println("Get all orders...");
		try {
			return new ResponseEntity<>(
					orderService.getAllOrders(),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@GetMapping("/getUserOrders")
	public ResponseEntity<?> getUserOrders(@RequestParam long userId) {
		System.out.println("Get all orders of user...");
		try {
			return new ResponseEntity<>(
					orderService.getOrdersByUserId(userId),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}
	}


	@PostMapping(value = "/orders/create")
	public ResponseEntity<?> createOrder (@RequestBody Order order){
		try {
			return new ResponseEntity<>(
					orderService.saveNewOrder(order),
					HttpStatus.CREATED);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@DeleteMapping("/orders/{id}")
	public ResponseEntity<?> deleteOrder(@PathVariable("id") long id) {
		System.out.println("Delete Order with ID = " + id + "...");

		try {
			Optional<Order> optOrder = orderService.getOrderById(id);
			if (optOrder.isPresent()) {
				orderService.deleteOrder(optOrder.get());
				return new ResponseEntity<>(
						String.format("Order with id: %d was deleted", id),
						HttpStatus.OK);
			} else {
				return noOrderFoundResponse(id);
			}
		} catch (Exception e) {
			return errorResponse();
		}
	}

	private ResponseEntity<String> errorResponse(){
		return new ResponseEntity<>("Something went wrong :(", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	private ResponseEntity<String> noOrderFoundResponse(Long id){
		return new ResponseEntity<>("No order found with id: " + id, HttpStatus.NOT_FOUND);
	}
}
