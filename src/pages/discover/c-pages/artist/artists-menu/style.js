import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    align-items:center;
    .artistItem{
        padding:20px;
        cursor:pointer;
        img{
            border:1px dotted #bebebe;
        }
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
    .Pagination{
        margin:0 auto;
    }
`