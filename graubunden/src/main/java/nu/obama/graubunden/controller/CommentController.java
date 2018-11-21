package nu.obama.graubunden.controller;

import nu.obama.graubunden.exception.AppException;
import nu.obama.graubunden.model.Post;
import nu.obama.graubunden.model.Comment;
import nu.obama.graubunden.model.PostType;
import nu.obama.graubunden.model.User;
import nu.obama.graubunden.payload.ApiResponse;
import nu.obama.graubunden.payload.CreatePostRequest;
import nu.obama.graubunden.payload.CreateCommentRequest;
import nu.obama.graubunden.repository.GroupRepository;
import nu.obama.graubunden.repository.CommentRepository;
import nu.obama.graubunden.repository.PostRepository;
import nu.obama.graubunden.repository.UserRepository;
import nu.obama.graubunden.security.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")

public class CommentController {

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

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


    @GetMapping("/{id}")
    public Comment retrieveSingleComment(@PathVariable long id) {
        Optional<Comment> comment = commentRepository.findById(id);

        if (!comment.isPresent())
            throw new AppException("id-" + id);

        return comment.get();
    }

    @GetMapping
    public List<Post> retrieveAllPosts() {

        return postRepository.findAll();
    }


    @GetMapping("/user/{id}")
    public List<Comment> retrieveUserComments(@PathVariable long id) {
        Optional <User> user = userRepository.findById(id);

        if (!user.isPresent())
            throw new AppException("id-" + id);
        return commentRepository.findByUser(user.get());


    }

    @GetMapping("/post/{id}")
    public List<Comment> retrievePostComments(@PathVariable long id) {
        Optional <Post> post = postRepository.findById(id);

        if (!post.isPresent())
            throw new AppException("id-" + id);
        return commentRepository.findByPost(post.get());
    }

    @PostMapping
    public ResponseEntity<?> createComment(@Valid @RequestBody CreateCommentRequest createCommentRequest) {

        Comment comment = new Comment(createCommentRequest.getContent());

        Optional<User> userOptional = userRepository.findById(createCommentRequest.getUserId());

        Optional<Post> postOptional = postRepository.findById(createCommentRequest.getPostId());


        if(!userOptional.isPresent())
            return new ResponseEntity(new ApiResponse(false, "      "),
                    HttpStatus.BAD_REQUEST);

        if(!postOptional.isPresent())
            return new ResponseEntity(new ApiResponse(false, "      "),
                    HttpStatus.BAD_REQUEST);

        comment.setUser(userOptional.get());
        comment.setPost(postOptional.get());

        Comment result = commentRepository.save(comment);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/comments/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Comment registered successfully" + createCommentRequest.getUserId()));
    }

}
