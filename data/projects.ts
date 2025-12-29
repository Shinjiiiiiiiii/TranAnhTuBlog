export interface Project {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  links: {
    label: string;
    url: string;
    type: "github" | "demo" | "drive" | "other";
  }[];
  date: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: "studyqna",
    name: "Studyqna",
    shortDesc: "Hệ thống hỏi đáp học tập trực tuyến",
    fullDesc: `
      <p>Studyqna là một nền tảng trực tuyến được thiết kế để hỗ trợ học sinh và sinh viên trong việc trao đổi kiến thức và giải đáp thắc mắc. Dự án tập trung vào việc xây dựng một cộng đồng học tập tích cực, nơi mọi người có thể đặt câu hỏi và nhận được câu trả lời từ các thành viên khác hoặc các chuyên gia.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng chính:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Đăng ký, đăng nhập thành viên.</li>
        <li>Đặt câu hỏi theo chủ đề/môn học.</li>
        <li>Bình luận và trả lời câu hỏi.</li>
        <li>Hệ thống vote câu trả lời hay nhất.</li>
        <li>Tìm kiếm câu hỏi.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Fullstack Developer</strong> chính của dự án, tôi đảm nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Thiết kế cơ sở dữ liệu và kiến trúc hệ thống.</li>
        <li>Phát triển toàn bộ Frontend (React) và Backend (Node.js).</li>
        <li>Triển khai và tối ưu hóa hiệu năng ứng dụng.</li>
      </ul>`,
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    links: [
      {
        label: "Xem mã nguồn",
        url: "https://github.com/Dex-NCuong/DoAnChuyenNganh",
        type: "github",
      },
    ],
    date: "2025",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "web-doc-truyen",
    name: "Web Đọc Truyện",
    shortDesc: "Nền tảng đọc truyện trực tuyến",
    fullDesc: `
      <p>Website đọc truyện online với giao diện thân thiện, cho phép người dùng đọc và quản lý truyện yêu thích một cách dễ dàng.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Đọc truyện theo chương.</li>
        <li>Tìm kiếm và lọc truyện theo thể loại.</li>
        <li>Đánh dấu truyện yêu thích.</li>
        <li>Quản lý và cập nhật nội dung truyện.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Fullstack Developer</strong>, tôi chịu trách nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Xây dựng giao diện người dùng với HTML/CSS/JavaScript.</li>
        <li>Phát triển Backend với PHP và quản lý database.</li>
        <li>Tối ưu trải nghiệm đọc truyện trên nhiều thiết bị.</li>
      </ul>
    `,
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    links: [
      {
        label: "Xem mã nguồn",
        url: "https://github.com/Dex-NCuong/DoAn",
        type: "github",
      },
    ],
    date: "2025",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
  {
    id: "app-dem-buoc-chan",
    name: "App Đếm Bước Chân",
    shortDesc: "Ứng dụng theo dõi sức khỏe mobile",
    fullDesc: `
      <p>Ứng dụng di động giúp người dùng theo dõi số bước chân hàng ngày, tính toán lượng calo tiêu thụ và quãng đường đã đi. Đây là một công cụ hữu ích để duy trì thói quen vận động và nâng cao sức khỏe.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Đặc điểm:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Sử dụng cảm biến gia tốc để đếm bước.</li>
        <li>Giao diện trực quan, dễ nhìn.</li>
        <li>Lưu lịch sử tập luyện.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là thành viên nhóm <strong>Mobile Developer</strong>, công việc chính bao gồm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Nghiên cứu và xử lý dữ liệu từ cảm biến gia tốc.</li>
        <li>Thiết kế UI/UX cho ứng dụng mobile.</li>
        <li>Tối ưu hiệu năng và tiết kiệm pin.</li>
      </ul>
    `,
    techStack: ["React Native", "JavaScript"],
    links: [
      {
        label: "Xem demo",
        url: "https://drive.google.com/file/d/1cCrJnkYfVGhMKRGdgDQgYnYGxwJJWEYu/view?usp=drive_link",
        type: "drive",
      },
    ],
    date: "2025",
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    id: "zombie-game",
    name: "Zombie Survival Game",
    shortDesc: "Game sinh tồn với Unreal Engine 5",
    fullDesc: `
      <p>Zombie Survival Game là một dự án game hành động sinh tồn được phát triển trên nền tảng Unreal Engine 5. Người chơi sẽ phải đối mặt với làn sóng zombie không ngừng nghỉ, sử dụng vũ khí và chiến thuật để tồn tại.</p>
      <h3 class="text-xl font-bold mt-4 mb-2">Tính năng chính:</h3>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Hệ thống chiến đấu với nhiều loại vũ khí.</li>
        <li>AI zombie thông minh với hành vi đa dạng.</li>
        <li>Đồ họa 3D chất lượng cao với Unreal Engine 5.</li>
        <li>Hệ thống sóng zombie ngày càng khó hơn.</li>
        <li>Môi trường tương tác phong phú.</li>
      </ul>
      <h3 class="text-xl font-bold mt-4 mb-2">Vai trò & Đóng góp:</h3>
      <p>Là <strong>Game Developer</strong>, tôi đảm nhiệm:</p>
      <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Lập trình gameplay mechanics với C++ và Blueprint.</li>
        <li>Thiết kế và triển khai AI cho zombie.</li>
        <li>Tối ưu hóa hiệu năng game.</li>
        <li>Tích hợp assets và xây dựng môi trường game.</li>
      </ul>
    `,
    techStack: ["Unreal Engine 5", "C++", "Blueprint"],
    links: [
      {
        label: "Tải game về xem",
        url: "https://drive.google.com/file/d/12FVUm-W_aopfsU5oc8w47ve9Z_MBz_Ht/view",
        type: "drive",
      },
    ],
    date: "2025",
    color: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  },
];
