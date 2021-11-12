import styled from "styled-components";
export const MusicInfoWrapper = styled.div`
  margin-left: 30px;
  div {
    line-height: 33px;
  }
  .content1 {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    .font-blue {
      color: #0c73c2;
    }
    .font-grey {
      color: #999;
    }
  }
  .title {
    font-size: 23px;
  }
  .control {
    span {
      &:nth-child(1) {
        border:none;
        padding:8px 10px;
      }
      padding: 5px 7px;
      border: 1px solid #999;
      margin-right: 5px;
      border-radius: 5px;
      color: #333;
      font-size: 15px;
    }
  }
`;
