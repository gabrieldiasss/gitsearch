import { Header, Content } from './styles'

import Logo from '../../images/logo.svg'

export default function NavBar() {

    return (

        <Header>
            <Content>
                <img src={Logo} alt="Git Search Logo" />
            </Content>
        </Header>
    )
}