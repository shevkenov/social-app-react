import axios from 'axios';
import { queryClient } from '../AppProviders';

const client = axios.create();

export async function authenticate() {
    return await client.get('/auth/login').then(response => response.data.user);
}

export async function login(payload) {
    await client.post("/auth/login", payload).then;
    window.location.pathname = "/";
}

export async function signup(payload) {
    await client.post("/auth/signup", payload);
    window.location.assign("/settings/profile?redirect=true");
}

export async function logout() {
    await client.get("/auth/logout");
    window.location.pathname = "/";
}

export async function getNotifications() {}

export function readNotification() {}

export async function getPost() {}

export async function getReplies(postId) {
    return await client.get(`/api/post/${postId}/replies`).then(res => res.data.posts);
}

export async function getUserTimeline() {}

export async function getPosts({pageParam = 1}) {
    return await client.get(`/api/home_timeline?p=${pageParam}`).then(response => response.data.posts);
}

export async function getPostLikes(postId) {
    return await client.get(`/api/post/${postId}/likes`).then(res => res.data.users);
}

export async function followUser() {}

export async function unfollowUser() {}

export async function getPostReposts(postId) {
    return await client.get(`/api/post/${postId}/reposts`).then(res => res.data.users);
}

export async function getUserFollowers() {}

export async function getFriends() {}

export async function getUserSuggestions() {}

export async function getTrends() {}

export async function getSearchResults() {}

export async function likePost(post) {
    await client.get(`/api/like/${post.id}`);
    await queryClient.invalidateQueries("GetPosts");
    await queryClient.invalidateQueries("PostDetails");
}

export async function unlikePost(post) {
    await client.get(`/api/unlike/${post.id}`);
    await queryClient.invalidateQueries("GetPosts");
    await queryClient.invalidateQueries("PostDetails");
}

export async function unrepostPost(post) {
    await client.post(`/api/unrepost`, post);
    await queryClient.invalidateQueries("GetPosts");
    await queryClient.invalidateQueries("PostDetails");
}

export async function repostPost(post) {
    await client.post(`/api/repost`, post);
    await queryClient.invalidateQueries("GetPosts");
    await queryClient.invalidateQueries("PostDetails");
}

export async function updateUserDetails(payload) {
    client.post(`/api/updateuser`, payload);
}

export async function createPost(post, url = '/api/post') {
    await client.post(url, post);
    await queryClient.invalidateQueries("GetPosts");
}

export async function getPostById(postId) {
    return await client.get(`/api/post/${postId}`).then(res => res.data.post);
}
