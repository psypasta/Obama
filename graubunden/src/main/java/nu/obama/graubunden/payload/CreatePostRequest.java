package nu.obama.graubunden.payload;

import nu.obama.graubunden.model.PostType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreatePostRequest {

    @NotNull
    private long userId;

    @NotBlank
    private String postTitle;

    @NotNull
    private boolean postType;

    @NotBlank
    private String content;

    @NotNull
    private long groupId;

    @NotNull
    private int boats;

    public int getBoats() { return boats; }

    public long getGroupId() {
        return groupId;
    }

    public void setGroupId(long groupId) {
        this.groupId = groupId;
    }

    public long getUserId() {
        return userId;
    }

    public boolean getPostType() {
        return postType;
    }

    public void setPostType(boolean postType) {
        this.postType = postType;
    }

    public void setUserId(long userId) {
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