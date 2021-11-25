import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    .artistItem{
        padding:20px;
        span{
            cursor:pointer;
            margin-top:10px;
            display:inline-block;
            color:#6899e7;
            :hover{
                text-decoration:underline;
            }
        }
    }
`