package nu.obama.graubunden.controller;

import nu.obama.graubunden.model.User;
import nu.obama.graubunden.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.mockito.Mockito.when;




@WebMvcTest
@RunWith(SpringRunner.class)
public class UserControllerTest {

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
}
