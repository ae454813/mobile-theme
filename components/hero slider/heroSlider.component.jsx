import { Carousel, Image } from 'antd'
import React from 'react'
import { CarsoulContainer } from './heroSlider.styles'

const HeroSliderComponent = ({ heroImage, mode }) => {
    return (
        <CarsoulContainer mode={mode}>
            {
                mode == "passive" ? 

            (<Carousel dots={false}>
                {
                    heroImage.map( (item)=> <Image key={item.id} preview={false} src={item.src} alt="man" /> )
                }
            </Carousel>)
                :
                (<Carousel dotsClass="slick-dots">
              {
                    heroImage.map( (item)=> <Image key={item.id} preview={false} src={item.src} alt="man" /> )
                }
            </Carousel>)

            }
          </CarsoulContainer>
    )
}

export default HeroSliderComponent
