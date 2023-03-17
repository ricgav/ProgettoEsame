package com.progetto.esame.userservice.service;

import com.progetto.esame.userservice.model.User;
import com.progetto.esame.userservice.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    //che cazzo è final?
    private final UserRepository userRepository;

    @Transactional
    public List<User> getAllUsers() {
        List<User> userList = new ArrayList<>();
        userRepository.findAll().forEach(userList::add);
        return userList;
    }

    @Transactional
    public Optional<User> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Transactional
    public Optional<User> getUserByMail(String mail) {
        return userRepository.findByMail(mail);
    }

    @Transactional
    public User saveNewUser(User user) {
        return userRepository.save(new User(user.getMail(),user.getName(),
                user.getSurname(), user.getPassword(),user.getAddress(),user.isSeller()));
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }


}
