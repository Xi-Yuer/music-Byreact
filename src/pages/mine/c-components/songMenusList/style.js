import styled from "styled-components";

export const PlayerWrapper = styled.div`
  .content {
    background: url("https://s2.music.126.net/style/web2/img/frame/wrap4.png?46529b82349be49d4ead0b3c678a3e98")
      repeat-y;
    background-color: #fff;
    display: flex;
  }
`;

export const PlayerLeft = styled.div`
  width: 710px;
  padding: 20px 40px 40px 30px;
  .albumInfo {
    display: flex;
    .albumInfoRight {
      padding: 0 30px;
      .albuName {
        font-size: 20px;
        line-height: 24px;
        color: #333;
        margin-bottom: 20px;
      }
      .tags {
        border: 1px solid #d3d3d3;
        background-color: #f5f5f5;
        border-radius: 20px;
        margin-right: 10px;
        padding: 3px 15px;
      }
      .description{
        color: #666;
        margin-top:15px;
      }
    }
    .artarInfo {
      padding: 0 0 20px 0;
      .nickName {
        color: #0c73c2;
        padding: 0 15px;
      }
      .createTime {
        color: #999;
      }
    }
  }
  .albumSongs{
    .title{
      margin-top:20px;
      border-bottom:2px solid red;
      display:flex;
      line-height:35px;
      justify-content:space-between;
      span b{
        color:red;
      }
    }
    .header{
      display:flex;
      justify-content:space-between;
      color:#707070;
      line-height:40px;
      i{
        cursor:pointer;
      }
      span{
        flex:1;
      }
      .span1{
        flex:0.5;
        padding-left:30px;
      }
      .span2{
        flex:3;
      }
      .span3{
        flex:1;
        margin-left:10px;
      }
      .span4{
        flex:2;
      }
      .span5{
        flex:3;
      }
      &.musicList{
        :nth-child(2n){
          background-color:#f5f5f5
        }
      }
    }
    .Pagination{
      display:flex;
      justify-content:center;
      margin-top:20px;
    }
  }
`;

export const PlayerRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
  .leftItem{
    margin-bottom:20px;
  }
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
`;
