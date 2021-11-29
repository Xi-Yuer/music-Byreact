import styled from 'styled-components';
export const MusicCommen = styled.div`
  padding: 20px;
  .line {
    border-bottom: 1px solid #999;
    padding: 5px 0;
  }
  .content1 {
    align-items: center;
    border-bottom: 1px solid #eee;
    display: flex;
    padding: 30px 0;
    .userImg {
      margin-right: 15px;
    }
    .userName {
      color: #0c73c2;
    }
    .commenInfo {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 20px;
      .time {
        color: #999;
      }
      .like {
        color: #0c73c2;
        font-size: 14px;
      }
    }
  }
  .userCommen {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;
export const StyleWrapper = styled.div`
  .description {
    margin-top: 150px;
  }
`;
