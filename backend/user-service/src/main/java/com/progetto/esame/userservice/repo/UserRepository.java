package com.progetto.esame.userservice.repo;

import com.progetto.esame.userservice.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Long> {

	User findById(long id);
	User findByMail(String mail);

}

