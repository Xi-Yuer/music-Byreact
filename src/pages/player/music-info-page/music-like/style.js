import styled from "styled-components";
export const StyledWrapper = styled.div`
.wrap{
    display: flex;
    justify-content: space-between;
    align-content: center;
    .musicInfo {
    height: 50px;
    width:156;
    .name{
        color: #333;
    }
    .artists{
        color: #999;
    }
  }
  .control{
    cursor:pointer;
  }
}
.simiLikeLine{
    border-bottom:1px solid #999;
    padding:5px 0 5px 0;
    margin-bottom:20px;
    font-weight:bold;
}
`;
