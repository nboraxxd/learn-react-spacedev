import React, { useEffect, useRef } from 'react'

export const TeamGallery = () => {
  const sectionRef = useRef()

  useEffect(() => {
    const $this = $(sectionRef.current)

    let $carouselGallery = $this.find('.list'),
      $progressBar = $this.find('.timeline .process')

    $carouselGallery.flickity({
      contain: true,
      wrapAround: false,
      freeScroll: true,
      cellAlign: 'left',
      lazyLoad: 3,
      imagesLoaded: true,
      prevNextButtons: false,
    })
    // var flkty = $carousel.data('flickity');
    // var $imgs = $this.find('.section-4 .list .carousel-cell img');

    // $carousel.on('scroll.flickity', function (event, progress) {
    //     flkty.slides.forEach(function (slide, i) {
    //         var img = $imgs[i];
    //         var x = (slide.target + flkty.x) * -1 / 14;
    //         img.style.transform = 'translateX( ' + x + 'px)';
    //     });
    // });

    $carouselGallery.on('scroll.flickity', function (event, progress) {
      progress = Math.max(0.05, Math.min(1, progress))
      $progressBar.width(progress * 100 + '%')
    })

    let ctrPrevGallery = $this.find('.btn_ctr.prev'),
      ctrNextGallery = $this.find('.btn_ctr.next')

    ctrPrevGallery.on('click', function () {
      $carouselGallery.flickity('previous')
    })
    ctrNextGallery.on('click', function () {
      $carouselGallery.flickity('next')
    })
  }, [])

  return (
    <section className="section-gallery" ref={sectionRef}>
      <div className="textbox">
        <h2 className="main-title">Hình ảnh hoạt động</h2>
      </div>
      <div className="list">
        <div className="item">
          <div>
            <img data-flickity-lazyload="./img/img_team1.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team2.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team3.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team4.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team5.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team6.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team7.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div>
            <img data-flickity-lazyload="./img/img_team8.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team9.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team10.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team11.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team12.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team13.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team14.jpg" alt="" />
          </div>
        </div>
        <div className="item">
          <div>
            <img data-flickity-lazyload="./img/img_team15.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team16.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team17.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team18.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team19.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team20.jpg" alt="" />
          </div>
          <div>
            <img data-flickity-lazyload="./img/img_team21.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="controls">
        <div className="btn_ctr prev" />
        <span>Trượt qua</span>
        <div className="timeline">
          <div className="process" />
        </div>
        <div className="btn_ctr next" />
      </div>
    </section>
  )
}
