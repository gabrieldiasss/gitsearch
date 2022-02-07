import { Link } from 'react-router-dom'
import { IUniqueRepo } from '../../types'
import { Container } from './styles'

interface UniqueRepoProps {
    uniqueRepo: IUniqueRepo;
}

export default function NameRepo({ uniqueRepo }: UniqueRepoProps) {

    return (
        <Container>
            <div>
                <Link to={`/profile/${uniqueRepo?.owner?.login}`}>{uniqueRepo?.owner?.login} </Link> / <Link to={``}>{uniqueRepo.name}</Link>
                <span>{uniqueRepo.visibility}</span>
            </div>
        </Container>
    )
}