
import { Contributors, IUniqueRepo } from '../../types'
import { Container, Content, Header, Infos, StarIcon } from './styles'

interface UniqueRepoProps {
    uniqueRepo: IUniqueRepo;
    contributors: Contributors[];
    login: string | undefined;
}

export default function UniqueRepo({ uniqueRepo, contributors, login }: UniqueRepoProps) {

    return (
        <Container>
            <Content>
                <Header>
                    <h1>Informações do repositório</h1>
                </Header>

                <Infos>
                    <h2><a href={`https://github.com/${login}/${uniqueRepo.name}`} target={`_blank`} >{uniqueRepo?.name}</a></h2>

                    <p>{uniqueRepo?.description}</p>

                    <a href={uniqueRepo?.homepage} target={`_blank`} >{uniqueRepo?.homepage}</a>

                    <div className='stars' >
                        <StarIcon />
                        <span>{uniqueRepo.stargazers_count > 1 ? ` ${uniqueRepo.stargazers_count} Estrelas` : `${uniqueRepo.stargazers_count} Estrela`}</span>
                    </div>

                    <div className='contributors'>
                        <strong>Contribuidores:</strong>
                        <span>{contributors.length}</span>

                        <ul>
                            {contributors.map((value) => (
                                <p key={value.id}  >
                                    <img src={value.avatar_url} alt="" />
                                </p>
                            ))}

                        </ul>
                    </div>
                </Infos>
            </Content>

        </Container>
    )
}