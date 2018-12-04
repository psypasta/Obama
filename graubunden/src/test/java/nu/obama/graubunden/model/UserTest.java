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

    @Test
    public void sameNameAndEmail(){
        User user1 = new User("Maja", "MajaärBäst", "Majas@hotmail.com", "12345");
        User user2 = new User("Kevin", "HeadEXploder2500XX", "Batai@hotmail.com", "sfsdfdg");
        User user3 = new User("Hugo", "PMmePicturesOfHorses", "Donaldo@hotmail.com", "MyTrueLoveIsForCats");
        User user4 = new User("Arnold", "HugoLund", "Hercules@outlook.se", "X!dssfY");
        User[] users = {user1, user2, user3, user4};

        boolean isSame = true;
        for (int i = 0; i < users.length; i++)
        {
            for (int j = 0; j < users.length; j++) {
                if(i != j) {
                    if (users[i].getEmail().equals(users[j].getEmail()) || users[i].getUsername().equals(users[j].getUsername()))
                        isSame = false;
                }
            }
        }

        Assertions.assertThat(isSame).isTrue();
    }
}
