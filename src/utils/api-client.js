import axios from 'axios';

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

export async function getReplies() {}

export async function getUserTimeline() {}

export async function getPosts() {
    return await client.get('/api/home_timeline').then(response => response.data.posts);
}

export async function getPostLikes() {}

export async function followUser() {}

export async function unfollowUser() {}

export async function getPostReposts() {}

export async function getUserFollowers() {}

export async function getFriends() {}

export async function getUserSuggestions() {}

export async function getTrends() {}

export async function getSearchResults() {}

export async function likePost() {}

export async function unlikePost() {}

export async function unrepostPost() {}

export async function repostPost() {}

export async function updateUserDetails(payload) {
    client.post(`/api/updateuser`, payload);
}

export async function createPost(post) {
    await client.post('/api/post', post);
}

export async function getPostById() {}
