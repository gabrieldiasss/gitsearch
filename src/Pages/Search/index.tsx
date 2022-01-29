import { Container, Content, Header, Input, Cards, Card, Carditem, Img, CardInfos, SearchIcon } from './styles'

export default function Search() {

    return (

        <Container>
            <Content>
                <Header>
                    <h1>Pesquisar</h1>

                    <div>
                        <Input>
                            <SearchIcon />
                            <input type="text" placeholder='Pesquise por algum usuário' />
                        </Input>

                        <button type="button" >Buscar</button>
                    </div>
                </Header>

                <Cards>
                    <Card>
                        <Carditem>
                            <Img>
                                <img src="https://pbs.twimg.com/profile_images/1473744566088081422/N2IxaB03_400x400.jpg" alt="" />
                            </Img>

                            <CardInfos>
                                <div>
                                    <a href="#" >Diego Ferndandes</a>
                                    <p>CTO at @Rocketseat</p>
                                </div>


                                <div>
                                    <span>diego3g</span>
                                </div>
                            </CardInfos>


                        </Carditem>
                    </Card>

                    <Card>
                        <Carditem>
                            <Img>
                                <img src="https://pbs.twimg.com/profile_images/1473744566088081422/N2IxaB03_400x400.jpg" alt="" />
                            </Img>

                            <CardInfos>
                                <div>
                                    <a href="#" >Diego Ferndandes</a>
                                    <p>CTO at @Rocketseat</p>
                                </div>


                                <div>
                                    <span>diego3g</span>
                                </div>
                            </CardInfos>
                        </Carditem>
                    </Card>

                    
                </Cards>


            </Content>
        </Container>
    )
}
