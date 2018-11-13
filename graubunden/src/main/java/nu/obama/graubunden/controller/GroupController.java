package nu.obama.graubunden.controller;

import nu.obama.graubunden.model.Group;
import nu.obama.graubunden.model.User;
import nu.obama.graubunden.payload.ApiResponse;
import nu.obama.graubunden.payload.CreateGroupRequest;
import nu.obama.graubunden.repository.GroupRepository;
import nu.obama.graubunden.repository.PostRepository;
import nu.obama.graubunden.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/group")
public class GroupController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/get/{name}")
    public Group retrieveGroupByName(@PathVariable String name) {
        Optional<Group> group = groupRepository.findByGroupName(name);
        return group.get();
    }
    @PostMapping(value = "/create")
    public ResponseEntity<?> createGroup(@Valid @RequestBody CreateGroupRequest createGroupRequest) {

        Group group = new Group(createGroupRequest.getGroupName(),
                                createGroupRequest.getGroupName());

        Optional<User> userOptional = userRepository.findById(createGroupRequest.getUserId());

        if(!userOptional.isPresent())
            return new ResponseEntity(new ApiResponse(false, "      "),
                    HttpStatus.BAD_REQUEST);

        group.setUser(userOptional.get());

        Group result = groupRepository.save(group);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/group/{id}")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Group registered successfully"));


    }
}