package nu.obama.graubunden.model;

import org.hibernate.annotations.ManyToAny;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 30)
    private PostType postType;

    @ManyToOne
    @JoinColumn(name = "Group")
    private Group group;

    @ManyToOne
    @JoinColumn(name = "User")
    private User u;

    @NotBlank
    private String postTitle;

    @NotBlank
    private String content;

    public Post(){

    }

    public Post(String title, String content) {
        this.postTitle = title;
        this.content = content;

    }

    public Group getGroup() { return group; }

    public void setGroup(Group group) { this.group = group; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getU() {
        return u;
    }

    public void setU(User u) {
        this.u = u;
    }


    public PostType getPostType() {
        return postType;
    }

    public void setPostType(PostType postType) {
        this.postType = postType;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
