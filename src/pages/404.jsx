import React from 'react'

const Page404 = () => {
  return (
    <main id="main">
      <div className="notfound">
        <div className="container">
          <section>
            <h2 className="main-title">404</h2>
            <p>Không tìm thấy trang</p>
            <a href="/" className="btn main round">
              Trang chủ
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}

export default Page404
