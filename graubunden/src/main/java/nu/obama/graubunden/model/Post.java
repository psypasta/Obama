package nu.obama.graubunden.model;

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
    private PostType type = null;

    @OneToOne
    private User u = null;

    @NotBlank
    private String postTitle = null;

    @NotBlank
    private String content = null;

    public Post(PostType postType, String title, String content) {
        this.type = postType;
        this.postTitle = title;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

}
