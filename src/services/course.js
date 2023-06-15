const courseList = [
  {
    id: 17,
    money: 6000000,
    long_description:
      'Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.',
    short_description: 'Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.',
    slug: 'cfd4-react-js',
    title: 'CFD4 React JS',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    money: 6000000,
    long_description:
      'Nếu bạn đã có kiến thức cơ bản về lập trình Website Responsive hoặc đã học qua khóa CFD Căn Bản, bạn muốn muốn có nhiều cơ hội để ứng tuyển vào vị trí Front-End Developer thì React JS là thư viện javascript được các công ty yêu cầu nhiều nhất hiện nay. Khóa React JS tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng để đi làm dựa trên thực hành dự án thực tế xuyên suốt khóa học.',
    short_description:
      'Khóa học thực chiến dự án thực tế gồm Javascript nâng cao, ES6, JSON, API và React JS.',
    slug: 'cfd2-react-js',
    title: 'CFD2 React JS',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    money: 4000000,
    long_description:
      'Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ wesbite, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd1-web-responsive',
    title: 'CFD1 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 9,
    money: 4000000,
    long_description:
      'Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd2-web-responsive-2',
    title: 'CFD2 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1576702438167-5341af8f0c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 10,
    money: 4000000,
    long_description:
      'Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd1-can-ban',
    title: 'CFD1 Căn Bản',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1561883088-039e53143d73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 11,
    money: 4000000,
    long_description:
      'Nếu bạn đang theo đuổi nghề Front-End Developer và đã từng học qua HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế, tư duy về animation, cấu trúc thư mục, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd2-web-responsive',
    title: 'CFD2 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1565843714144-d5a3292ae82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 13,
    money: 6000000,
    long_description:
      'Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.',
    short_description: 'Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.',
    slug: 'cfd3-react-js',
    title: 'CFD3 React JS',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 14,
    money: 4000000,
    long_description:
      'Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd3-web-responsive',
    title: 'CFD3 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 15,
    money: 6000000,
    long_description:
      'Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.',
    short_description: 'Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS.',
    slug: 'cfd3-react-js-online',
    title: 'CFD3 React JS',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 16,
    money: 4000000,
    long_description:
      'Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd4-can-ban',
    title: 'CFD4 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 18,
    money: 4000000,
    long_description:
      'Bạn đang là sinh viên, người đi làm hoặc từ ngành khác chuyển qua đang theo đuổi nghề Front-End Developer và đã từng học HTML, CSS, thậm chí là Javascript, nhưng chưa có cơ hội thực chiến dự án thực tế Website Responsive theo bảng thiết kế hoàn chỉnh, tư duy về animation, cấu trúc thư mục dự án, tối ưu tốc độ website, cũng như quy trình phân tích và triển khai dự án thực tế, thì khóa học CFD Căn Bản là sự lựa chọn phù hợp nhất dành cho bạn.',
    short_description:
      'Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery.',
    slug: 'cfd5-can-ban',
    title: 'CFD5 Web Responsive',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 19,
    money: 6000000,
    long_description:
      'Nếu bạn đã có kiến thức cơ bản về lập trình website responsive hoặc đã học qua khóa CFD Căn Bản. Bạn muốn nâng cao kiến thức và có nhiều cơ hội để ứng tuyển hơn vào vị trí Front-End Developer thì React Js chính là thư viện javascript được quan tâm nhất hiện nay. Khóa React Js tại CFD sẽ hướng dẫn bạn có được kiến thức và kỹ năng quan trọng dựa trên thực hành dự án thực tế xuyên suốt khóa học.',
    short_description: 'Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux.',
    slug: 'cfd5-react-js',
    title: 'CFD5 React JS',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRldnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export const courseService = {
  getCourse() {
    return courseList;
  },

  getCourseDetail(id) {
    return courseList.find(courseItem => courseItem.id === id);
  },
};
