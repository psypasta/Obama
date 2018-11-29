package nu.obama.graubunden.controller;

import nu.obama.graubunden.exception.AppException;
import nu.obama.graubunden.model.Group;
import nu.obama.graubunden.model.Post;
import nu.obama.graubunden.model.PostType;
import nu.obama.graubunden.model.User;
import nu.obama.graubunden.payload.ApiResponse;
import nu.obama.graubunden.payload.CreatePostRequest;
import nu.obama.graubunden.repository.GroupRepository;
import nu.obama.graubunden.repository.PostRepository;
import nu.obama.graubunden.repository.UserRepository;
import nu.obama.graubunden.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.swing.text.html.Option;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider tokenProvider;

    @ResponseBody
    public String getFoosBySimplePath() {
        return "Get some Foos";
    }

    @GetMapping
    public List<Post> retrieveAllPosts() {

        return postRepository.findAll();
    }


    @GetMapping("/{id}")
    public Post retrievePost(@PathVariable long id) {
        Optional<Post> post = postRepository.findById(id);

        if (!post.isPresent())
            throw new AppException("id-" + id);

        return post.get();
    }



    @PostMapping
    public ResponseEntity<?> createPost(@Valid @RequestBody CreatePostRequest createPostRequest) {

        Post p = new Post(createPostRequest.getPostTitle(),
                          createPostRequest.getContent());

        if(createPostRequest.getPostType()){
            p.setPostType(PostType.LINK_POST);
        }
        else {
            p.setPostType(PostType.TEXT_POST);
        }

        Optional<User> userOptional = userRepository.findById(createPostRequest.getUserId());
        Optional<Group> groupOptional = groupRepository.findById(createPostRequest.getGroupId());

        if(!userOptional.isPresent())
            return new ResponseEntity(new ApiResponse(false, "User broken"),
                    HttpStatus.BAD_REQUEST);

        if(!groupOptional.isPresent())
            return new ResponseEntity(new ApiResponse(false, "Group broken"),
                    HttpStatus.BAD_REQUEST);

        p.setUser(userOptional.get());

        p.setGroup(groupOptional.get());

        Post result = postRepository.save(p);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/posts/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Post registered successfully"));
    }

}
