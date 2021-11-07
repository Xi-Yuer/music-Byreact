import styled from 'styled-components';

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage + '?imageView&blur=40x20'}) center/6000px;
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  width: 254px;
  height: 270px;
  background: url('https://s2.music.126.net/style/web2/img/index/download.png?b52b30aaa009f9f25360b6784205979d');
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 35%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url('https://s2.music.126.net/style/web2/img/index/banner.png?2629007435f39b2467ae488654a8b3ec');
    background-color: transparent;
    cursor: pointer;
    &:hover {
      background-color: #00000018;
    }
  }
  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`