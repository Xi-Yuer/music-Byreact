import styled from 'styled-components';
export const StyleWrapper = styled.div`
  position: relative;
  padding: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid red;
  line-height: 30px;
  .className {
    font-size: 24px;
    margin-right: 15px;
  }
  .classControl {
    display: inline-block;
    border: 1px solid #b5b5b5;
    padding: 2px 15px;
    background-color: #f6f6f6;
    color: #0c73c2;
    border-radius: 5px;
    cursor: pointer;
  }
  .wrapper {
    display: ${props => props.isShow};
    background-color: #fff;
    position: absolute;
    z-index: 999;
    border-radius: 5px;
    margin-top: 15px;
    box-shadow: 0 0 10px #999;
    padding: 10px;
    margin-left: -30px;
    width: 650px;
    .header {
      border-bottom: 1px solid #999;
      span {
        display: inline-block;
        border: 1px solid #999;
        margin: 5px 0;
        border-radius: 5px;
        padding: 0 10px;
        line-height: 24px;
        cursor:pointer;
      }
    }
    .main {
      display: flex;
      .left {
        border-right: 1px solid #999;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 20px;
        width: 100px;
        font-size: 15px;
        font-weight: bold;
      }
      .right {
        padding-left: 20px;
        .item {
          margin-top: 10px;
          span {
            margin-right: 10px;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;
