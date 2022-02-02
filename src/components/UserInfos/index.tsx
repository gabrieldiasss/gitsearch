import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGitUser } from '../../hooks/useGitUser'
import { User } from '../../types'
import { Container, InfosAccount, PersonalInformation, TimeIcon, LinkIcon, PlaceIcon, BusinessIcon, Followers, PeopleIcon, TwitterIcon } from './styles'

export interface InfosUser extends User {
    company: string;
    location: string;
    blog: string;
    followers: number;
    following: number;
    created_at: string;
    twitter_username: string;
}

export default function UserInfos() {

    const [userInfos, setUserInfos] = useState<InfosUser>({} as InfosUser)

    const { users, setUsers } = useGitUser()

    let { login } = useParams()

    useEffect(() => {
        axios.get(`https://api.github.com/users/${login}`)
            .then((response) => {
                setUserInfos(response.data)
            }).catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <Container>
            <InfosAccount>
                <img src={userInfos.avatar_url} alt={userInfos.name} />
                <strong>{userInfos.name}</strong>

                {userInfos.bio && (
                    <p>{userInfos.bio}</p>
                )}
                
                <Followers>
                    <PeopleIcon />
                    <Link to={`followers`} >{userInfos.followers} seguidores </Link>• {userInfos.following} Seguindo
                </Followers>
            </InfosAccount>

            <PersonalInformation>

                {userInfos.company && (
                    <div>
                        <BusinessIcon />
                        <span>{userInfos.company}</span>
                    </div>
                )}

                {userInfos.location && (
                    <div>
                        <PlaceIcon />
                        <span>{userInfos.location}</span>
                    </div>
                )}


                {userInfos.blog && (
                    <div className='link' >
                        <LinkIcon />
                        <a href={userInfos.blog} >
                            {userInfos.blog?.length > 30 ? userInfos.blog?.substring(0, 30) + '...' : userInfos.blog}
                        </a>
                    </div>
                )}

                {userInfos.twitter_username && (
                    <div>
                        <TwitterIcon />
                        <a href={`https://twitter.com/${userInfos.twitter_username}`} >{userInfos.twitter_username}</a>
                    </div>
                )}

                <div>
                    <TimeIcon />
                    <span>  {new Date(userInfos.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                    })}
                    </span>
                </div>
            </PersonalInformation>

        </Container>
    )
}