package nu.obama.graubunden.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "\"groups\"")
public class Group {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    // Group shall contain the total amount of upboats from all the posts upboats.
    // All groups
    @NotBlank
    @Column(length = 30)
    private String groupName;

    @ManyToOne
    @JoinColumn(name = "users")
    private User user;

    @NotBlank
    @Column(length = 30)
    private String groupTopic;

    public Group(){

    }

    public Group(String groupName, String groupTopic) {
        this.groupName = groupName;
        this.groupTopic = groupTopic;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public void getUser(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupTopic() {
        return groupTopic;
    }

    public void setGroupTopic(String groupTopic) {
        this.groupTopic = groupTopic;
    }

}
