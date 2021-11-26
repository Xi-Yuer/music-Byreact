import styled from 'styled-components'
export const StyleWrapper = styled.div`
    width:450px;
    display:flex;
    padding:20px;
    border-bottom:1px solid #cccccc;
    cursor:pointer;
    .info{
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        margin-left:20px;
        .name{
            width:430px;
            overflow:hidden;
            font-size:18px;
            font-weight:bold;
        }
        .creater{
            color:#1478ca;
        }
        .sub{
            color:#999;
        }
    }
`