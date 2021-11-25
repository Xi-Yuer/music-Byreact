import styled from 'styled-components'

export const StyleWrapper = styled.div`
    .cardItem{
        .ant-card-head-title{
            font-weight:bold;
            font-size:15px;
        }
        .areaContent{
            margin-left:15px;
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            span{
                flex:1;
                margin-top:5px;
                cursor:pointer;
                color:#333;
                :hover{
                    text-decoration:underline;
                }
            }
        }
    }
`