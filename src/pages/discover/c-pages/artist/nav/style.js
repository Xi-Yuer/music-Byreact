import styled from 'styled-components'

export const StyleWrapper = styled.div`
    .cardItem{
        .ant-card-head-title{
            font-weight:bold;
            font-size:15px;
        }
        .areaContent{
            display:flex;
            flex-wrap:wrap;
            flex-direction:column;
            span{
                flex:1;
                margin-top:5px;
                cursor:pointer;
                :hover{
                    text-decoration:underline;
                }
            }
        }
    }
`