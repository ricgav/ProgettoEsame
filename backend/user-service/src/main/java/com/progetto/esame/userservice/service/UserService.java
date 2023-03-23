package com.progetto.esame.userservice.service;

import com.progetto.esame.userservice.model.User;
import com.progetto.esame.userservice.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    @Transactional
    public List<User> getAllUsers() {
        List<User> userList = new ArrayList<>();
        userRepository.findAll().forEach(userList::add);
        return userList;
    }

    /*public boolean login (String mail) {
        Optional<User> optUser = userRepository.findByMail(mail);
        if (optUser.isPresent()) {
            User user = optUser.get();
            if (user.getPassword() == "test") {
                return true;
            }
            else return false;
        }
        else return false;
    }*/

    public boolean login (User user, String password) {
        if (user.getPassword().equals(password)) {
            return true;
        }
        else {
            return false;
        }
    }

    public Optional<User> mailExists (String mail) {
        return userRepository.findByMail(mail);
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
