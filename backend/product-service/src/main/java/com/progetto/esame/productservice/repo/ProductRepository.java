package com.progetto.esame.productservice.repo;

import com.progetto.esame.productservice.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product, Long> {

	Product findById(long id);

    Product deleteById(long id);

    List<Product> findByType(String type);

//	User findByMail(String mail);

}

