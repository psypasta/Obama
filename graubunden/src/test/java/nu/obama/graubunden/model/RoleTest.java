package nu.obama.graubunden.model;

import org.assertj.core.api.Assertions;
import org.junit.Test;

public class RoleTest {
    @Test
    public void creation() {
        long expected = 1L;

        Role user = new Role(RoleName.ROLE_USER);
        Role admin = new Role(RoleName.ROLE_ADMIN);
        admin.setId(expected);
        user.setId(expected+1);

        Assertions.assertThat(admin.getId()).isEqualTo(expected);
        Assertions.assertThat(user.getId()).isEqualTo(expected+1);

        Assertions.assertThat(user.getName()).isEqualTo(RoleName.ROLE_USER);
        Assertions.assertThat(admin.getName()).isEqualTo(RoleName.ROLE_ADMIN);
    }
}