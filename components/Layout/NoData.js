import { Message, Button } from "semantic-ui-react";

export const NoProfilePosts = () => (
  <>
    <Message color='olive' icon="minus circle" header="Empty" content="No Posts to Show" />
    <Button icon="long arrow alternate left" content="Return to Home" as= 'a' href="/" />
  </>
);

export const NoFollowData = ({ followersComponent, followingComponent }) => (
  <>
    {followersComponent && (
      <Message icon="user outline" info content={`User does not have followers`} />
    )}

    {followingComponent && (
      <Message icon="user outline" info content={`User does not follow any users`} />
    )}
  </>
);

export const NoMessages = () => (
  <Message
    info
    icon="telegram plane"
    header="Sorry"
    content="You have not messaged anyone yet.Search above to message someone!"
  />
);

export const NoPosts = () => (
  <Message
    info
    icon="heart"
    header="Hey! Welcome to Tweezak"
    content="No Posts to show. Make sure you follow someone to view posts."
  />
);

export const NoProfile = () => (
  <Message info icon="meh" header="Hey!" content="No Profile Found." />
);
