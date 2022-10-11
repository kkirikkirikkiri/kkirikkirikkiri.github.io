import styled from "styled-components";
import BANNER_1 from "../assets/img/banner/banner_w_1.jpg";
import BANNER_2 from "../assets/img/banner/banner_w_2.jpg";
import BANNER_3 from "../assets/img/banner/banner_w_3.jpg";
import IMG_MAINLOGO from "../assets/img/logo-main.png";
import Input from "../component/Input";
import MainCategory from "../component/MainCategory";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const SMain = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 130px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-logo {
    width: 225px;
    margin: 20px auto;
  }
  .banner {
    width: 100%;
    .banner-item {
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      img {
        border-radius: 8px;
        width: 100%;
      }
    }
    .slick-dots {
      bottom: 15px;
      li {
        width: 3px;
        button::before {
          color: #fff;
        }
        &.slick-active {
          button::before {
            color: #fff;
          }
        }
      }
    }
  }
`;

export const Main = () => {
  const settings = {
    dots: true,
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToScroll: 1, //1장씩 넘어가세요
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="container">
      <SMain>
        <img className="main-logo" src={IMG_MAINLOGO} alt="main" />
        <Slider {...settings} className="banner">
          <div className="banner-item">
            <img src={BANNER_1} alt="banner1" />
          </div>
          <div className="banner-item">
            <img src={BANNER_2} alt="banner2" />
          </div>
          <div className="banner-item">
            <img src={BANNER_3} alt="banner3" />
          </div>
        </Slider>
        <Input />
        <MainCategory />
      </SMain>
    </div>
  );
};
