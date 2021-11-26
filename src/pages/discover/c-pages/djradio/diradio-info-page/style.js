import styled from 'styled-components';

export const RecommendWraper = styled.div``;

export const Content = styled.div`
  background-color: #fff;
  /* display: flex; */
  padding: 20px;
  width: 729px;
  .navInfo {
    display: flex;
    width:100%;
    padding:20px;
    border-bottom:1px solid #eee;
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      margin-left: 20px;
      .progreamName {
        font-size: 15px;
        font-weight: bold;
        margin-top:-20px;
        .category{
            color:red;
            display:inline-block;
            padding:1px 5px;
            border:1px solid red;
            font-size:12px;
            font-weight:normal;
        }
      }
      .name{
          color:#999;
          font-size:13px;
          margin-left:10px;
      }
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
        flex: 0.5;
        padding-left: 30px;
      }
      .span2 {
        flex: 5;
      }
      .span3 {
        flex: 1;
        margin-left: 10px;
      }
      .span4 {
        flex: 1;
      }
      .span5 {
        flex: 1;
      }
      &.musicList {
        :nth-child(2n) {
          background-color: #f5f5f5;
        }
      }
    }
`;
