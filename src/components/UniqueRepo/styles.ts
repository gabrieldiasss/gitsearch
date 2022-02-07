import styled from 'styled-components'

import { StarFill } from '@styled-icons/bootstrap/StarFill'

export const Container = styled.section`
    
    background-color: #fff;
    
    box-shadow: 3px 3px 10px rgba(0,0,0, 0.20);

    border-radius: 5px;

    padding: 2rem 4rem;

    max-width: 800px;
    min-width: 700px;
`

export const Content = styled.div`
    
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

    .contributors {
        margin-top: 1rem;
        word-wrap: break-word;

        span {
            background-color: var(--background-repos);
            padding: 12px;
            margin-left: 12px;
            border-radius: 20px;
        }

        ul {
            display: flex;
            gap: 16px;
            overflow-y: auto;

            ::-webkit-scrollbar {
                height: 10px;
                
            }

            ::-webkit-scrollbar-thumb {
                background: var(--background-repos);
                border-radius: 10px;
            }
        }

        p {
            word-wrap: break-word;
            
        }

        img {
            width: 40px;
            height: 40px;

            margin-top: 0.6rem;
            border-radius: 50%;
            gap: 32px;
        }
    }

`

export const StarIcon = styled(StarFill)`
    width: 20px;
    height: 20px;
    color: #fcd364;
`
