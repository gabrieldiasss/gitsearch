import { useState, useEffect } from 'react'

import { Link, useParams } from 'react-router-dom'
import { InfosUser } from '../../types'
import { api } from '../../services/api'

import { Container, Content, FollowersCard, Follower, PlaceIcon, CompanyIcon } from './styles'

interface Followers {
    id: string;
    login: string;
    avatar_url: string;
    url: InfosUser;
}

export default function Followers() {

    const [followers, setFollowers] = useState<Followers[]>([])

    let { login } = useParams()

    useEffect(() => {

        async function getFollowers() {
            const response = await api.get<Followers[]>(`${login}/followers`)
            setFollowers(response.data)
        }

        getFollowers()

    }, [])

    return (

        <Container>
            <Content>

                <FollowersCard>

                    <h1>Seguidores</h1>

                    {followers.length <= 0 ? <p className='warning' >{login} não possui nenhum seguidor</p> : ''}

                    {followers.map((value) => (
                        <Follower key={value.id} >
                            <img src={value.avatar_url} alt="" />

                            <div className='infos'>
                                <header>
                                    <Link to={`/profile/${value.login}`}>{value.login}</Link>
                                </header>
                            </div>
                        </Follower>
                    ))}

                </FollowersCard>

            </Content>
        </Container>

    )
}