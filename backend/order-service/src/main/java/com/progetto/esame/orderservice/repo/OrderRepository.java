package com.progetto.esame.orderservice.repo;

import com.progetto.esame.orderservice.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {

}

