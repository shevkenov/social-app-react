import Heading from "components/Heading";
import UsersList from "components/UsersList";
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPostReposts } from "../utils/api-client";

export default function PostReposts() {
  const { postId } = useParams();

  const {data: users, isLoading, isSuccess} = useQuery("PostReposts", () => getPostReposts(postId));

  return (
    <>
      <Heading title="Reposted by" backButton btnProfile />
      <UsersList users={users} isLoading={isLoading} isSuccess={isSuccess} noPop />
    </>
  );
}
