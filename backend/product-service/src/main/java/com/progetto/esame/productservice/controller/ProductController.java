package com.progetto.esame.productservice.controller;

import com.progetto.esame.productservice.model.Product;
import com.progetto.esame.productservice.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

	@Autowired
	ProductRepository repository;

	@GetMapping("/products")
	public List<Product> getAllProducts() {
		System.out.println("Get all products...");

		List<Product> products = new ArrayList<>();
		repository.findAll().forEach(products::add);

		return products;
	}

	@GetMapping("/products/id")
	public Product getProductById(@RequestParam long id) {
		System.out.println("Get products by id...");

		Product _product = repository.findById(id);

		return _product;
	}

	@PostMapping(value = "/products/create")
	public Product postProduct(@RequestBody Product product) {

		Product _product = repository.save(new Product(product.getName(),product.getDescription(),product.getPrice(),product.getType(),product.getImage()));
		return _product;
	}

	@DeleteMapping("/products/{id}")
	public ResponseEntity<String> deleteProduct(@PathVariable("id") long id) {
		System.out.println("Delete Product with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("Product has been deleted!", HttpStatus.OK);
	}


}
