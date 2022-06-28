import { Button } from 'Components/Ui/Button/Button'
import React from 'react'
import { Slide, Slideshow, TextoSlide } from '../SlidesShow/Slideshow'
import './Banner.css'

// export const Banner = ({informaction, image, children}) => {
export const Banner = ({ banners }) => {

    return (
        <div className='banner'>
            <Slideshow controles={false} autoplay={true}>
                {
                    banners?.map((item, index) => (
                        <Slide key={index}>
                            <a href="">
                                <img src={item.image} alt="" />
                            </a>
                            <TextoSlide>
                                <div className="limit_info_banner">
                                    <h1 className='title_info_banner'>{item.title}</h1>
                                    <p className='paragraph_info_banner'>{item.information}</p>
                                </div>
                            </TextoSlide>
                        </Slide>
                    ))
                }
            </Slideshow>
        </div>
    )
}
