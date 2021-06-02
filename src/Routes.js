import CreatePostModal from "pages/CreatePostModal";
import Explore from "pages/Explore";
import Notifications from "pages/Notifications";
import PostDetail from "pages/PostDetail";
import PostLikes from "pages/PostLikes";
import PostReposts from "pages/PostReposts";
import SearchResults from "pages/SearchResults";
import UserDetail from "pages/UserDetail";
import UserFollowers from "pages/UserFollowers";
import UserFriends from "pages/UserFriends";
import Home from "pages/Home";
import ProfileModal from "pages/ProfileModal";
import React from "react";
import { Col, Row } from "react-bootstrap";
import MediaQuery from "react-responsive";
import Sidebar from "components/Sidebar";
import { Switch, Route } from "react-router-dom";

export default function Routes() {
  return (
    <Row>
      <Col className="px-sm-4" sm="12" lg="8">
        <Col className="border">
          <Switch>
            <Route to="/explore" component={Explore} />
            <Route to="/search" component={SearchResults} />
            <Route to="/notifications" component={Notifications} />
            <Route to="/post/:postId/like" component={PostLikes} />
            <Route to="/post/:postId/reposts" component={PostReposts} />
            <Route to="/post/:postId" component={PostDetail} />
            <Route to="/user/:username/friends" component={UserFriends} />
            <Route to="/user/:username/followers" component={UserFollowers} />
            <Route to="/user/:username" component={UserDetail} />
            <Route to="/settings/profile" component={ProfileModal} />
            <Route to="/" component={Home} />
          </Switch>
          <Route to="/compose/post" component={CreatePostModal} />
        </Col>
      </Col>

      <MediaQuery minWidth={992}>
        <Col lg="4" className="vh-100 overflow-y-auto hide-scroll sticky-top">
          <Sidebar />
        </Col>
      </MediaQuery>
    </Row>
  );
}
