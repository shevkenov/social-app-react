import PostsList from "components/PostsList";
import React from "react";
import { useInfiniteQuery } from "react-query";
import { getPosts } from "../utils/api-client";
import FollowCard from "./FollowCard";
import Spinner from "./Spinner";
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export default function Feed() {
  const [page, setPage] = React.useState(2);
  const [hasFinished, setHasFinished] = React.useState(false);
  const { data: posts, isLoading, isSuccess, isFetchingNextPage, fetchNextPage } = useInfiniteQuery("GetPosts", getPosts);

  console.log(posts)
  
  React.useEffect(() => {
    const finished = posts?.pages.some(p => p.length < 20)
    setHasFinished(finished)
  }, [posts])

  useBottomScrollListener(() => {
    if(hasFinished) return
    fetchNextPage({pageParam: page});
    setPage(prevPage => prevPage + 1);
  }, 200)

  return (
    <>
      <PostsList posts={posts?.pages.flatMap(page => page)} isLoading={isLoading} isSuccess={isSuccess}/>
      {isFetchingNextPage && <Spinner />}
      {hasFinished && <>
        <div className="message text-info">You have reached the end!</div>
      <FollowCard
        noPop
        length={7}
        title="Follow more users to see their posts"
      /></>}
    </>
  );
}
