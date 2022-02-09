import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'
import { InfosUser } from '../../types'
import { Container, InfosAccount, PersonalInformation, TimeIcon, LinkIcon, PlaceIcon, BusinessIcon, Followers, PeopleIcon, TwitterIcon } from './styles'

interface UserInfosProps {
    login: string | undefined;
    userInfos: InfosUser;
    setUserInfos: React.Dispatch<React.SetStateAction<InfosUser>>;
}

export default function UserInfos({ login, userInfos, setUserInfos }: UserInfosProps) {

    function formatUrlHttp(url: string) {
        if (/(http(s?)):\/\//.test(url)) {
            return url;
        }

        return `https://${url}`;
    }

    useEffect(() => {
        api.get(`${login}`)
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
                <Link to={`followers`} ><PeopleIcon /> {userInfos.followers} seguidores</Link>•<Link to={`following`} >{userInfos.following} Seguindo</Link>
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
                        <a href={formatUrlHttp(userInfos.blog)} >
                            {userInfos.blog?.length > 30 ? userInfos.blog?.substring(0, 30) + '...' : userInfos.blog}
                        </a>
                    </div>
                )}

                {userInfos.twitter_username && (
                    <div>
                        <TwitterIcon />
                        <a href={`https://twitter.com/${userInfos.twitter_username}`}>{userInfos.twitter_username}</a>
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