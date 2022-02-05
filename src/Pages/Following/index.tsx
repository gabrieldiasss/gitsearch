
import { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import { api } from '../../services/api'


import { Container, Content, FollowingCard, Followingg, PlaceIcon, CompanyIcon } from './styles'

interface Followers {
    id: string;
    login: string;
    avatar_url: string;
}

export default function Following() {

    const [following, setFollowing] = useState<Followers[]>([])

    let { login } = useParams()

    useEffect(() => {

        async function getFollowers() {
            const response = await api.get<Followers[]>(`${login}/following`)
            setFollowing(response.data)
        }

        getFollowers()

    }, [])

     /* useEffect(() => {
 
         following.map(value => axios.get(`https://api.github.com/users/${value.login}`).then((response) => {
 
             console.log({...response.data, following})
    
         }))
 
     }, [following]) */

    return (

        <Container>
            <Content>

                <FollowingCard>

                    <h1>Seguindo</h1>

                    {following.length <= 0 ? <p className='warning' >{login} não segue ninguém</p> : ''}

                    {following.map((value, key) => (
                        <Followingg key={key}>

                            <img src={value.avatar_url} alt="" />

                            <div className='infos' key={key} >
                                <header>
                                    <Link to={`/profile/${value.login}`}>{value.login}</Link>
                                    <span>{value.login}</span>
                                </header>

                                <p>{value.login}</p>

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