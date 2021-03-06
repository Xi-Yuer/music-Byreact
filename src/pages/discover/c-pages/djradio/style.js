import styled from 'styled-components';

export const StyleWrapper = styled.div`
  position: relative;
  background-color: white;
  .carouselItem {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: center;
    .radioItem {
      padding: 10px;
      margin: 20px 25px;
      cursor: pointer;
    }
  }
  .ant-carousel .slick-prev,
  .ant-carousel .slick-next,
  .ant-carousel .slick-prev:hover,
  .ant-carousel .slick-next:hover {
    font-size: inherit;
    color: #414141;
  }
  .djContent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .Empty {
    margin: 0 auto;
  }
  .LeftOutlined {
    position: absolute;
    left:-25px;
    top:13%;
    font-size:18px;
    cursor:pointer;
  }
  .RightOutlined {
    position: absolute;
    right:-25px;
    top:13%;
    font-size:18px;
    cursor:pointer;
  }
`;
