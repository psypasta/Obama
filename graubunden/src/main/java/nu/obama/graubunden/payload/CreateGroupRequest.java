package nu.obama.graubunden.payload;

import nu.obama.graubunden.model.PostType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class CreateGroupRequest {

    @NotNull
    private long userId;

    @NotBlank
    private String groupName;

    @NotBlank
    private String groupTopic;

    public long getUserId() {
        return this.userId;
    }

    public void setGroupId(long userId) {
        this.userId = userId;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupTopic() {
        return groupTopic;
    }

    public void setGroupTopic(String groupTopic) {
        this.groupTopic = groupTopic;
    }

    public CreateGroupRequest() {
    }
}