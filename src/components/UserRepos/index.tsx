import { Container, Header, Repos, Language } from './styles'

export default function UserRepos() {

    return (
        <Container>
            <Header>
                <div className='title'>
                    <h1>Repositórios</h1>
                    <span>38</span>
                </div>

                <div className='inputs' >
                    <div>
                        <input type="text" placeholder='Procurar repositório' />
                    </div>

                    <div>
                        <select name="select-types" >
                            <option>Typescript</option>
                            <option>Javascript</option>
                        </select>
                    </div>

                    <div>
                        <select name="select-languages" >
                            <option>Typescript</option>
                            <option>Javascript</option>
                        </select>
                    </div>
                </div>
            </Header>

            <Repos>
                <div>
                    <a href='#' >gabrieljoseph</a>
                    <span>Public</span>
                </div>
                <p>Página de vendas feito pra um cliente que fez</p>
                <Language>
                    <div></div>
                    <p>Typescript</p>
                </Language>
            </Repos>
        </Container>
    )
}