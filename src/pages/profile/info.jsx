import React from 'react'

export const MyInfo = () => {
  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder="Nguyễn Văn A" />
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input defaultValue="dangthuyenvuong@gmail.com" disabled type="text" />
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" />
      </label>
      <label>
        <p />
        <div className="checkcontainer">
          Thay đổi mật khẩu
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </div>
      </label>
      <label>
        <p>
          Mật khẩu cũ<span>*</span>
        </p>
        <input type="password" placeholder="Mật khẩu cũ" />
      </label>
      <label>
        <p>
          Mật khẩu mới<span>*</span>
        </p>
        <input type="password" placeholder="Mật khẩu mới" />
      </label>
      <label>
        <p>
          Xác nhận<span>*</span>
        </p>
        <input type="password" placeholder="Xác nhận mật khẩu" />
      </label>
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  )
}
