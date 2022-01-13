import { RightOutlined } from "@ant-design/icons/lib/icons";
import { Col, Row } from "antd";
import BlogCardsComponent from "../../blog/blog.component";
import CategoryComponent from "../../category/category.component";
import FooterComponent from "../../footer/footer.component";
import HeaderComponent from "../../header/header.component";
import HeroSliderComponent from "../../hero slider/heroSlider.component";
import CustomCardsComponent from "../../productCards section/productCard custom/customCards.component";
import { PlavitContainer } from "../plavit.styles";

const headerImages = [
    {
      alt: "menu",
      src: "/static/plavit/align-left-plavit.svg",
    },
    {
      alt: "logo",
      src: "/static/plavit/plavit-logo.svg",
    },
    {
      alt: "bag",
      src: "/static/plavit/car-store.svg",
    },
  ];

  const footerImages = [
    {
      id: 1,
      icon: "/static/plavit/HOME.svg",
    },
    {
      id: 2,
      icon: "/static/plavit/search.svg",
    },
    {
      id: 3,
      icon: "/static/plavit/shopping-car.svg",
    },
    {
      id: 4,
      icon: "/static/plavit/heart.svg",
    },
    {
      id: 5,
      icon: "/static/plavit/user.svg",
    },
  ];

  const categoryData = [
    {
      id: 1,
      imagUrl: "/static/plavit/plant1.svg",
      title: "Spathiphyllum"
    },
    {
      id: 2,
      imagUrl: "/static/plavit/plant2.svg",
      title: "Sansevieria"
    },
    {
      id: 3,
      imagUrl: "/static/plavit/plant3.svg",
      title: "Myrtus"
    },
    {
      id: 4,
      imagUrl: "/static/plavit/plant4.svg",
      title: "Cissus"
    },
    {
      id: 5,
      imagUrl: "/static/plavit/plant2.svg",
      title: "Sansevieria"
    }
  ];

  const cardsData = [
    {
      id: 1,
      imgUrl: "/static/plavit/PeperomiaObtusfolia.svg",
      title: "Nike Air Max 270 React E",
      price: "299,43",
      currency: "EGP"
    },
    {
      id: 2,
      imgUrl: "/static/plavit/Layer8.svg",
      title: "Nike Air Max 270 React E",
      price: "299,43",
      currency: "EGP"
    },
    {
      id: 3,
      imgUrl: "/static/plavit/sage.svg",
      title: "Nike Air Max 270 React E",
      price: "299,43",
      currency: "EGP"
    },
  ];

  const heroImage = [
    {
        id: 1,
        src:"/static/plavit/slider1.svg"
    },
    {
        id: 2,
        src:"/static/plavit/slider2.svg"
    },
    
];

const blogData = [
    {
      id: 1,
      imgUrl: "/static/plavit/farming1.svg",
      date: "10 jan 2020",
      title: "Farming Plants",
      arrow: <RightOutlined style={{color: "#3F6B51" ,fontSize: "18px"}} />,
      aurthor: "by: marget roby",
    },
    {
      id: 2,
      imgUrl: "/static/plavit/farming2.svg",
      date: "10 jan 2020",
      title: "Farming Plants",
      arrow: <RightOutlined style={{color: "#3F6B51" ,fontSize: "18px"}} />,
      aurthor: "by: marget roby",
    },
    {
      id: 3,
      imgUrl: "/static/plavit/farming1.svg",
      date: "10 jan 2020",
      title: "Farming Plants",
      arrow: <RightOutlined style={{color: "#3F6B51" ,fontSize: "18px"}} />,
      aurthor: "by: marget roby",
    },
  ];


const ComponentBody = () => {
    // const theme=useTheme()
    // console.log("🚀 ~ file: plavit.component.jsx ~ line 98 ~ ComponentBody ~ theme", theme)
      return (
          <PlavitContainer>
            <HeaderComponent headerImages={headerImages}/>
        <Row gutter={[0,24]}>
          <Col span={24}>
              <HeroSliderComponent heroImage={heroImage}/>
          </Col>
          <Col><CategoryComponent categoryData={categoryData} shape="circle" textColor="#3F6B51" title="Categories" viewAll="View all"/></Col>
          <Col><CustomCardsComponent cardsData={cardsData} project="plavit" textColor="#3F6B51" title="For you" viewAll="View all"/></Col>
          <Col><BlogCardsComponent blogData={blogData} textColor="#3F6B51"/></Col>
          <Col><CustomCardsComponent cardsData={cardsData} project="plavit" textColor="#3F6B51" title="New" viewAll="View all"/></Col>
          <Col style={{padding: 0}}><FooterComponent footerImages={footerImages} textColor="#3F6B51" /></Col>
        </Row>
          </PlavitContainer>
      );
  };
  
export default ComponentBody