import UserInfos from '../../components/UserInfos'
import UserRepos from '../../components/UserRepos'
import { useParams } from 'react-router-dom'

import { 
    Container,
    Content
} from './styles'

import { useState } from 'react'
import { InfosUser } from '../../types'

export default function Profile() {

    let { login } = useParams()

    const [userInfos, setUserInfos] = useState<InfosUser>({} as InfosUser)

    return (

        <Container>
            <Content>
                <UserInfos login={login} userInfos={userInfos} setUserInfos={setUserInfos} />
                <UserRepos login={login} userInfos={userInfos} />
            </Content>
        </Container>
    )
}
  