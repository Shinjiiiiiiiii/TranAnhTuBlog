import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "1-javascript-intro",
    title: "JavaScript là gì? Vì sao mọi developer đều nên học JS",
    excerpt: "Nếu ví HTML là bộ khung, CSS là lớp sơn, thì JavaScript chính là linh hồn của website. Cùng tìm hiểu xem ngôn ngữ này bá đạo thế nào nhé.",
    date: "2023-10-01",
    readTime: "10 phút",
    tags: ["Basic", "Introduction"],
    category: "Fundamentals",
    blocks: [
      {
        type: "heading",
        content: '1. JavaScript không chỉ là "Script"',
      },
      {
        type: "paragraph",
        content: 'Chào anh em, mình là Cường. Nếu bạn đang bắt đầu hành trình lập trình web, chắc chắn cái tên JavaScript (JS) sẽ ám bạn mỗi ngày. Nhưng đừng lo, nó là "con gà đẻ trứng vàng" đấy. Được tạo ra chỉ trong 10 ngày bởi Brendan Eich vào năm 1995, JS đã đi một chặng đường dài từ một ngôn ngữ script đơn giản thành gã khổng lồ thống trị thế giới web.',
      },
      {
        type: "paragraph",
        content: "Hiện nay, JS có mặt ở mọi nơi: Frontend (React, Vue), Backend (Node.js), Mobile (React Native) và cả AI (TensorFlow.js).",
      },
      {
        type: "heading",
        content: "2. Tại sao nên học JavaScript?",
      },
      {
        type: "list",
        content: [
          "Phổ biến nhất thế giới: Luôn đứng top trên GitHub và StackOverflow.",
          "Dễ bắt đầu: Chỉ cần trình duyệt và một trình soạn thảo văn bản.",
          "Cộng đồng khổng lồ: Tài liệu phong phú, giải đáp thắc mắc nhanh chóng.",
          "Cơ hội việc làm: Mức lương cho JS Developer luôn nằm trong top cao.",
        ],
      },
      {
        type: "code",
        language: "javascript",
        content: `// Thay đổi nội dung web không cần load lại trang
const title = document.querySelector('h1');
title.innerText = 'Hello, Developer!';
title.style.color = 'red';
console.log('Website đã được cập nhật!');`,
      },
      {
        type: "tip",
        content: "JavaScript là ngôn ngữ duy nhất chạy được trực tiếp trên trình duyệt mà không cần cài đặt thêm môi trường phức tạp.",
      }
    ],
  },
  {
    id: "2-variables-datatypes",
    title: "Biến, kiểu dữ liệu và cách JavaScript hoạt động",
    excerpt: "Var, let, const khác gì nhau? Hoisting là cái quái gì? Hiểu rõ những thứ cơ bản này để tránh bug ngớ ngẩn sau này.",
    date: "2023-10-03",
    readTime: "12 phút",
    tags: ["Fundamentals", "Variables"],
    category: "Fundamentals",
    blocks: [
      {
        type: "heading",
        content: "1. Var, Let và Const",
      },
      {
        type: "paragraph",
        content: "Từ ES6, chúng ta nên ưu tiên dùng `const` và `let` thay cho `var` để tránh các vấn đề về scope (phạm vi biến) và hoisting.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// ✅ Ưu tiên const cho hằng số
const PI = 3.14;

// ✅ Dùng let cho biến cần thay đổi giá trị
let count = 1;
count++; 

// ❌ Hạn chế dùng var vì dễ gây lỗi hoisting`,
      },
      {
        type: "heading",
        content: "2. Cách JS lưu trữ dữ liệu",
      },
      {
        type: "paragraph",
        content: "Dữ liệu trong JS được chia làm 2 loại chính: Nguyên thủy (Primitive) và Tham chiếu (Reference). Điều này quyết định cách biến được lưu trữ trong Stack và Heap.",
      },
      {
        type: "paragraph",
        content: "",
      }
    ],
  },
  {
    id: "5-async-promise",
    title: "Asynchronous JS: Promise và Async/Await",
    excerpt: "Xử lý bất đồng bộ không còn là ác mộng nếu bạn hiểu rõ Promise và Async/Await. Tạm biệt Callback Hell!",
    date: "2023-10-12",
    readTime: "14 phút",
    tags: ["Async", "Advanced"],
    category: "Advanced",
    blocks: [
      {
        type: "heading",
        content: "1. Cơ chế Bất đồng bộ",
      },
      {
        type: "paragraph",
        content: "JavaScript là đơn luồng (Single-threaded). Để xử lý các tác vụ tốn thời gian mà không làm treo giao diện, JS sử dụng cơ chế Event Loop.",
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "heading",
        content: "2. Cú pháp Async/Await hiện đại",
      },
      {
        type: "code",
        language: "javascript",
        content: `const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi rồi:", error);
  }
};`,
      }
    ],
  },
  {
    id: "9-roadmap",
    title: "Lộ trình học JavaScript đi làm năm 2024",
    excerpt: "Học xong cơ bản rồi thì làm gì tiếp theo? Đây là tấm bản đồ kho báu dành cho các bạn Newbie.",
    date: "2023-10-25",
    readTime: "10 phút",
    tags: ["Career", "Roadmap"],
    category: "Career",
    blocks: [
      {
        type: "heading",
        content: "Giai đoạn 1: Nền tảng bền vững",
      },
      {
        type: "list",
        content: [
          "Biến, Hàm, Vòng lặp.",
          "Xử lý Mảng & Object (ES6+).",
          "Thao tác DOM & Event.",
          "Asynchronous (Promise, Async/Await).",
        ],
      },
      {
        type: "heading",
        content: "Giai đoạn 2: Framework & Ecosystem",
      },
      {
        type: "paragraph",
        content: "Sau khi nắm chắc JS thuần, hãy chọn một Framework (React được khuyến nghị) và học thêm TypeScript.",
      }
    ],
  },
];
