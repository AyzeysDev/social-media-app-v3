import React from "react";
import { List, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { logoutUser } from "../../utils/authUser";

function SideMenu({ user: { unreadNotification, email, unreadMessage, username } }) {
  const router = useRouter();

  const isActive = route => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: "1rem" }}
        size="big"
        verticalAlign="middle"
        selection
        divided
        inverted
        relaxed>
        <Link href="/">
          <List.Item active={isActive("/")}>
            <Icon name="home" size="large" color={"violet"} />
            <List.Content>
              <List.Header content="Home" />
            </List.Content>
          </List.Item>
        </Link>
        <br />
        <Link href="https://ak-messenger-app.herokuapp.com/">
          <List.Item>
            <Icon
              name="chat"
              size="large"
              color="purple"
            />
            <List.Content>
              <List.Header content="Messenger App" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <Link href={`/${username}`}>
          <List.Item active={router.query.username === username}>
            <Icon
              name="user outline"
              size="large"
              color={"green"}
            />
            <List.Content>
              <List.Header content="Profile" />
            </List.Content>
          </List.Item>
        </Link>
        <br />

        <List.Item onClick={() => logoutUser(email)}>
          <Icon name="backward" size="large" color={"red"}/>
          <List.Content>
            <List.Header content="Logout" />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;
