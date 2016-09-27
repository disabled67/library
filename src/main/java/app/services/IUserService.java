package app.services;


import app.entities.User;

import java.util.Optional;

public interface IUserService extends org.springframework.security.core.userdetails.UserDetailsService {

    Optional<User> findUser(Long id);

}