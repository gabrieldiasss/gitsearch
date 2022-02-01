import { Link } from 'react-router-dom'
import { Container, Content, FollowersCard, Follower, PlaceIcon, CompanyIcon } from './styles'

export default function Followers() {

    return (

        <Container>
            <Content>

                <FollowersCard>

                    <h1>Seguidores</h1>

                    <Follower>
                        <img src="https://avatars.githubusercontent.com/u/71296002?v=4" alt="" />

                        <div className='infos' >
                            <header>
                                <Link to={`profile/followers`} >gabrieldiasss</Link>
                                <span>aplus-developer</span>
                            </header>

                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                            <footer>
                                <div> <CompanyIcon/>@aplus-framework</div>
                                <div>< PlaceIcon/> Internet</div>
                            </footer>
                        </div>
                    </Follower>

                </FollowersCard>
                
            </Content>
        </Container>

    )
}