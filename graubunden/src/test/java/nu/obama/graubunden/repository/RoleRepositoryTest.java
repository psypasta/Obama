package nu.obama.graubunden.repository;

import nu.obama.graubunden.model.Role;
import nu.obama.graubunden.model.RoleName;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

@DataJpaTest
@RunWith(SpringRunner.class)
public class RoleRepositoryTest {

    @Autowired
    RoleRepository roleRepository;

    @Test
    public void findByName() {
        this.roleRepository.save(new Role(RoleName.ROLE_USER));
        Optional<Role> roleOptional = this.roleRepository.findByName(RoleName.ROLE_USER);
        Assertions.assertThat(roleOptional.get().getName()).isEqualTo(RoleName.ROLE_USER);

    }

}