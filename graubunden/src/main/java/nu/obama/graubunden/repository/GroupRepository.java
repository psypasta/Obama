package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
    Optional<Group> findById(Long id);
    Optional<Group> findByGroupName(String name);
    // Collection<Group> getAllByGroupName();
}
