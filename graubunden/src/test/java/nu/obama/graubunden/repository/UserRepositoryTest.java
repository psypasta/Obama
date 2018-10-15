package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.User;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

@DataJpaTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {

    @Autowired
    UserRepository userRepository;

    @Test
    public void findByUserName() {
        this.userRepository.save(new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!"));
        Optional<User> userOptional = this.userRepository.findByUsername("fulsomenko");
        Assertions.assertThat(userOptional.get().getUsername()).isEqualTo("fulsomenko");
        Assertions.assertThat(userOptional.get().getId()).isNotNull();
        Assertions.assertThat(userOptional.get().getId()).isGreaterThan(0);
    }

}
