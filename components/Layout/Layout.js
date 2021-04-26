import React, { createRef } from "react";
import HeadTags from "./HeadTags";
import Navbar from "./Navbar";
import {
  Container,
  Visibility,
  Grid,
  Sticky,
  Ref,
  Divider,
  Segment
} from "semantic-ui-react";
import nprogress from "nprogress";
import Router from "next/router";
import SideMenu from "./SideMenu";
import Search from "./Search";

function Layout({ children, user }) {
  const contextRef = createRef();

  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.done();
  Router.onRouteChangeError = () => nprogress.done();

  return (
    <>
      <HeadTags />
      {user ? (
        <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
          <Ref innerRef={contextRef}>
            <Grid stackable columns= 'equal'>
              {/* <Grid.Row stretched> */}
              <Grid.Column color= 'black' padded='vertically' only='large screen'>
                <Sticky context={contextRef}>            
                  <SideMenu user={user} />
                </Sticky>
              </Grid.Column>

              <Grid.Column width={10} height={20}>
                <Visibility context={contextRef}>{children}</Visibility>
              </Grid.Column>

              <Grid.Column color= 'black' only='large screen'>
                <Sticky context={contextRef}>
                  <Segment basic>
                    <Search />
                  </Segment>
                </Sticky>
              </Grid.Column>
              {/* </Grid.Row> */}
            </Grid>
          </Ref>
        </div>
      ) : (
        <>
          <Navbar />
          <Container text style={{ paddingTop: "1rem" }}>
            {children}
          </Container>
        </>
      )}
    </>
  );
}

export default Layout;
