package nu.obama.graubunden.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreatePostRequest {

    @NotNull
    private int userId;

    @NotBlank
    private String postTitle;

    @NotBlank
    private String content;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getPostTitle() {
        return postTitle;
    }

    public void setPostTitle(String postTitle) {
        this.postTitle = postTitle;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public CreatePostRequest () {

    }
}