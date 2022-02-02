import axios from 'axios'
import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { InfosUser } from '../../components/UserInfos'

import { Container, Content, FollowingCard, Followingg, PlaceIcon, CompanyIcon } from './styles'

interface Followers {
    id: string;
    login: string;
    avatar_url: string;
    url: InfosUser[];
}

export default function Following() {

    const [following, setFollowing] = useState<Followers[]>([])

    let { login } = useParams()

    useEffect(() => {

        async function getFollowers() {
            const response = await axios.get<Followers[]>(`https://api.github.com/users/${login}/following`)
            setFollowing(response.data)
        }

        getFollowers()

    }, [])

    return (

        <Container>
            <Content>

                <FollowingCard>

                    <h1>Seguindo</h1>

                    {following.length <= 0 ? <p className='warning' >{login} não segue ninguém</p> : ''}

                    {following.map((value) => (
                        <Followingg key={value.id} >

                            

                            <img src={value.avatar_url} alt="" />

                            <div className='infos'>
                                <header>
                                    <Link to={`/profile/${value.login}`}>{value.login}</Link>
                                    <span>{value.login}</span>
                                </header>

                                <p>{value.url}</p>

                                <footer>
                                    <div><CompanyIcon /></div>
                                    <div>< PlaceIcon /> Internet</div>
                                </footer>
                            </div>
                        </Followingg>
                    ))}

                </FollowingCard>

            </Content>
        </Container>

    )
}