package nu.obama.graubunden.model;

import org.assertj.core.api.Assertions;
import org.junit.Test;

public class PostTest {

    @Test
    public void creation(){
        long expected = 1L;

        Post link = new Post(PostType.LINK_POST, "", "");
        Post text = new Post(PostType.TEXT_POST,"", "");

        link.setId(expected);
        text.setId(expected+1);

        Assertions.assertThat(link.getId()).isEqualTo(expected);
        Assertions.assertThat(text.getId()).isEqualTo(expected+1);

    }

}
