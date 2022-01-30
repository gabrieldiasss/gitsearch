import styled, { css } from 'styled-components'

import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline'
import { Link } from '@styled-icons/boxicons-regular/Link'
import { Place } from '@styled-icons/material-outlined/Place'
import { Business } from '@styled-icons/boxicons-solid/Business'


export const Container = styled.section`
    background-color: #fff;
    
    padding: 3rem 2rem;
    border-radius: 7px;
    box-shadow: 3px 3px 20px rgba(0,0,0, 0.20);
`

export const InfosAccount = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
    }

    strong {
        font-size: 1.6rem;
        font-weight: 500;
        margin-top: 1rem;
    }

    p {
        margin-top: 2rem;
        font-size: 1.2rem;
        max-width: 350px;
        text-align: center;
    }

`

export const PersonalInformation = styled.div`
    max-width: 350px;
    margin: 5rem auto 0;

    > div {
        display: flex;
        align-items: center;
        gap: 16px;

        line-height: 3rem;

        span {
            font-size: 1.2rem;
        }
    }

`

const iconCSS = css`
    width: 28px;
    height: 28px;
    color: var(--blue);
`

export const EmailIcon = styled(EmailOutline)`
    ${iconCSS}
`
export const LinkIcon = styled(Link)`
    ${iconCSS}
`
export const PlaceIcon = styled(Place)`
    ${iconCSS}
`
export const BusinessIcon = styled(Business)`
    ${iconCSS}
`