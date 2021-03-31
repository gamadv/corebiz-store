import styled from 'styled-components';

export const Container = styled.div`
  .swiper-pagination-bullet {
    background: #bdbdbd;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #f8475f;
  }
`;

export const BannerImagesContainer = styled.section`
  display: flex;
  cursor: pointer;
  position: relative;

  div {
    position: absolute;
    top: 40%;
    top: 35%;
    left: 17.3%;

    h4 {
      font-weight: 300;
      font-size: 30px;
      color: #ffffff;
      line-height: 30px;
    }
    p {
      color: #ffffff;
      font-size: 45px;
      font-weight: 700;
    }

    img > img {
      display: none;
    }

    @media screen and (max-width: 768px) {
      top: 0%;
      left: 0;
      /* width: 100%; */
      height: 100%;
      padding: 3rem 0 0 1rem;
      background: rgba(0, 0, 0, 0.75);
      h4 {
      line-height: 30px;
    }
      p {
        font-size: 30px;
        line-height: 30px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .banner-desktop {
      display: none;
    }
    .banner-mobile {
      display: block;
    }
  }
`;
