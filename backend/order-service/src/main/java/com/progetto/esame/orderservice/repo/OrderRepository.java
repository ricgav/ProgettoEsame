package com.progetto.esame.orderservice.repo;

import com.progetto.esame.orderservice.model.Order;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends CrudRepository<Order, Long> {
    Optional<Order> findById(long id);
    List<Order> findByUserId(long userId);
}

