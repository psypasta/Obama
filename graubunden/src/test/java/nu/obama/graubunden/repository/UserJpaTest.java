package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.User;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@DataJpaTest
@RunWith(SpringRunner.class)
public class UserJpaTest {

    @Autowired
    private TestEntityManager tem;

    @Test
    public void mapping() {
        User max = this.tem.persistFlushFind(new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!"));
        Assertions.assertThat(max.getName()).isEqualTo("Max");
        Assertions.assertThat(max.getId()).isNotNull();
        Assertions.assertThat(max.getId()).isGreaterThan(0);
    }
}
