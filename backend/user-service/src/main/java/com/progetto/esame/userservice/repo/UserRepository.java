package com.progetto.esame.userservice.repo;

import com.progetto.esame.userservice.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Long> {

	Optional<User> findById(long id);
	Optional<User> findByMail(String mail);

}

