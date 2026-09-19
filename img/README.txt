# Hướng dẫn thay thế hình ảnh (Project Hub - DAS)

Để dự án được hoàn thiện với nội dung thật, vui lòng thay thế các ảnh placeholder tại thư mục này hoặc sửa lại link trong source code.

## 1. Ảnh Parallax Hero (index.html)
Tìm thẻ <img> trong section class="hero":
- Layer 1 (Nền chậm): Thay `src` tại `class="parallax-layer layer-bg"`
- Layer 2 (Giữa): Thay `src` tại `class="parallax-layer layer-mid"`
- Layer 3 (Tiền cảnh): Thay `src` tại `class="parallax-layer layer-front"`

*Lưu ý: Ảnh nên có độ phân giải cao (vd: 1920x1080) và tối ưu dung lượng web để đảm bảo hiệu suất Parallax rAF.*

## 2. Ảnh Thành viên nhóm (js/data.js)
Trong file `js/data.js`, biến `DAS_MEMBERS`:
- Thay thế thuộc tính `avatar` của mỗi thành viên bằng đường dẫn tới ảnh thật (ví dụ: `img/member1.jpg`).
- Ảnh nên được cắt tỷ lệ 1:1 (vuông), kích thước khoảng 200x200px đến 400x400px.

Nếu tải file ảnh về thư mục này, hãy đổi đường dẫn trong file tương ứng thành `img/tên_file_ảnh.jpg`.
