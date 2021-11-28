import styled from "styled-components";
export const StyleWrapper = styled.div`
  .albumSongs {
    .title {
      margin-top: 20px;
      border-bottom: 2px solid red;
      display: flex;
      line-height: 35px;
      justify-content: space-between;
      span b {
        color: red;
      }
      .searchKeywords{
    color:red;
  }
    }
    .header {
      display: flex;
      justify-content: space-between;
      color: #707070;
      line-height: 80px;
      cursor:pointer;
      i {
        cursor: pointer;
      }
      span {
        flex: 1;
        padding:0 10px;
      }
      .span1 {
        flex: 0.3;
      }
      .span2 {
        flex: 3;
      }
      .span3 {
        flex: 2;
      }
      .span4 {
        flex: 1;
      }
      .span5 {
        flex: 4;
      }
      .span6 {
        flex: 1;
      }
      &.musicList {
        :nth-child(2n) {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
