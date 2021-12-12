import styled from 'styled-components';

export const UnLogin = styled.div`
  background-color: #fff;
  height: 500px;
  .mine {
    margin-bottom: 200px;
    height: 350px;
    overflow: hidden;
    img{
      margin-top:80px;
    }
  }
`;
export const CardStyle = styled.div``;
export const RankingWrapper = styled.div`
  display: flex;
`;

export const RankingLeft = styled.div`
  width: 240px;
  padding: 20px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  background-color: #fafafa;
  .navBar {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }
  .ant-collapse-item {
    border: none;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 10px 0;
  }
  .songMenuItem {
    padding: 5px 0;
    cursor: pointer;
    display: flex;
    .songMenuInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 5px;
      .trackCount {
        color: #999;
      }
      .songName {
        width: 120px;
      }
    }
  }
`;

export const RankingRight = styled.div`
  width: 740px;
  border-right: 1px solid #d3d3d3;
  background-color: #fafafa;
`;
