import PostsList from "components/PostsList";
import React from "react";
import { useQuery } from "react-query";
import { getPosts } from "../utils/api-client";
import FollowCard from "./FollowCard";
import Spinner from "./Spinner";

export default function Feed() {
  const {data, isLoading, isSuccess} = useQuery("GetPosts", getPosts);

  if(isLoading) return <Spinner />
  console.log(data, {isSuccess})

  return (
    <>
      <PostsList posts={data}/>
      <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      />
    </>
  );
}
