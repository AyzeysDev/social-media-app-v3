import React, { useState } from "react";
import { Segment, Image, Grid, Divider, Header, Button, List } from "semantic-ui-react";
import { followUser, unfollowUser } from "../../utils/profileActions";

function ProfileHeader({
  profile,
  ownAccount,
  loggedUserFollowStats,
  setUserFollowStats
}) {
  const [loading, setLoading] = useState(false);

  const isFollowing =
    loggedUserFollowStats.following.length > 0 &&
    loggedUserFollowStats.following.filter(
      following => following.user === profile.user._id
    ).length > 0;

  return (
    <>
      <Segment color='black' inverted>
        <Grid stackable>
          <Grid.Column width={11}>
            <Grid.Row>
              <Header
                inverted                
                as="h2"
                content={profile.user.name}
                style={{ marginBottom: "5px" }}
              />
            </Grid.Row>

            <Grid.Row stretched>
              {profile.bio}
              <Divider hidden />
            </Grid.Row>

            <Grid.Row>
              {profile.social ? (
                <List>
                  <List.Item as='a' href= 'https://gmail.com/'>
                    <List.Icon name="mail" />
                    <List.Content content={profile.user.email} />
                  </List.Item>

                  {profile.social.facebook && (
                    <List.Item as='a' href= 'https://facebook.com/'>
                      <List.Icon name="facebook" color="blue" />
                      <List.Content
                        style={{ color: "blue" }}
                        content={profile.social.facebook}
                      />
                    </List.Item>
                  )}

                  {profile.social.instagram && (
                    <List.Item as='a' href= 'https://instagram.com/'>
                      <List.Icon name="instagram" color="red" />
                      <List.Content
                        style={{ color: "blue" }}
                        content={profile.social.instagram}
                      />
                    </List.Item>
                  )}

                  {profile.social.youtube && (
                    <List.Item as='a' href= 'https://youtube.com/'>
                      <List.Icon name="youtube" color="red" />
                      <List.Content
                        style={{ color: "blue" }}
                        content={profile.social.youtube}
                      />
                    </List.Item>
                  )}

                  {profile.social.twitter && (
                    <List.Item as='a' href= 'https://twitter.com/'>
                      <List.Icon name="twitter" color="blue" />
                      <List.Content
                        style={{ color: "blue" }}
                        content={profile.social.twitter}
                      />
                    </List.Item>
                  )}
                </List>
              ) : (
                <>No Social Media Links </>
              )}
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={5} stretched style={{ textAlign: "center" }}>
            <Grid.Row>
              <Image size="large" avatar src={profile.user.profilePicUrl} />
            </Grid.Row>
            <br />

            {!ownAccount && (
              <Button
                compact
                loading={loading}
                disabled={loading}
                content={isFollowing ? "Following" : "Follow"}
                icon={isFollowing ? "check circle" : "add user"}
                color={isFollowing ? "instagram" : "twitter"}
                onClick={async () => {
                  setLoading(true);
                  isFollowing
                    ? await unfollowUser(profile.user._id, setUserFollowStats)
                    : await followUser(profile.user._id, setUserFollowStats);
                  setLoading(false);
                }}
              />
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
}

export default ProfileHeader;
