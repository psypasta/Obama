package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.Comment;
import nu.obama.graubunden.model.User;
import nu.obama.graubunden.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

    Optional<Comment> findById(Long id);

    List<Comment> findByPost(Post Post);

    List<Comment> findByUser(User user);

}

