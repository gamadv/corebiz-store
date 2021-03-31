import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Container, BannerImagesContainer } from './styles';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import bannerGroup from '../../assets/banner-group.png';
import mobileBanner from '../../assets/mobile-banner.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Slider: React.FC = () => {
  const bannersCount = [0, 1, 2, 3];
  return (
    <Container>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true, bulletElement: 'div' }}
      >
        {bannersCount.map((banner) => (
          <SwiperSlide>
            <BannerImagesContainer>
              <div>
                <h4>Olá, o que você está buscando?</h4>
                <p>
                  <strong>
                    Criar ou migrar seu
                    <br /> e-commerce?
                  </strong>
                </p>
              </div>
              <img className="banner-desktop"src={bannerGroup} alt="store-banner-desktop" />
              <img className="banner-mobile"src={mobileBanner} alt="store-banner-mobile" />
            </BannerImagesContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Slider;
