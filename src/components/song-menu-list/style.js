import styled from 'styled-components';

export const RecommendWraper = styled.div`
`;

export const Content = styled.div`
  background-color: #fff;
  display: flex;
`;

export const RecommendLeft = styled.div`
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
`;
