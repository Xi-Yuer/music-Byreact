import styled from "styled-components";
export const StyleWrapper = styled.div`
padding:20px;
.header{
    border-bottom:1px solid #333;
    padding:5px 0;
  }
  .subscribersUserImg{
    display:flex;
    width: 200px;
    margin-top:10px;
    flex-wrap: wrap;
    img{
      padding:5px 5px;
    }
  }
  .simiAlbumContent{
    cursor:pointer;
    display:flex;
    margin-top:20px;
    .simiAlbumRight{
      margin-left:15px;
      .simiAlbumName{
      font-size:14px;
      width:150px;
    }
    .simiAlbumNickName{
      font-size:12px;
      width:130px;
      margin-top:5px;
      color:#666
    }
    }
  }
`
