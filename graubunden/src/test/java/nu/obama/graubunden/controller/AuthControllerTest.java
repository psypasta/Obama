package nu.obama.graubunden.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import nu.obama.graubunden.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest(secure = false)
@RunWith(SpringRunner.class)
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    private JacksonTester<User> jsonTester;
    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AuthController authController;

    @Test
    public void signup() throws Exception {
        JacksonTester.initFields(this, objectMapper);
        User user = new User("Max", "fulsomenko", "max.blomstervall@gmail.com", "placeHolder1!");
        user.setId(1L);
        final String userDTOjson = jsonTester.write(user).getJson().replace("\"roles\":[]", "\"password\":\"placeHolder1!\"");
        System.err.println(userDTOjson);

        this.mockMvc.perform(MockMvcRequestBuilders.post("/api/auth/signup")
                .with(SecurityMockMvcRequestPostProcessors.csrf())
                .contentType(MediaType.APPLICATION_JSON)
                .content(userDTOjson))
                .andExpect(MockMvcResultMatchers.status().isOk());
    }

}
