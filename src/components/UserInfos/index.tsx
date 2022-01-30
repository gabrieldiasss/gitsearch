import { Container, InfosAccount, PersonalInformation, EmailIcon, LinkIcon, PlaceIcon, BusinessIcon } from './styles'

export default function UserInfos() {

    return (
        <Container>
            <InfosAccount>
                <img src="https://avatars.githubusercontent.com/u/71296002?v=4" alt="" />
                <strong>Gabriel Dias</strong>
                <p>Tech Content Creator | Dev Frontend - ReactJS</p>
            </InfosAccount>
            
            <PersonalInformation>
                <div>
                    <BusinessIcon />
                    <span>Além do Código</span>
                </div>

                <div>
                    <PlaceIcon />
                    <span>Santo André, São Paulo</span>
                </div>

                <div>
                    <EmailIcon />
                    <span>gabrieldiascorrea7@gmail.com</span>
                </div>

                <div>
                    <LinkIcon />
                    <a href='#' >https://www.figma.com/file/QmAQJ08E...</a>
                </div>
            </PersonalInformation>

        </Container>
    )
}