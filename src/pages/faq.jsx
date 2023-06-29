import React, { useState } from 'react'
import { Accordion2, Accordion } from '../components/Accordion'

const FAQ = () => {
  // const [activeAccordionInfo, setActiveAccordionInfo] = useState(-1)
  // const [activeAccordionRegister, setActiveAccordionRegister] = useState(-1)

  // const onClickAccordionInfo = (activeAccordion, i) => {
  //   if (activeAccordion === i) {
  //     return setActiveAccordionInfo(-1)
  //   }
  //   return setActiveAccordionInfo(i)
  // }

  // const onClickAccordionRegister = (activeAccordion, i) => {
  //   if (activeAccordion === i) {
  //     return setActiveAccordionRegister(-1)
  //   }
  //   return setActiveAccordionRegister(i)
  // }

  return (
    <main id="main">
      <div className="faqpage">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Thông tin chung</h3>
                <Accordion.Group>
                  <Accordion
                    title="Spacedev là gì?"
                    // active={activeAccordionInfo === 0}
                    // onClick={() => onClickAccordionInfo(activeAccordionInfo, 0)}
                  >
                    I'd like to demonstrate a powerful little pattern called “Server-Fetched
                    Partials” that offers some tangible benefits over alternatives like VueJS for
                    simple page interactions.
                  </Accordion>

                  <Accordion
                    title="Thành viên sáng lập Spacedev gồm những ai?"
                    // active={activeAccordionInfo === 1}
                    // onClick={() => onClickAccordionInfo(activeAccordionInfo, 1)}
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas excepturi
                    neque id exercitationem placeat quia facere eum, maiores eligendi sequi enim qui
                    rem, itaque delectus similique minima laudantium? Molestias, deserunt?
                  </Accordion>

                  <Accordion
                    title="Đăng ký khóa học như thế nào?"
                    // active={activeAccordionInfo === 2}
                    // onClick={() => onClickAccordionInfo(activeAccordionInfo, 2)}
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aut ad culpa
                    quis quisquam veritatis saepe doloremque? Perferendis, praesentium. Excepturi
                    molestiae id eaque officiis totam.
                  </Accordion>
                </Accordion.Group>
              </div>

              <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">Đăng ký, thanh toán và điểm thưởng</h3>
                <Accordion.Group>
                  <Accordion
                    title="Lorem ipsum dolor sit amet consectetur adipisicing"
                    // active={activeAccordionRegister === 0}
                    // onClick={() => onClickAccordionRegister(activeAccordionRegister, 0)}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in vel
                    maxime tenetur quam velit alias fugiat nobis dolorum temporibus numquam impedit,
                    consequuntur aspernatur repudiandae inventore quia!
                  </Accordion>

                  <Accordion
                    title=" Voluptatem in vel maxime tenetur quam velit"
                    // active={activeAccordionRegister === 1}
                    // onClick={() => onClickAccordionRegister(activeAccordionRegister, 1)}
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex rerum eos commodi
                    quod maiores laborum sapiente vel at a. Quos magni molestias tenetur molestiae
                    laboriosam.
                  </Accordion>

                  <Accordion
                    title="Quos magni molestias tenetur molestiae laboriosam"
                    // active={activeAccordionRegister === 2}
                    // onClick={() => onClickAccordionRegister(activeAccordionRegister, 2)}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum optio
                    nesciunt debitis omnis laborum iusto inventore, fugiat cumque dolor animi, eos
                    labore quas necessitatibus. Eum libero hic consequatur nobis enim.
                  </Accordion>
                </Accordion.Group>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default FAQ
