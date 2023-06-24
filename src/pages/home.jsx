import React, { useEffect, useState } from 'react'
import { CourseCard, CourseCardLoading } from '../components/CourseCard'
import { HeroSlider } from '../components/HeroSlider'
import { Modal } from '../components/Modal'
import { Skeleton } from '../components/Skeleton'
import { TeamGallery } from '../components/TeamGallery'
import { Testimonial } from '../components/Testimonial'
import { VideoModal } from '../components/VideoModal'
import { useFetch } from '../hooks/useFetch'
import { useScrollTop } from '../hooks/useScrollTop'
import { courseService } from '../services/course.service'

export const HomePage = () => {
  const [isOpenVideoModal, setIsOpenVideoModal] = useState(false)

  useScrollTop()
  const { data: courses, loading } = useFetch(() => courseService.getCourse('?limit=6'))

  return (
    <>
      <main id="main">
        <div className="homepage">
          <HeroSlider />

          <section className="section-1">
            <div className="container">
              <h2 className="main-title">KHOÁ HỌC SPACEDEV</h2>
              <p className="top-des">
                Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp, phát triển hoạt động kinh doanh hay
                chỉ đơn giản là muốn khám phá thế giới, hãy chọn lộ trình học tập mà bạn muốn và bắt
                đầu câu chuyện thành công của bạn.
              </p>
              <div className="textbox" style={{ marginTop: '100px' }}>
                <h3 className="sub-title">KHOÁ HỌC</h3>
                <h2 className="main-title">OFFLINE</h2>
              </div>
              <div className="list row">
                {loading
                  ? Array.from(Array(6)).map((_, i) => <CourseCardLoading key={i} />)
                  : courses.data.map((item) => <CourseCard key={item.id} {...item} />)}
              </div>
              <div className="flex justify-center">
                <a href="./course-list.html" className="btn main">
                  Tất cả khoá học
                </a>
              </div>
            </div>
          </section>

          <section className="section-different">
            <div className="container">
              <div className="row">
                <div className="titlebox col-md-6 col-sm-12 col-xs-12">
                  <h2 className="main-title white textleft">
                    <span>Giá trị Cốt lỗi</span> <br /> tại Spacedev
                  </h2>
                  <div
                    className="videodif"
                    // data-src="video/cfd-video-intro.mp4"
                    onClick={() => setIsOpenVideoModal(true)}
                  >
                    <img
                      src="https://svtech.com.vn/wp-content/uploads/2020/07/dexus-office-space.jpg"
                      alt=""
                    />
                    <div className="play-btn btn-video-intro">
                      <img src="img/play-icon.svg" alt="" />
                    </div>
                  </div>
                  <Modal
                    maskCloseTable
                    visible={isOpenVideoModal}
                    onClose={() => setIsOpenVideoModal(false)}
                  >
                    <iframe
                      width="840"
                      height="472.5"
                      src="https://www.youtube.com/embed/FN7ALfpGxiI"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </Modal>
                </div>
                <div className="contentbox col-md-6 col-sm-12 col-xs-12">
                  <div className="item">
                    <h4>Tập trung vào khách hàng</h4>
                    <p>
                      Spacedev được tạo ra với mục tiêu cao nhất giúp cho việc học trở nên dễ dàng
                      hơn và kiến thức thật sự ý nghĩa. Những học viên là đối tượng phục vụ của
                      spacedev vì thế những yêu cầu chính đáng của học viên sẽ được nền tảng tiếp
                      thu và cải thiện.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Gây dựng lòng tin</h4>
                    <p>
                      Spacedev luôn trung thực với những gì mình phát ngôn cũng như công bố trên các
                      nền tảng mạng xã hội. Trung thực và giữ chữ tín với học viên, với đối tác và
                      với những người sáng lập luôn là tiêu chí hàng đầu giúp nền tảng phát triển
                      bền vững ở hiện tại và trong tương lai.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Phát triển nhưng không dừng lại</h4>
                    <p>
                      Bằng việc áp dụng những công nghệ trên nền tảng và sự hoàn thiện về chức năng
                      là mình chứng rõ nhất cho sự chuyên nghiệp cũng như sự tận tâm của những người
                      sáng lập nền tảng spacedev.vn.
                    </p>
                  </div>
                  <div className="item">
                    <h4>Sáng tạo và đơn giản</h4>
                    <p>
                      Spacedev đề cao những sáng tạo đơn giản thay đổi thế giới, gia tăng năng suất
                      và cải thiện cuộc sống.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Testimonial />

          <TeamGallery />

          <section className="section-action">
            <div className="container">
              <h3>Học thử trước khi đăng ký KHOÁ học tại Spacedev?</h3>
              <div className="btn main round bg-white">Học thử</div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
