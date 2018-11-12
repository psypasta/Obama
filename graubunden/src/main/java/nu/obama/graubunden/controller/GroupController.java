package nu.obama.graubunden.controller;

import nu.obama.graubunden.model.Group;
import nu.obama.graubunden.repository.GroupRepository;
import nu.obama.graubunden.repository.PostRepository;
import nu.obama.graubunden.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}