import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { api } from '../../services/api'
import { InfosUser } from '../../types';
import { Container, Header, Repository, Language, LanguageColor } from './styles'

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

    const [search, setSearch] = useState('')

    const [repos, setRepos] = useState<Repos[]>([])


    useEffect(() => {
        api.get(`${login}/repos`).then(response => {
            setRepos(response.data)
        })

    }, [])

    const lowerSearch = search.toLowerCase()

    const searchRepos = repos.filter((repo: Repos) => repo.name.includes(lowerSearch))

    return (
        <Container>
            <Header>
                <div className='title'>
                    <h1>Repositórios</h1>
                    <span>{userInfos.public_repos}</span>
                </div>

                <div className='inputs' >
                    <div>
                        <input type="text"
                            placeholder='Procurar repositório'
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                        />
                    </div>
                </div>
            </Header>

            {searchRepos.map((value) => (
                <Repository key={value.id} >
                    <div>
                        <Link to={`${value.name}`} >{value.name}</Link>
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
                </Repository>
            ))}
        </Container>
    )
}