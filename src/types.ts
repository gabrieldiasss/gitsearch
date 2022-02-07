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

interface OwnerRepo {
    login: string;
}

export interface IUniqueRepo {
    name: string;
    description: string;
    stargazers_count: number;
    homepage: string;
    visibility: string;
    owner: OwnerRepo;
} 

export interface Contributors {
    id: number;
    avatar_url: string;
}