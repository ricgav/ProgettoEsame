package com.progetto.esame.orderservice.service;
        import com.progetto.esame.orderservice.model.Order;
        import com.progetto.esame.orderservice.repo.OrderRepository;
        import lombok.RequiredArgsConstructor;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;
        import org.springframework.transaction.annotation.Transactional;

        import java.util.ArrayList;
        import java.util.List;
        import java.util.Optional;

@Service
@RequiredArgsConstructor

public class OrderService {
    @Autowired
    private final OrderRepository orderRepository;

    @Transactional
    public List<Order> getAllOrders() {
        List<Order> orderList = new ArrayList<>();
        orderRepository.findAll().forEach(orderList::add);
        return orderList;
    }

    @Transactional
    public Optional<Order> getOrderById(long id) {
        return orderRepository.findById(id);
    }


    @Transactional
    public List<Order> getOrdersByUserId(long userId) {
        List<Order> productList = new ArrayList<>();
        orderRepository.findByUserId(userId).forEach(productList::add);
        return productList;
    }


    @Transactional
    public Order saveNewOrder(Order order) {
        return orderRepository.save(new Order(order.getUserId(), order.getProductsId(), order.getDate(), order.getPrice()));
    }

    @Transactional
    public void deleteOrder(Order order) {
        orderRepository.delete(order);
    }
}

