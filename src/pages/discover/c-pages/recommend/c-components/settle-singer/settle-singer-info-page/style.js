import styled from "styled-components";

export const RecommendWraper = styled.div``;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
`;

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 729px;
  .topContent {
    display: flex;
    .name {
      font-weight: bold;
      font-size: 20px;
    }
    .singerInfo {
      position: relative;
      margin-left: 20px;
      .describetion{
        height: ${props=>props.showMore?'130px':''};
      overflow: hidden;
      }
      .introductionItem {
        margin-top: 20px;
        text-align: justify;
        line-height: 24px;
      }
      .spreadMore{
        position: absolute;
        right:0;
        color: #0c73c2;
        cursor:pointer;
      }
    }
  }
`;

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;
