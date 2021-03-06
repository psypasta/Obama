package nu.obama.graubunden.repository;

import nu.obama.graubunden.controller.UserController;
import nu.obama.graubunden.model.User;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.mockito.Mockito.when;

@DataJpaTest
@RunWith(SpringRunner.class)
public class UserRepositoryTest {


    @Mock
    UserRepository userRepository;

    @Spy
    @InjectMocks
    UserController userController;

    @Test
    public void noDuplicateUser(){

        User user1 = new User("Maja", "MajaärBäst", "Majas@hotmail.com", "12345");
        when(userController.userRepository.existsByUsername(user1.getUsername())).thenReturn(true);
        when(userController.userRepository.existsByUsername(user1.getEmail())).thenReturn(false);

        String report = userController.addUser(user1);
        Assertions.assertThat(report).isEqualTo("Username already taken");

    }

    @Test
    public void findById() {

        Long find = 2L;
        User u = new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!");
        u.setId(find);

        this.userRepository.save(u);

        Optional<User> userOptional = this.userRepository.findById(find);
        Assertions.assertThat(userOptional.get().getId()).isEqualTo(find);
    }

    @Test
    public void existsByEmail() {
        this.userRepository.save(new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!"));
        boolean expected = this.userRepository.existsByEmail("max.blomstervall@gmail.com");
        Assertions.assertThat(expected);
    }

    @Test
    public void existsByUsername() {

        String find = "fulsomenko";

        this.userRepository.save(new User("Max", find, "max.blomstervall@gmail.com", "placeHolder1!"));
        boolean expected = this.userRepository.existsByUsername(find);
        Assertions.assertThat(expected);
    }

    @Test
    public void findByUserName() {
        String find = "fulsomenko";

        this.userRepository.save(new User("Max", find, "max.blomstervall@gmail.com", "placeHolder1!"));
        Optional<User> userOptional = this.userRepository.findByUsername(find);
        Assertions.assertThat(userOptional.get().getUsername()).isEqualTo(find);
        Assertions.assertThat(userOptional.get().getId()).isNotNull();
        Assertions.assertThat(userOptional.get().getId()).isGreaterThan(0);
    }

    @Test
    public void findByEmail() {

        String find = "max.blomstervall@gmail.com";

        this.userRepository.save(new User("Max", "fulsomenko", find, "placeHolder1!"));
        Optional<User> userOptional = this.userRepository.findByEmail(find);
        Assertions.assertThat(userOptional.get().getEmail()).isEqualTo(find);
    }

    @Test
    public void findByUsernameOrEmail() {
        String findUsername = "fulsomenko";
        String findEmail = "max.blomstervall@gmail.com";
        User u = new User("Max", findUsername, findEmail, "placeHolder1!");
        this.userRepository.save(u);

        Optional<User> userOptionalUsername = this.userRepository.findByUsernameOrEmail(findUsername, "");
        Optional<User> userOptionalMail = this.userRepository.findByUsernameOrEmail("", findEmail);

        Assertions.assertThat(userOptionalUsername.get().getUsername()).isEqualTo(findUsername);
        Assertions.assertThat(userOptionalMail.get().getEmail()).isEqualTo(findEmail);
    }

}
