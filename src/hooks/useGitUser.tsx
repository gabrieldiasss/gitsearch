import React, { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types";

interface Children {
    children: ReactNode;
}

interface GithubContexData {
    users: User;
    setUsers: React.Dispatch<React.SetStateAction<User>>;
}

export const UserGithubContext = createContext<GithubContexData>({} as GithubContexData)

export default function UserGithubProvider({children}: Children) {

    const [users, setUsers] = useState<User>({} as User)

    return (
        <UserGithubContext.Provider value={{ users, setUsers }} >
            {children}
        </UserGithubContext.Provider>
    )
}  

export const useGitUser = () => {
    const context = useContext(UserGithubContext)
    
    return context
}