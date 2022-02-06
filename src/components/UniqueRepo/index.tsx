import { Container, Content, Header, Infos, StarIcon } from './styles'


export default function UniqueRepo() {

    return (
        <Container>
            <Content>
                <Header>
                    <h1>Informações do repositório</h1>
                </Header>

                <Infos>
                    <h2>gabrieljoseph</h2>

                    <p>Página de vendas de um info produto existente
                        (Freelance que eu fiz)</p>

                    <a href='#'>gabrieljoseph.vercel.app</a>

                    <div className='stars' >
                        <StarIcon />
                        <span>0 estrelas</span>
                    </div>

                    <div className='languages' >
                        <strong>Linguagens:</strong>
                        <div>
                            TypeScript
                        </div>
                        
                    </div>

                    <div className='contributors'>
                        <strong>Contribuidores: </strong>
                        <div>
                            <img src="https://avatars.githubusercontent.com/u/71296002?v=4" alt="" />
                        </div>
                    </div>
                </Infos>
            </Content>

        </Container>
    )
}