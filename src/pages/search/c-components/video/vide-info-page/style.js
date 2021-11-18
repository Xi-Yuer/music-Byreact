import styled from 'styled-components';

export const RecommendWraper = styled.div``;

export const Content = styled.div`
  background-color: #fff;
  width: 980ppx;
  display: flex;
  padding: 20px;
`;

export const RecommendLeft = styled.div`
  padding: 20px;
  width: 900px;
  margin: 0 auto;
  .title {
    font-size: 24px;
  }
  .userName {
    color: #0c73c2;
    &::after {
      content: '/';
      right: 0;
      bottom: 0;
      top: 0;
    }
    &:last-child {
      ::after {
        content: '';
      }
    }
  }
  video {
    width: 640px;
    height: 360px;
    overflow: hidden;
    padding: 5px;
  }
  .icon {
    font-size: 15px;
    span {
      margin-right: 10px;
    }
  }
`;

export const RecommendRight = styled.div`
  width: 250px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  .describetion {
    padding: 10px;
    text-align: justify;
    color: #333;
  }
`;
