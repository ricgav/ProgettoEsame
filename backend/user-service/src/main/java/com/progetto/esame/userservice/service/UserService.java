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

    public ResponseEntity<?> tryLogin (String mail, String password) {
        Optional<User> optUser = getUserByMail(mail);
        if (optUser.isPresent()) {
            User user = optUser.get();
            if (login(user, password)) {
                return new ResponseEntity<>(
                        user,
                        HttpStatus.OK);
            }
            else {
                return errorLoginResponse(mail);
            }
        } else return noUserMailFoundResponse(mail);
    }

    public ResponseEntity<?> tryCreate (User user) {
        Optional<User> optUser = getUserByMail(user.getMail());
        if (!optUser.isPresent()) {
            return new ResponseEntity<>(
                    saveNewUser(user),
                    HttpStatus.CREATED);
        } else return mailAlreadyUsedResponse(user.getMail());
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
                user.getSurname(), user.getPassword(),user.getAddress(),user.isSeller(), user.getImage()));
    }

    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    //-- errors
    private ResponseEntity<String> errorResponse(){
        return new ResponseEntity<>("Something went wrong :(", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private ResponseEntity<String> errorLoginResponse(String mail) {
        return new ResponseEntity<>("Wrong password for user with mail: " + mail, HttpStatus.FORBIDDEN);
    }

    private ResponseEntity<String> noUserFoundResponse(Long id){
        return new ResponseEntity<>("No user found with id: " + id, HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<String> noUserMailFoundResponse(String mail){
        return new ResponseEntity<>("No user found with mail: " + mail, HttpStatus.NOT_FOUND);
    }

    private ResponseEntity<String> mailAlreadyUsedResponse(String mail){
        return new ResponseEntity<>("Mail not available: " + mail, HttpStatus.NOT_ACCEPTABLE);
    }
}
