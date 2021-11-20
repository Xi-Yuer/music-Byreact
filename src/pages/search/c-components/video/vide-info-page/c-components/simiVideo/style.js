import styled from 'styled-components';
export const StyleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  .content {
    display: flex;
    padding:10px;
    cursor:pointer;
    .info {
      display: flex;
      margin-left:5px;
      flex-wrap: wrap;
      .decribtion {
        width: 90px;
      }
      .title{
          font-size:14px;
      }
      .name{
          color:#999
      }
    }
  }
`;
