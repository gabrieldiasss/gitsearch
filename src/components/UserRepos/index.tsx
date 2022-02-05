import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { InfosUser } from '../../types';
import { Container, Header, Repos, Language, LanguageColor } from './styles'

const GitHubColors = require('github-colors');

interface UserReposProps {
    login: string | undefined;
    userInfos: InfosUser;
}

interface Repos {
    id: number;
    name: string;
    description: string;
    visibility: string;
    language: string;
}


export default function UserRepos({ login, userInfos }: UserReposProps) {

    const [repos, setRepos] = useState<Repos[]>([])

    useEffect(() => {
        api.get(`${login}/repos`).then(response => {
            setRepos(response.data)
        })

    }, [])


    return (
        <Container>
            <Header>
                <div className='title'>
                    <h1>Repositórios</h1>
                    <span>{userInfos.public_repos}</span>
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

            {repos.map((value) => (
                <Repos key={value.id} >
                    <div>
                        <a href='#'>{value.name}</a>
                        <span>{value.visibility}</span>
                    </div>
                    <p>{value.description}</p>
                    <Language>
                        <LanguageColor 
                            background={GitHubColors.get(value.language)?.color}
                        >

                        </LanguageColor>
                        <p>{value.language}</p>
                    </Language>
                </Repos>
            ))}
        </Container>
    )
}

/* style={{ backgroundColor: }} `#` */
/* style={{ background: `${console.log()}` }}  */