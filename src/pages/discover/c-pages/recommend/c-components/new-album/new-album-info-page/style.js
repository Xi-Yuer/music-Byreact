import styled from "styled-components";

export const RecommendWraper = styled.div``;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
`;

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
  .albumInfo {
    display: flex;
    .albumdescribtion {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .albumName {
        font-size: 20px;
        color: #333;
      }
      .songer {
        color: #0c73c2;
      }
      .greyFontColor {
        & div {
          color: "#666";
        }
      }
    }
  }
  .topInfo {
    .albumeIntroduce {
      position: relative;
      padding-bottom:20px;
      margin-top: 20px;
      .description {
        color: grey;
        white-space: pre-wrap;
        margin-left: 25px;
        line-height: 24px;
        height: ${(props) => (props.describtionLine ? "70px" : "")};
      }
      .more {
        color: #0c73c2;
        position: absolute;
        right:10px;
        cursor:pointer;
      }
    }
  }
  .albumSongs{
    .title{
      margin-top:20px;
      border-bottom:2px solid red;
      display:flex;
      line-height:35px;
      justify-content:space-between;
      span b{
        color:red;
      }
    }
    .header{
      display:flex;
      justify-content:space-between;
      color:#707070;
      line-height:40px;
      i{
        cursor:pointer;
      }
      span{
        flex:1;
      }
      .span1{
        flex:0.3;
        padding-left:30px;
      }
      .span2{
        flex:2;
      }
      .span3{
        flex:1;
        margin-left:10px;
      }
      .span4{
        flex:2;
      }
      .span5{
        flex:3;
      }
      &.musicList{
        :nth-child(2n){
          background-color:#f5f5f5
        }
      }
    }
  }
`;

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;
