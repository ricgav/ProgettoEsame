package com.progetto.esame.productservice.controller;

import com.progetto.esame.productservice.model.Product;
import com.progetto.esame.productservice.repo.ProductRepository;
import com.progetto.esame.productservice.service.ProductService;
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

public class ProductController {

	@Autowired
	ProductRepository repository;

	private final ProductService productService;

	@GetMapping("/products")
	public ResponseEntity<?> getAllProducts() {
		System.out.println("Get all products...");
		try {
			return new ResponseEntity<>(
					productService.getAllProducts(),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@GetMapping("/productsByType")
	public ResponseEntity<?> productsByType(@RequestParam String type) {
		System.out.println("Get all products by type...");
		try {
			return new ResponseEntity<>(
					productService.getProductsByType(type),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@GetMapping("/productsBySeller")
	public ResponseEntity<?> productsBySeller(@RequestParam long sellerId) {
		System.out.println("Get all products by seller...");
		try {
			return new ResponseEntity<>(
					productService.getProductsBySellerId(sellerId),
					HttpStatus.OK);
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@GetMapping("/products/{id}")
	public ResponseEntity<?> getProductById(@PathVariable("id") long id) {

		try {
			Optional<Product> optProduct = productService.getProductById(id);
			if (optProduct.isPresent()) {
				return new ResponseEntity<>(
						optProduct.get(),
						HttpStatus.OK);
			} else {
				return noProductFoundResponse(id);
			}
		} catch (Exception e) {
			return errorResponse();
		}
	}

	@PostMapping(value = "/products/create")
	public ResponseEntity<?> createProduct(@RequestBody Product product){
			try {
				return new ResponseEntity<>(
						productService.saveNewProduct(product),
						HttpStatus.CREATED);
			} catch (Exception e) {
				return errorResponse();
			}
	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable("id") long id) {
			System.out.println("Delete Product with ID = " + id + "...");

			try {
				Optional<Product> optProduct = productService.getProductById(id);
				if (optProduct.isPresent()) {
					productService.deleteProduct(optProduct.get());
					return new ResponseEntity<>(
							String.format("Product with id: %d was deleted", id),
							HttpStatus.OK);
				} else {
					return noProductFoundResponse(id);
				}
			} catch (Exception e) {
				return errorResponse();
			}
	}


	private ResponseEntity<String> errorResponse(){
		return new ResponseEntity<>("Something went wrong :(", HttpStatus.INTERNAL_SERVER_ERROR);
	}

	private ResponseEntity<String> noProductFoundResponse(Long id){
		return new ResponseEntity<>("No product found with id: " + id, HttpStatus.NOT_FOUND);
	}
}
