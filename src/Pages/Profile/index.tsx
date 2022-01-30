import UserInfos from '../../components/UserInfos'
import UserRepos from '../../components/UserRepos'

import { 
    Container,
    Content
} from './styles'

export default function Profile() {
    return (

        <Container>
            <Content>
                <UserInfos />
                <UserRepos />
            </Content>
        </Container>
    )
}
  