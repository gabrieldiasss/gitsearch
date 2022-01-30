import styled from 'styled-components'

export const Container = styled.section`

    background-color: #fff;
    width: 100%;
    border-radius: 7px;

    box-shadow: 3px 3px 20px rgba(0,0,0, 0.20);

    padding: 3rem 4rem;
`

export const Header = styled.header`

    .title {

        display: flex;
        align-items: center;

        h1 {
            font-size: 2.6rem;
        }

        span {
            background-color: var(--background-repos);
            padding: 16px;
            border-radius: 50%;
            margin-left: 16px;
        }

    }

    .inputs {

        margin-top: 1rem;
        display: flex;

        width: 100%;
        flex: 1;

        gap: 1rem;

        select, input {
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

            height: 3rem;
            font-size: 1.2rem;
            padding: 0.6rem 2rem;
        }

        input {
            width: 100%;
        }
        
    }

`

export const Repos = styled.main`

    margin-top: 2rem;

    border-top: 1px solid var(--line);
    padding-top: 1rem;

    a {
        font-size: 1.6rem;
    }

    span {
        background-color: var(--background-repos);
        padding: 8px;
        border-radius: 10px;
        margin-left: 16px;
    }

    p {
        font-size: 1.2rem;
        margin-top: 1rem;
    }

`

export const Language = styled.div`

`