package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PostRepository extends JpaRepository <Post, Long>{

    Optional<Post> findById(Long id);

    Optional<Post> findByPostTitle(String postTitle);

}
