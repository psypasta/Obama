package nu.obama.graubunden.controller;

import nu.obama.graubunden.model.Post;
import nu.obama.graubunden.model.PostType;
import nu.obama.graubunden.payload.ApiResponse;
import nu.obama.graubunden.payload.CreatePostRequest;
import nu.obama.graubunden.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private PostRepository postRepository;

    @ResponseBody
    public String getFoosBySimplePath() {
        return "Get some Foos";
    }

    @PostMapping(value = "/create")
    public ResponseEntity<?> createPost(@Valid @RequestBody CreatePostRequest createPostRequest) {

        Post p = new Post(PostType.TEXT_POST,
                          createPostRequest.getPostTitle(),
                          createPostRequest.getContent());

        Post result = postRepository.save(p);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/posts/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Post registered successfully"));
    }

}

/*
    @PostMapping("/signup")
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



        U

        return
    }
*/