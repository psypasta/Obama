package nu.obama.graubunden.model;

import org.assertj.core.api.Assertions;
import org.junit.Test;

public class UserTest {

    @Test
    public void creation(){
        User u = new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!");
        u.setId(1L);
        Assertions.assertThat(u.getId()).isEqualTo(1L);
        Assertions.assertThat(u.getUsername()).isNotBlank();
        Assertions.assertThat(u.getUsername()).isEqualTo("fulsomenko");
        Assertions.assertThat(u.getName()).isNotBlank();
        Assertions.assertThat(u.getName()).isEqualTo("Max");
        Assertions.assertThat(u.getPassword()).isNotBlank();
        Assertions.assertThat(u.getEmail()).isNotBlank();
    }
}
