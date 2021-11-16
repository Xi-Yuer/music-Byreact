import styled from "styled-components";

export const StyleWrapper = styled.div`
  padding: 10px 20px;
  h2{
      border-bottom:1px solid #999
  }
  .item {
    display: flex;
    height:50px;
    cursor:pointer;
    margin-top:10px;
    .info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      justify-content: center;
      .timer{
          color:#999
      }
    }
  }
`;
