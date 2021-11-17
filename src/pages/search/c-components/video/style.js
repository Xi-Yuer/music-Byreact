import styled from 'styled-components';
export const StyleTop = styled.div`
margin-top:20px;
  margin-bottom: 20px;
  border-bottom: 2px solid red;
  display: flex;
  line-height: 35px;
  justify-content: space-between;
  span b {
    color: red;
  }
`;
export const StyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  .item {
    position: relative;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    flex: 1;
    padding-right: 12px;
    margin-bottom: 35px;
    line-height: 25px;
    .playCount {
      position: absolute;
      width: 89%;
      height: 20px;
      background-color: #00000054;
      z-index: 10;
      .playCountIcon {
        float: right;
        color: #ededed;
        line-height: 20px;
        margin-right: 7px;
      }
    }
    .title {
      :hover {
        text-decoration: underline;
      }
      height: 25px;
      width: 160px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .name {
      :hover {
        text-decoration: underline;
      }
      color: #0c73c2;
    }
  }
`;
