import styled, { css } from 'styled-components'

import { Place } from '@styled-icons/material-outlined/Place'
import { Business } from '@styled-icons/boxicons-solid/Business'

export const Container = styled.main`
    margin: 3rem 0;
`

export const Content = styled.div`

    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`

export const FollowingCard = styled.div`
    
`

export const Followingg = styled.div`

    margin-top: 2rem;

    border-top: 1px solid var(--line);
    
    padding: 2rem;

    display: flex;
    align-items: center;

    gap: 32px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .infos {

        a {
            font-size: 1.2rem;
            margin-right: 16px;
        }

        p {
            margin: 4px 0;
        }

        span {
            color: var(--username);
        }

        footer {
            display: flex;
            gap: 16px;

            color: var(--username);
        }

    }

`

const iconCSS = css`
    width: 20px;
    height: 20px;
    color: var(--username);
`

export const CompanyIcon = styled(Business)`
    ${iconCSS}
`

export const PlaceIcon = styled(Place)`
    ${iconCSS}
`

