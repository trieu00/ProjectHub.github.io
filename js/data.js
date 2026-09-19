const TEAM_INFO = {
  name: "DAS",
  fullName: "Nhóm DAS",
  project: {
    vi: "Nền tảng Đăng ký & Quản lý Sự kiện Sinh viên",
    en: "Campus Event Hub",
  },
  course: "TODO: Tên môn học",
  semester: "TODO: Học kỳ",
  lecturer: "TODO: Giảng viên hướng dẫn",
  slogan: "Khám phá, đăng ký và check-in sự kiện mượt mà cùng DAS",
  contactEmail: "TODO: email@example.com",
};
const DAS_MEMBERS = [
  {
    id: "M1",
    name: "Bùi Phan Thành Trí",
    mssv: "24521825",
    avatar: "", // TODO: "img/member-01.jpg"
    khoa: "", // TODO
    role: "Trưởng nhóm",
    bio: "",
  },
  {
    id: "M2",
    name: "Nguyễn Bùi Anh Tuấn",
    mssv: "24521931",
    avatar: "",
    khoa: "",
    role: "Frontend",
    bio: "",
  },
  {
    id: "M3",
    name: "Nguyễn Tuấn Phong",
    mssv: "24521341",
    avatar: "",
    khoa: "",
    role: "Backend",
    bio: "",
  },
  {
    id: "M4",
    name: "Bùi Minh Triết",
    mssv: "24521845",
    avatar: "",
    khoa: "",
    role: "UI/UX",
    bio: "",
  },
  {
    id: "M5",
    name: "Cao Duy Anh",
    mssv: "24520087",
    avatar: "",
    khoa: "",
    role: "Dashboard",
    bio: "",
  },
  {
    id: "M6",
    name: "Nguyễn Quốc Triệu",
    mssv: "24521855",
    avatar: "",
    khoa: "",
    role: "QA & Testing",
    bio: "",
  },
  {
    id: "M7",
    name: "Nguyễn Minh Trí",
    mssv: "24521837",
    avatar: "",
    khoa: "",
    role: "Deploy & Tài liệu",
    bio: "",
  },
];
const USER_STORIES = [
  {
    id: "US1",
    role: "Sinh viên",
    roleKey: "student",
    text: "Tôi muốn tìm kiếm và lọc sự kiện theo chủ đề (Học thuật, Kỹ năng, Văn nghệ) hoặc theo trạng thái vé để nhanh chóng chọn được sự kiện phù hợp với lịch rảnh.",
  },
  {
    id: "US2",
    role: "Sinh viên",
    roleKey: "student",
    text: "Tôi muốn đăng ký sự kiện và nhận ngay mã vé định danh dạng QR Code hiển thị trên màn hình để sử dụng khi đến tham dự sự kiện.",
  },
  {
    id: "US3",
    role: "Sinh viên",
    roleKey: "student",
    text: "Tôi muốn tra cứu lại thông tin vé, trạng thái check-in hoặc thực hiện hủy vé trước giờ G nếu bận đột xuất.",
  },
  {
    id: "US4",
    role: "Ban tổ chức",
    roleKey: "organizer",
    text: "Tôi muốn tạo sự kiện mới kèm giới hạn số lượng người tham gia tối đa (capacity) để hệ thống tự động khóa đăng ký khi đã đủ số lượng, tránh vỡ hội trường.",
  },
  {
    id: "US5",
    role: "Nhân viên check-in",
    roleKey: "staff",
    text: "Tôi muốn sử dụng camera điện thoại quét mã QR trên vé của sinh viên để hệ thống tự động xác minh và cập nhật trạng thái 'Đã tham dự' trong vòng dưới 2 giây.",
  },
  {
    id: "US6",
    role: "Ban tổ chức",
    roleKey: "organizer",
    text: "Tôi muốn xem biểu đồ thống kê tỷ lệ đăng ký so với tỷ lệ check-in thực tế để đánh giá mức độ quan tâm của sinh viên và rút kinh nghiệm cho các sự kiện sau.",
  },
];
const RAM_TASKS = [
  { id: "T1", name: "Thiết kế UI/UX (Figma)" },
  { id: "T2", name: "Frontend - Trang Discovery" },
  { id: "T3", name: "Frontend - Booking & My Ticket" },
  { id: "T4", name: "Frontend - Check-in Scanner" },
  { id: "T5", name: "Backend - API & Auth" },
  { id: "T6", name: "Database - Schema & RLS (Supabase)" },
  { id: "T7", name: "Dashboard & Biểu đồ (Recharts)" },
  { id: "T8", name: "Testing, Deploy & Tài liệu" },
];
const RAM_MATRIX = [
  { memberId: "M1", values: ["", "", "", "", "", "", "", ""] }, // Bùi Phan Thành Trí
  { memberId: "M2", values: ["", "", "", "", "", "", "", ""] }, // Nguyễn Bùi Anh Tuấn
  { memberId: "M3", values: ["", "", "", "", "", "", "", ""] }, // Nguyễn Tuấn Phong
  { memberId: "M4", values: ["", "", "", "", "", "", "", ""] }, // Bùi Minh Triết
  { memberId: "M5", values: ["", "", "", "", "", "", "", ""] }, // Cao Duy Anh
  { memberId: "M6", values: ["", "", "", "", "", "", "", ""] }, // Nguyễn Quốc Triệu
  { memberId: "M7", values: ["", "", "", "", "", "", "", ""] }, // Nguyễn Minh Trí
];
const MILESTONES = [
  {
    id: "M1",
    name: "Setup & Khung dự án",
    week: "TODO",
    desc: "Repo, schema, Auth, deploy khung",
  },
  {
    id: "M2",
    name: "Discovery & Booking",
    week: "TODO",
    desc: "Trang chủ, lọc, chi tiết, đăng ký vé",
  },
  {
    id: "M3",
    name: "My Ticket & Scanner",
    week: "TODO",
    desc: "Sinh QR, hiển thị vé, quét check-in",
  },
  {
    id: "M4",
    name: "Dashboard & Realtime",
    week: "TODO",
    desc: "Biểu đồ, cập nhật realtime",
  },
  {
    id: "M5",
    name: "Testing, Deploy & Báo cáo",
    week: "TODO",
    desc: "15 test case, so sánh AI, deploy chốt",
  },
];
const MILESTONE_STATUS = {
  M1: { status: "not-started", actual: "" }, // "not-started" | "in-progress" | "done"
  M2: { status: "not-started", actual: "" },
  M3: { status: "not-started", actual: "" },
  M4: { status: "not-started", actual: "" },
  M5: { status: "not-started", actual: "" },
};
const SCOPE_IN = [
  "Đăng ký sự kiện với kiểm soát số chỗ (capacity) realtime",
  "Cấp vé điện tử định danh kèm mã QR Code",
  "Quét mã QR check-in trực tiếp trên trình duyệt điện thoại",
  "Dashboard thống kê tỷ lệ đăng ký / check-in",
  "Xác thực người dùng & phân quyền (Sinh viên / BTC / Staff)",
  "Responsive trên mobile & desktop",
];
const SCOPE_OUT = [
  "TODO: VD — Không hỗ trợ thanh toán vé có phí",
  "TODO: VD — Không làm app native iOS/Android",
  "TODO: VD — Không gửi email/SMS tự động",
  "TODO: VD — Không tích hợp ví điện tử",
];
const ARCHITECTURE = [
  {
    layer: "Client",
    color: "accent",
    items: [
      "React.js (Vite)",
      "Tailwind CSS",
      "html5-qrcode",
      "qrcode.react",
      "Recharts",
    ],
  },
  {
    layer: "API",
    color: "accent-2",
    items: ["Node.js", "Express.js", "Supabase Client SDK"],
  },
  {
    layer: "Data",
    color: "success",
    items: [
      "Supabase PostgreSQL",
      "Auth (JWT)",
      "Realtime Subscriptions",
      "Row Level Security",
    ],
  },
  {
    layer: "Deploy",
    color: "warning",
    items: ["Vercel / Netlify (FE)", "Render (BE)", "Supabase Cloud (DB)"],
  },
];
const IMPORTANT_LINKS = {
  github: { label: "GitHub Repository", href: "#", desc: "TODO: Mô tả ngắn" },
  demo: { label: "Live Demo", href: "#", desc: "TODO: Mô tả ngắn" },
};
const CONTRIBUTION_METHOD = [
  { criterion: "Code & Deliverable", weight: "40%" },
  { criterion: "Tham gia họp & đúng giờ", weight: "30%" },
  { criterion: "Review chéo & hỗ trợ nhóm", weight: "30%" },
];
const CONTRIBUTION_SCORES = {
  M1: { code: null, meeting: null, review: null },
  M2: { code: null, meeting: null, review: null },
  M3: { code: null, meeting: null, review: null },
  M4: { code: null, meeting: null, review: null },
  M5: { code: null, meeting: null, review: null },
  M6: { code: null, meeting: null, review: null },
  M7: { code: null, meeting: null, review: null },
};
const TECH_STACK = [
  {
    group: "Frontend",
    items: ["React.js (Vite)", "Tailwind CSS", "Lucide React"],
  },
  { group: "Thư viện", items: ["html5-qrcode", "qrcode.react", "Recharts"] },
  { group: "Backend", items: ["Node.js", "Express.js"] },
  { group: "Database", items: ["Supabase (PostgreSQL)"] },
  { group: "Deploy", items: ["Vercel", "Render", "Supabase Cloud"] },
];
const AI_TASKS = [
  {
    phase: "Thiết kế",
    tool: "v0.dev / Claude Artifacts",
    desc: "Prompt tạo layout Responsive cho Ticket Card và Dashboard.",
  },
  {
    phase: "Lập trình",
    tool: "Cursor / GitHub Copilot",
    desc: "Sinh logic quét camera, truy vấn SQL kiểm tra trùng vé.",
  },
  {
    phase: "Debug",
    tool: "ChatGPT",
    desc: "Khắc phục lỗi cấp quyền Camera trên Safari/Chrome mobile.",
  },
  {
    phase: "Testing",
    tool: "AI sinh test cases",
    desc: "Sinh 15 test case cho luồng Check-in (mã sai, vé dùng 2 lần...).",
  },
];
const AI_COMPARISON = {
  title: "So sánh 2 công cụ AI",
  prompt:
    "Viết component React quét mã QR sử dụng html5-qrcode có xử lý loading và modal thông báo kết quả.",
  tools: ["Cursor", "ChatGPT-4o"],
  criteria: ["Tính tối ưu mã nguồn", "Xử lý lỗi ngoại lệ", "Tính dễ bảo trì"],
  result: "TODO: Điền kết quả so sánh sau khi hoàn thành tác vụ.",
};
const GROUP_AGREEMENT = [
  { title: "Kênh liên lạc chính", content: "TODO: VD — Zalo nhóm + Discord" },
  { title: "Lịch họp định kỳ", content: "TODO: VD — Thứ 3 & Thứ 7, 20:00" },
  {
    title: "Quy trình ra quyết định",
    content: "TODO: VD — Đồng thuận > 50% thì chốt",
  },
  { title: "Xử lý xung đột", content: "TODO" },
  {
    title: "Cam kết deadline",
    content: "TODO: VD — Trễ 2 lần → cảnh cáo nội bộ",
  },
];
const PROJECT_CHARTER = {
  projectName: "Campus Event Hub",
  leader: "TODO: Tên trưởng nhóm",
  objectives: [
    "Cung cấp luồng đăng ký vé: Khám phá → Đăng ký giữ chỗ → Cấp vé QR chống trùng lặp.",
    "Số hóa quy trình soát vé bằng QR trên trình duyệt điện thoại.",
    "Trực quan hóa Dashboard tỷ lệ đăng ký / check-in realtime.",
    "Giao diện responsive, deploy có URL trực tuyến.",
  ],
  scopeSummary: "TODO: Tóm tắt phạm vi trong 1-2 câu.",
  stakeholders: [
    { name: "Sinh viên", role: "Người đăng ký & sử dụng vé" },
    { name: "Ban tổ chức", role: "Tạo sự kiện, xem báo cáo" },
    { name: "Tình nguyện viên soát vé", role: "Check-in tại cổng" },
  ],
  risks: [
    {
      risk: "Đua dữ liệu khi hết vé (oversell)",
      mitigation: "Dùng Postgres function + CHECK constraint",
    },
    {
      risk: "QR bị chia sẻ / chụp màn hình",
      mitigation: "State một-lần-dùng ở server",
    },
    {
      risk: "Camera lỗi trên Safari iOS",
      mitigation: "Có ô nhập mã thủ công dự phòng",
    },
    { risk: "TODO: Rủi ro khác", mitigation: "TODO" },
  ],
};
const UI_SCREENS = [
  {
    id: 1,
    name: "Trang chủ & Khám phá sự kiện",
    desc: "Thanh tìm kiếm, bộ lọc danh mục/trạng thái, Event Cards với thanh tiến trình số vé còn lại.",
  },
  {
    id: 2,
    name: "Chi tiết sự kiện & Đăng ký vé",
    desc: "Thông tin diễn giả, lịch trình, sơ đồ. Form đăng ký: Họ tên, Email, MSSV, Khóa/Khoa.",
  },
  {
    id: 3,
    name: "Vé điện tử của tôi",
    desc: "Ticket Card với QR Code từ UUID, badge trạng thái, nút hủy vé.",
  },
  {
    id: 4,
    name: "Giao diện Soát vé (Scanner)",
    desc: "Camera quét QR + ô nhập mã thủ công + modal 3 màu kết quả.",
  },
  {
    id: 5,
    name: "Bảng điều khiển Quản trị",
    desc: "Form tạo sự kiện, bảng người đăng ký, biểu đồ tỷ lệ lấp đầy & check-in.",
  },
];
window.DAS_DATA = {
  TEAM_INFO,
  DAS_MEMBERS,
  USER_STORIES,
  RAM_TASKS,
  RAM_MATRIX,
  MILESTONES,
  MILESTONE_STATUS,
  SCOPE_IN,
  SCOPE_OUT,
  ARCHITECTURE,
  IMPORTANT_LINKS,
  CONTRIBUTION_METHOD,
  CONTRIBUTION_SCORES,
  TECH_STACK,
  AI_TASKS,
  AI_COMPARISON,
  GROUP_AGREEMENT,
  PROJECT_CHARTER,
  UI_SCREENS,
};
