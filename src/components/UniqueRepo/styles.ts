import styled from 'styled-components'

import { StarFill } from '@styled-icons/bootstrap/StarFill'

export const Container = styled.section`
    
    background-color: #fff;
    width: 50%;

    margin: 4rem auto 0;

    box-shadow: 3px 3px 10px rgba(0,0,0, 0.20);

    border-radius: 5px;
`

export const Content = styled.div`

    padding: 2rem 4rem;

    max-width: 1200px;
    margin: 0 auto;
`

export const Header = styled.header`

    border-bottom: 1px solid var(--line);
    
    h1 {
        font-size: 2rem;
        padding-bottom: 1rem;
    }

`

export const Infos = styled.main`
    
    margin-top: 1rem;

    p {
        margin: 1rem 0;
    }

    a {
        margin-top: 1rem;
    }

    .stars {
        margin-top: 1rem;
        display: flex;
        align-items: center;

        gap: 8px;
    }

    .languages {
        margin-top: 1rem;

        div {
            margin-top: 0.6rem;
        }
    }

    .contributors {
        margin-top: 1rem;

        img {
            width: 40px;
            height: 40px;

            margin-top: 0.6rem;
            border-radius: 50%;
        }
    }

`

export const StarIcon = styled(StarFill)`
    width: 20px;
    height: 20px;
    color: #fcd364;
`
