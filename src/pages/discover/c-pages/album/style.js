import styled from 'styled-components';

export const StyleWrapper = styled.div``;

export const Content = styled.div`
  background-color: #fff;
  padding: 30px;
  padding-top: 40px;
  .hotAlbum {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    div {
      cursor: pointer;
      flex:1;
    }
  }
  .regin{
    margin-top:30px;
  }
  .Pagination{
    margin-left:25%;
    margin-top:20px;
  }
`;
