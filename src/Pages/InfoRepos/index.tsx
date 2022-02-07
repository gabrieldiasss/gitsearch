import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NameRepo from "../../components/RepoHeader";
import UniqueRepo from "../../components/UniqueRepo";
import { Contributors, IUniqueRepo } from "../../types";

import { Container } from './styles'

export default function InfoRepos() {

    let { login, repository } = useParams()

    const [uniqueRepo, setUniqueRepo] = useState<IUniqueRepo>({} as IUniqueRepo)
    const [contributors, setContributors] = useState<Contributors[]>([])

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${login}/${repository}`)
            .then(response => {
                setUniqueRepo(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    useEffect(() => {
        axios.get(`https://api.github.com/repos/${login}/${repository}/contributors`)
            .then(response => {
                setContributors(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <>
            <NameRepo uniqueRepo={uniqueRepo} />

            <Container>
                <UniqueRepo uniqueRepo={uniqueRepo} contributors={contributors} />
            </Container>
            
        </>
    )
}


