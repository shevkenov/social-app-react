import React from "react";
import { ListGroup } from "react-bootstrap";
import PostItem from "./PostItem";
import Spinner from "./Spinner";

export default function PostsList({posts, isSuccess, isLoading, no_reply_tag}) {
  if(isLoading) return <Spinner />

  console.log(posts)
  return (
    <ListGroup variant="flush" className="border-bottom">
      {
        isSuccess ? posts.map(post => (<PostItem  post={post} key={post._id} no_reply_tag={no_reply_tag}/>)) : 
        <div className="message">No posts for you right now</div>}
    </ListGroup>
  );
}
