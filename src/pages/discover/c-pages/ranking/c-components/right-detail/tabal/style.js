import styled from 'styled-components';

export const StyleWraper = styled.div`
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
    }
    .header {
      display: flex;
      justify-content: space-between;
      color: #707070;
      line-height: 40px;
      i {
        cursor: pointer;
      }
      span {
        flex: 1;
      }
      .span1 {
        flex: 0.3;
        padding-left: 30px;
      }
      .span2 {
        flex: 2;
      }
      .span3 {
        flex: 1;
        margin-left: 10px;
      }
      .span4 {
        flex: 2;
      }
      .span5 {
        flex: 3;
      }
      &.musicList {
        :nth-child(2n) {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
