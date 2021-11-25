import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
    .artistItem{
        padding:20px;
        cursor:pointer;
        span{
            margin-top:10px;
            display:inline-block;
            color:'#4884e4'
        }
    }
`