package nu.obama.graubunden.controller;


import nu.obama.graubunden.exception.AppException;
import nu.obama.graubunden.model.Comment;
import nu.obama.graubunden.model.Role;
import nu.obama.graubunden.model.RoleName;
import nu.obama.graubunden.model.User;
import nu.obama.graubunden.payload.ApiResponse;
import nu.obama.graubunden.payload.SignUpRequest;
import nu.obama.graubunden.repository.RoleRepository;
import nu.obama.graubunden.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users/")
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    public UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    RoleRepository roleRepository;

    @GetMapping("/{id}")
    public User retrieveUser(@PathVariable long id) {
        Optional<User> user = userRepository.findById(id);

        if (!user.isPresent())
            throw new AppException("id-" + id);
        return user.get();
    }

    @PostMapping
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getUsername(),
                signUpRequest.getEmail(), signUpRequest.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "User registered successfully"));
    }

    public String addUser(User user1) {
        if(userRepository.existsByUsername(user1.getUsername())) {
            return ("Username already taken");
        }

        if(userRepository.existsByEmail(user1.getEmail())) {
            return ("Email already taken");
        }

        // Creating user's account
        User user = new User(user1.getName(), user1.getUsername(),
                user1.getEmail(), user1.getPassword());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        return ("new user added");
    }


}
