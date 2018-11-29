package nu.obama.graubunden.model;

import nu.obama.graubunden.repository.UserRepository;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(length = 30)
    private PostType postType;

    @ManyToOne
    @JoinColumn(name = "groupId")
    private Group group;

    @ManyToOne
    @JoinColumn(name = "users")
    private User user;

    @NotBlank
    private String postTitle;

    @NotBlank
    private String content;

    @NotNull
    private int upboats;

    public Post(String title, String content) {
        this.postTitle = title;
        this.content = content;
        this.upboats = 0;
    }

    public void upboats() { this.upboats++; }

    public int getUpboats() { return this.upboats; }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Group getGroup() {
        return this.group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public PostType getPostType() {
        return this.postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public String getPostTitle() { return this.postTitle; }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
