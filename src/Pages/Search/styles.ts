import styled from 'styled-components'

import { Search } from '@styled-icons/boxicons-regular/Search'

export const Container = styled.main`

    width: 90%;
    max-width: 1200px;
    margin: 2rem auto 0;
`

export const Content = styled.div`
    max-width: 600px;
`

export const Header = styled.header`

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    div {
        display: flex;
        align-items: center;

        button {
            padding: 1rem 2rem;
            font-size: 1.2rem;
            color: #fff;
            margin-left: 50px;
        }
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    background: #fff;

    gap: 16px;

    padding: 1rem 2rem;
    border-radius: 7px;

    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.20);

    input {
        font-size: 1.2rem;
        width: 100%;
    }
`

export const Cards = styled.article `
    margin-top: 3rem;
`

export const Card = styled.section`
    background-color: #fff;

    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.20);
    border-radius: 7px;

    padding: 1rem;

    & + section {
        margin-top: 2rem;
    }
    
`

export const Carditem = styled.div`
    display: flex;
    align-items: center;

    gap: 16px;
`

export const Img = styled.div`

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

`

export const CardInfos = styled.div`
    display: flex;
    gap: 16px;

    a {
        font-size: 1.2rem;
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        margin-top: 4px;
    }
   
    span {
        color: var(--username);
        font-weight: 500;
    }
    
`

export const SearchIcon = styled(Search)`
    width: 36px;
    color: var(--blue);
`