import React from 'react'
import Swiper from 'swiper'
import styles from './index.module.scss'

class SwiperDemo extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
    
  }
  componentDidMount() {
    const dom = this.container.current
    window.d = this.container.current
    console.log(dom)
    const cgalleryThumbs = dom.getElementsByClassName('.gallery-thumbs')
    const cgalleryTop = dom.getElementsByClassName('.gallery-top')
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      loopedSlides: 5, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
  }
  render() {
    return (
      <div ref={this.container}>
        Swiper
        <div className={`gallery-top ${styles['swiper-container']} ${styles['gallery-top']}`}>
          <div className={styles['swiper-wrapper']}>
            <div className={styles["swiper-slide"]} style={{backgroundImage:'url(http://lorempixel.com/1200/1200/nature/1/)'}}></div>
            <div className={styles["swiper-slide"]} style={{backgroundImage:'url(http://lorempixel.com/1200/1200/nature/2/)'}}></div>
          </div>
          {/* <!-- Add Arrows --> */}
          <div className={`${styles['swiper-button-next']} ${styles['swiper-button-white']}`}></div>
          <div className={`${styles['swiper-button-prev']} ${styles['swiper-button-white']}`}></div>
        </div>
        <div className={`gallery-thumbs ${styles['swiper-container']} ${styles['gallery-thumbs']}`}>
          <div className={styles['swiper-wrapper']}>
            <div className={styles['swiper-slide']} style={{backgroundImage:'url(http://lorempixel.com/1200/1200/nature/1/)'}}></div>
            <div className={styles['swiper-slide']} style={{backgroundImage:'url(http://lorempixel.com/1200/1200/nature/2/)'}}></div>
          </div>
        </div>
      </div>
    )
  }
}
export default SwiperDemo