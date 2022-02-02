import axios from 'axios'
import { useEffect, useState } from 'react'
import { 
    Container,
    Content,
    Header,
    Input,
    Cards,
    Card,
    Carditem,
    Img,
    CardInfos,
    SearchIcon
} from './styles'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useGitUser } from '../../hooks/useGitUser';
import { Link } from 'react-router-dom';

export default function Search() {

    const { users, setUsers } = useGitUser()

    const [usersSearch, setUsersSearch] = useState(false)

    const [inputSearch, setInputSearch] = useState("")

    async function Search(search: string) {

        try {
            const response = await axios.get(`https://api.github.com/users/${search}`)
            setUsers(response.data)
            setUsersSearch(true)

        } catch(err) {
            toast.error("Usuário não encontrado")
        }
        
    }

    useEffect(() => {
        
        if(inputSearch === "") {
            setUsersSearch(false)
        }

    }, [inputSearch])

    return (

        <Container>
            <Content>
                <Header>
                    <h1>Pesquisar</h1>

                    <div>
                        <Input>
                            <SearchIcon />
                            <input
                                type="text"
                                placeholder='Pesquise por algum usuário'
                                value={inputSearch}
                                onChange={(e) => setInputSearch(e.target.value)}
                            />
                        </Input>

                        <button type="button" onClick={() => Search(inputSearch)} >Buscar</button>
                    </div>
                </Header>

                <Cards>

                    {usersSearch && (
                        <Card>
                            <Carditem>
                                <Img>
                                    <img src={users.avatar_url} alt="" />
                                </Img>

                                <CardInfos>
                                    <div>
                                        <Link to={`profile/${users.login}`}>{users.name}</Link>
                                        <Link to={`profile/${users.login}`}><span>{users.login}</span></Link>
                                    </div>

                                    <div>
                                        <p>{users.bio}</p>
                                    </div>
                                    
                                </CardInfos>

                            </Carditem>
                        </Card>
                    )}

                    {inputSearch === "" && (
                        <p className='warning' >Pesquise por algum usuário</p>
                    )}

                </Cards>
            </Content>
        </Container>
    )
}
