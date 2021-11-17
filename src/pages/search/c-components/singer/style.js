import styled from 'styled-components';

export const StyleTop = styled.div`
    margin-top: 20px;
    border-bottom: 2px solid red;
    display: flex;
    line-height: 35px;
    justify-content: space-between;
    span b {
      color: red;
    
  }
`;

export const StyleWrapper = styled.div`
margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  div{
    padding-right:20px;
  }
  img {
    width: 130px;
    height: 130px;
    overflow: hidden;
  }
  .item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-right: 10px;
    margin-bottom: 10px;
    .name {
      margin-top: 5px;
      color: #0c73c2;
    }
  }
`;
