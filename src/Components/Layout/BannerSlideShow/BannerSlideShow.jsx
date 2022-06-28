import React from 'react'
import { Slide, Slideshow, TextoSlide } from '../SlidesShow/Slideshow'

export const BannerSlideShow = ({ banners }) => {
    return (
        <Slideshow controles={true}>
            {
                banners?.map((item, index) => (
                    <Slide key={index}>
                        <a href="">
                            <img src={item.image} alt="" />
                        </a>
                        <TextoSlide>
                            <p>{item.info_banner}</p>
                        </TextoSlide>
                    </Slide>
                ))
            }
        </Slideshow>
    )
}


