package nu.obama.graubunden.payload;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreateCommentRequest {
    @NotNull
    private long userId;

    @NotNull
    private long postId;

    @NotBlank
    private String content;

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public long getPostId() { return postId; }

    public void setPostId(long postId) { this.postId = userId;}

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

}
