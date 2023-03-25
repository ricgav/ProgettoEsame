package com.progetto.esame.productservice.service;

import com.progetto.esame.productservice.model.Product;
import com.progetto.esame.productservice.repo.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class ProductService {

    private final ProductRepository productRepository;

    @Transactional
    public List<Product> getAllProducts() {
        List<Product> productList = new ArrayList<>();
        productRepository.findAll().forEach(productList::add);
        return productList;
    }

    @Transactional
    public List<Product> getProductsByType(String type) {
        List<Product> productList = new ArrayList<>();
        productRepository.findByType(type).forEach(productList::add);
        return productList;
    }

    @Transactional
    public List<Product> getProductsBySellerId(long sellerId) {
        List<Product> productList = new ArrayList<>();
        productRepository.findBySellerId(sellerId).forEach(productList::add);
        return productList;
    }


    @Transactional
    public Optional<Product> getProductById(long id) {
        return productRepository.findById(id);
    }


    @Transactional
    public Product saveNewProduct(Product product) {
        return productRepository.save(new Product(product.getName(),product.getDescription(),
                product.getPrice(),product.getType(),product.getImage(), product.getSellerId(), product.getSize()));
    }

    @Transactional
    public void deleteProduct(Product product) {
        productRepository.delete(product);
    }
}

