package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.Role;
import nu.obama.graubunden.model.RoleName;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

@DataJpaTest

@RunWith(SpringRunner.class)

public class RoleJpaTest {


    @Autowired
    private TestEntityManager tem;

    @Test
    public void mapping(){
        Role role = this.tem.persistFlushFind(new Role(RoleName.ROLE_USER));
        Assertions.assertThat(role.getName()).isEqualTo(RoleName.ROLE_USER);
    }
}
