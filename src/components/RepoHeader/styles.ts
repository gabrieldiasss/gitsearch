import styled from 'styled-components'

export const Container = styled.header`

    background-color: #fff;
    border-bottom: 1px solid var(--line);

    div {
        height: 80px;

        display: flex;
        align-items: center;

        max-width: 1200px;
        margin: 0 auto;

        gap: 16px;

        a {
            font-size: 1.6rem;
        }

        span {
            background-color: var(--background-repos);
            padding: 8px;
            border-radius: 5px;
        }
    }

`