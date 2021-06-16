import React from "react";
import { ListGroup } from "react-bootstrap";
import Spinner from "./Spinner";
import UserItem from "./UserItem";

export default function UsersList(props) {
  const { className, isLoading, isSuccess, users, length, ...rest } = props;

  if(isLoading) return <Spinner />

  return (
    <ListGroup className={`border-bottom ${className}`} variant="flush">
      {isSuccess ? users.slice(0, length).map(user => <UserItem user={user} key={user._id} {...rest}/>) :
        <div className="message font-weight-bold">No users to show</div>}
    </ListGroup>
  );
}
