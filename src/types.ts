export interface User {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
}

export interface InfosUser extends User {
    company: string;
    location: string;
    blog: string;
    followers: number;
    following: number;
    created_at: string;
    twitter_username: string;
}