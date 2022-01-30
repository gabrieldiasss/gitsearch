import styled from 'styled-components'

export const Header = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`

    display: flex;
    align-items: center;

    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    
    height: 80px;

    img {
        width: 15rem;
        max-width: 100%;
        height: auto;
    }

    ul {
        display: flex;
    }

`