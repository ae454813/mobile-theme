import { Carousel, Col, Image, Row, Space, Typography } from "antd";
import React from "react";
import BlogCardsComponent from "../blog/blog.component";
import CategoryComponent from "../category/category.component";
import MobileThemeComponent from "../mobile-theme/mobile.theme";
import ProductsComponent from "../productCards section/productCards.component";
import { BhrMobileContainer, CarsoulContainer, ComponentFooter, ComponentHeader } from "./b7r.styles";

const {Text} = Typography;

const headerImages = [
  {
    alt: "menu",
    src: "/static/align-left.svg",
  },
  {
    alt: "logo",
    src: "/static/b7rLogo.svg",
  },
  {
    alt: "bag",
    src: "/static/shopBag.svg",
  },
];

const footerImages = [
  {
    id: 1,
    icon: "/static/home.svg",
    name: "Home"
  },
  {
    id: 2,
    icon: "/static/search.svg",
    name: "Search"
  },
  {
    id: 3,
    icon: "/static/shopping-bag.svg",
    name: "Cart"
  },
  {
    id: 4,
    icon: "/static/heart.svg",
    name: "Wishlist"
  },
  {
    id: 5,
    icon: "/static/user.svg",
    name: "Me"
  }
]

const categoryData = [
  {
    id: 1,
    imagUrl: "/static/category/women.svg",
    title: "women"
  },
  {
    id: 2,
    imagUrl: "/static/category/men.svg",
    title: "men"
  },
  {
    id: 3,
    imagUrl: "/static/category/kids.svg",
    title: "kids"
  },
  {
    id: 4,
    imagUrl: "/static/category/sale.svg",
    title: "sale"
  },
  {
    id: 5,
    imagUrl: "/static/category/sale.svg",
    title: "sale"
  }
];

const cardsData1 = [
  {
    id: 1,
    imgUrl: "/static/category/womanShoes.svg",
    title: "Women's Shoes",
    priceAfter: "299,43",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 2,
    imgUrl: "/static/category/sportShoes.svg",
    title: "Sports Shoes",
    priceAfter: "299,99",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 3,
    imgUrl: "/static/category/womanShoes.svg",
    title: "Women's Shoes",
    priceAfter: "299,43",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 4,
    imgUrl: "/static/category/sportShoes.svg",
    title: "Sports Shoes",
    priceAfter: "299,99",
    priceBefore: "299,43",
    currency: "EGP"
  }
];

const cardsData2 = [
  {
    id: 1,
    imgUrl: "/static/category/sunGlasses.svg",
    title: "Sun Glasses",
    priceAfter: "299,43",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 2,
    imgUrl: "/static/category/nikeShoes.svg",
    title: "Sports Shoes",
    priceAfter: "299,99",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 3,
    imgUrl: "/static/category/sunGlasses.svg",
    title: "Sun Glasses",
    priceAfter: "299,43",
    priceBefore: "299,43",
    currency: "EGP"
  },
  {
    id: 4,
    imgUrl: "/static/category/nikeShoes.svg",
    title: "Sports Shoes",
    priceAfter: "299,99",
    priceBefore: "299,43",
    currency: "EGP"
  }
];

const blogData = [
  {
    id: 1,
    imgUrl: "/static/category/ballon.svg",
    date: "December 9, 2019",
    title: "The greatest tourist places in Egypt",
    aurthor: "by Patricia Kemp"
  },
  {
    id: 2,
    imgUrl: "/static/category/mountain.svg",
    date: "December 9, 2019",
    title: "The greatest tourist places in Egypt",
    aurthor: "by Patricia Kemp"
  },
  {
    id: 3,
    imgUrl: "/static/category/ballon.svg",
    date: "December 9, 2019",
    title: "The greatest tourist places in Egypt",
    aurthor: "by Patricia Kemp"
  },
  {
    id: 4,
    imgUrl: "/static/category/mountain.svg",
    date: "December 9, 2019",
    title: "The greatest tourist places in Egypt",
    aurthor: "by Patricia Kemp"
  }
]

const BhrComponent = () => {
  return (
      <MobileThemeComponent ><ComponentBody /></MobileThemeComponent>
  );
};

export default BhrComponent;

const ComponentBody = () => {
  return (
    <BhrMobileContainer>
      <ComponentHeader>
        <Row justify="space-between" align="middle">
          {headerImages.map((photo) => (
            <Col key={photo.alt} className="header-nav">
              <Image preview={false} src={photo.src} alt={photo.alt} />
            </Col>
          ))}
        </Row>
      </ComponentHeader>
      <Row gutter={[0,24]}>
        <Col>
        <CarsoulContainer>
        <Carousel autoplay>
        <Image preview={false} src="/static/carsoul.svg" alt="man"/>
        <Image preview={false} src="/static/carsoul1.svg" alt="man"/>
        </Carousel>
        </CarsoulContainer>
        </Col>
        <Col><CategoryComponent categoryData={categoryData} shape="square" /></Col>
        <Col><ProductsComponent cardsData={cardsData1} /></Col>
        <Col><ProductsComponent cardsData={cardsData2} /></Col>
        <Col><BlogCardsComponent blogData={blogData} /></Col>
        <Space size={16} direction="vertical" style={{margin: "auto"}} >
        <Col><Image preview={false} src="/static/offer.svg" alt="offer" width={343} /></Col>
        <Col><Image preview={false} src="/static/offer1.svg" alt="offer" width={343} /></Col>
        </Space>
      </Row>
      <ComponentFooter>
        <Row justify="space-between" align="middle">
          {footerImages.map( (target) => (
          <Col key={target.id}> <Space direction="vertical" size={4}>
            <Image preview={false} src={target.icon} alt={target.name}/>
            <Text className="tab-name">{target.name}</Text>
            </Space> 
            </Col>
          ))}
        </Row>
      </ComponentFooter>
    </BhrMobileContainer>
  );
};
