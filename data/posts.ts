import { BlogPost } from "../types";

export const blogPosts: BlogPost[] = [
  {
    id: "1-javascript-intro",
    title: "JavaScript là gì? Vì sao mọi developer đều nên học JS",
    excerpt:
      "Nếu ví HTML là bộ khung, CSS là lớp sơn, thì JavaScript chính là linh hồn của website. Cùng tìm hiểu xem ngôn ngữ này bá đạo thế nào nhé.",
    date: "2025-12-01",
    readTime: "10 phút",
    tags: ["Basic", "Introduction"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: '1. JavaScript không chỉ là "Script"',
      },
      {
        type: "paragraph",
        content:
          'Chào anh em, mình là Cường. Nếu bạn đang bắt đầu hành trình lập trình web, chắc chắn cái tên JavaScript (JS) sẽ ám bạn mỗi ngày. Nhưng đừng lo, nó là "con gà đẻ trứng vàng" đấy. Được tạo ra chỉ trong 10 ngày bởi Brendan Eich vào năm 1995, JS đã đi một chặng đường dài từ một ngôn ngữ script đơn giản để validate form thành một gã khổng lồ thống trị thế giới web.',
      },
      {
        type: "paragraph",
        content:
          "JavaScript ban đầu được tạo ra chỉ để làm màu mè cho website (kiểu click vào nút thì hiện thông báo). Nhưng giờ đây, JS làm được mọi thứ: từ Frontend (React, Vue, Angular), Backend (Node.js, Deno, Bun), Mobile App (React Native, Ionic) và thậm chí là AI (TensorFlow.js).",
      },
      {
        type: "heading",
        content: "2. Tại sao nên học JavaScript?",
      },
      {
        type: "list",
        content: [
          "Phổ biến nhất thế giới: Luôn đứng top 1 trên GitHub và StackOverflow.",
          "Dễ bắt đầu: Chỉ cần trình duyệt (Chrome, Edge) và Notepad là code được ngay.",
          "Cộng đồng khổng lồ: Gặp lỗi gì copy paste lên Google là có cách fix.",
          "Lương cao: Developer JS (đặc biệt là React/Node) luôn được săn đón với mức lương hấp dẫn.",
        ],
      },
      {
        type: "heading",
        content: "3. Ví dụ đơn giản nhất",
      },
      {
        type: "paragraph",
        content:
          "Để bạn hình dung sức mạnh của nó, hãy xem đoạn code dưới đây. Nó tìm thẻ h1 và đổi nội dung của nó ngay lập tức mà không cần tải lại trang.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Thay đổi nội dung web không cần load lại trang
const title = document.querySelector('h1');
title.innerText = 'Hello, Developer!';
title.style.color = 'red'; // Thêm chút màu mè
console.log('Website đã được cập nhật!');`,
      },
      {
        type: "tip",
        content:
          "Tip: JavaScript là ngôn ngữ duy nhất chạy được trực tiếp trên trình duyệt. Nếu muốn làm Web Developer, bạn KHÔNG THỂ bỏ qua nó.",
      },
      {
        type: "heading",
        content: "4. ECMAScript là gì?",
      },
      {
        type: "paragraph",
        content:
          "Bạn sẽ hay nghe nói đến ES5, ES6, ES2022. Đó là các phiên bản chuẩn hóa của JS. ES6 (2015) là cuộc cách mạng lớn nhất, mang lại những tính năng hiện đại mà chúng ta dùng hàng ngày. Đừng lo, chúng ta sẽ học kỹ nó ở bài sau.",
      },
    ],
  },
  {
    id: "2-variables-datatypes",
    title: "Biến, kiểu dữ liệu và cách JavaScript hoạt động phía sau",
    excerpt:
      "Var, let, const khác gì nhau? Hoisting là cái quái gì? Hiểu rõ những thứ cơ bản này để tránh bug ngớ ngẩn sau này.",
    date: "2025-12-03",
    readTime: "12 phút",
    tags: ["Fundamentals", "Variables"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. Var, Let và Const: Cuộc chiến vương quyền",
      },
      {
        type: "paragraph",
        content:
          "Ngày xưa chúng ta chỉ có `var`. Nhưng `var` rất lỏng lẻo và dễ gây lỗi vì nó có function scope và cơ chế hoisting kỳ quặc. Từ ES6, chúng ta có `let` và `const` với block scope an toàn hơn.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// ❌ Đừng dùng var
var name = "Cường";
var name = "Nam"; // Không lỗi, dễ ghi đè nhầm

// ✅ Dùng let
let age = 25;
age = 26; // Ok, let cho phép gán lại giá trị

// ✅ Dùng const cho hằng số
const PI = 3.14;
// PI = 3.15; // ❌ Lỗi ngay lập tức: Assignment to constant variable.`,
      },
      {
        type: "heading",
        content: "2. Hoisting là gì?",
      },
      {
        type: "paragraph",
        content:
          'Hoisting là cơ chế JS "đẩy" phần khai báo biến lên đầu phạm vi của nó. Với `var`, biến sẽ có giá trị là `undefined`. Với `let/const`, biến cũng được hoist nhưng nằm trong "Temporal Dead Zone" (Vùng chết tạm thời), nếu truy cập trước khi khai báo sẽ lỗi ngay.',
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log(a); // undefined (không lỗi, nhưng nguy hiểm)
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;`,
      },
      {
        type: "heading",
        content: "3. Các kiểu dữ liệu cơ bản",
      },
      {
        type: "paragraph",
        content:
          "JS là ngôn ngữ Dynamic Typing (Kiểu động), tức là bạn không cần khai báo kiểu dữ liệu cho biến, nó tự hiểu.",
      },
      {
        type: "list",
        content: [
          'Primitive (Nguyên thủy): String ("Hello"), Number (123, 1.5), Boolean (true/false), Null, Undefined, Symbol, BigInt.',
          "Reference (Tham chiếu): Object, Array, Function. Chúng được lưu trong bộ nhớ Heap.",
        ],
      },
      {
        type: "tip",
        content:
          'Lưu ý: Null là giá trị rỗng do mình gán ("tôi không có gì"), còn Undefined là biến chưa được gán giá trị ("tôi chưa biết tôi là ai").',
      },
    ],
  },
  {
    id: "3-functions",
    title: "Hàm trong JavaScript: Arrow Function, Callback và Best Practice",
    excerpt:
      "Viết hàm thế nào cho gọn? Arrow Function có gì hay ho mà ai cũng dùng? Cùng clean code với function nhé.",
    date: "2025-12-05",
    readTime: "10 phút",
    tags: ["Functions", "ES6"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "paragraph",
        content:
          "Hàm (Function) là block code thực hiện một nhiệm vụ cụ thể. Nó giúp tái sử dụng code và làm chương trình dễ đọc hơn. Trong JS hiện đại, Arrow Function là thứ bạn sẽ thấy 99% thời gian.",
      },
      {
        type: "heading",
        content: "1. Các cách khai báo hàm",
      },
      {
        type: "code",
        language: "javascript",
        content: `// 1. Function Declaration (Được Hoisting)
function sayHello(name) {
  return "Hello " + name;
}

// 2. Function Expression (Không Hoisting)
const sayHi = function(name) {
  return "Hi " + name;
};

// 3. Arrow Function (ES6 - Ngắn gọn, không có 'this' riêng)
const sayYo = (name) => {
  return \`Yo \${name}\`;
};

// Viết tắt siêu ngầu (Implicit return)
const add = (a, b) => a + b; // Tự động return a + b`,
      },
      {
        type: "heading",
        content: "2. Callback Function",
      },
      {
        type: "paragraph",
        content:
          "Callback đơn giản là truyền một hàm vào một hàm khác như một tham số. Hàm nhận callback sẽ gọi nó vào một thời điểm thích hợp (ví dụ sau khi chạy xong việc gì đó).",
      },
      {
        type: "code",
        language: "javascript",
        content: `const processData = (data, callback) => {
  console.log("Đang xử lý: " + data);
  // Giả lập xử lý mất 2 giây
  setTimeout(() => {
    callback(); // Gọi hàm callback sau khi xong
  }, 2000);
}

processData("File ảnh", () => {
  console.log("Xong rồi! Gửi mail cho user thôi.");
});`,
      },
      {
        type: "heading",
        content: "3. IIFE (Immediately Invoked Function Expression)",
      },
      {
        type: "paragraph",
        content:
          "Đây là hàm được chạy ngay lập tức khi khai báo. Thường dùng để tạo scope riêng tránh trùng tên biến toàn cục.",
      },
      {
        type: "code",
        language: "javascript",
        content: `(function() {
  const secret = "Mật mã 123";
  console.log("Chạy ngay lập tức!");
})();
// console.log(secret); // Lỗi, không truy cập được secret từ ngoài`,
      },
      {
        type: "tip",
        content:
          'Tip: Arrow Function không có context "this" của riêng nó. Nó sẽ lấy "this" từ scope cha. Rất tiện khi dùng trong React component.',
      },
    ],
  },
  {
    id: "4-array-object",
    title: "Array & Object: Cách xử lý dữ liệu hiệu quả trong JS",
    excerpt:
      "Destructuring, Spread Operator, Map, Filter, Reduce... Những vũ khí hạng nặng giúp bạn xử lý dữ liệu như một senior.",
    date: "2025-12-08",
    readTime: "15 phút",
    tags: ["Data Structures", "ES6"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. Object Destructuring (Bóc tách dữ liệu)",
      },
      {
        type: "paragraph",
        content:
          'Thay vì viết `user.name`, `user.age` lặp đi lặp lại, hãy dùng Destructuring để code gọn gàng và "sang" hơn.',
      },
      {
        type: "code",
        language: "javascript",
        content: `const user = {
  name: "Nhật Cường",
  age: 20,
  skills: ["JS", "React"],
  address: {
    city: "Tuy Hòa",
    country: "VN"
  }
};

// Lấy dữ liệu và đổi tên biến nếu cần
const { name, age, address: { city } } = user;
console.log(name, city); // "Nhật Cường", "Tuy Hòa"`,
      },
      {
        type: "heading",
        content: "2. Array Methods thần thánh",
      },
      {
        type: "paragraph",
        content:
          "Quên vòng lặp `for` đi. Hãy làm quen với bộ ba quyền lực: Map, Filter, Reduce.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const products = [
  { id: 1, name: "Iphone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 600 }
];

// Map: Tạo mảng mới chứa tên
const names = products.map(p => p.name); 
// ["Iphone", "Samsung", "Xiaomi"]

// Filter: Lấy sản phẩm giá > 700
const expensive = products.filter(p => p.price > 700);
// [{ id: 1... }, { id: 2... }]

// Reduce: Tính tổng tiền
const total = products.reduce((sum, p) => sum + p.price, 0);
// 2400`,
      },
      {
        type: "heading",
        content: "3. Spread Operator (...)",
      },
      {
        type: "paragraph",
        content:
          "Dấu ba chấm (...) giúp copy mảng/object cực nhanh hoặc gộp chúng lại với nhau.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

const userUpdate = { ...user, age: 21 }; // Copy user cũ và sửa age`,
      },
      {
        type: "tip",
        content:
          "Lưu ý: Spread operator chỉ copy nông (shallow copy). Với object lồng nhau nhiều cấp, bạn cần dùng structuredClone() hoặc thư viện như Lodash.",
      },
    ],
  },
  {
    id: "5-async-promise",
    title: "Asynchronous JavaScript: Promise, async/await dễ hiểu",
    excerpt:
      "Xử lý bất đồng bộ không còn là ác mộng nếu bạn hiểu rõ Promise và Async/Await. Tạm biệt Callback Hell!",
    date: "2025-12-12",
    readTime: "14 phút",
    tags: ["Async", "Advanced"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. Tại sao cần Bất đồng bộ (Asynchronous)?",
      },
      {
        type: "paragraph",
        content:
          "JavaScript chạy đơn luồng (single-threaded). Nếu bạn gọi API lấy dữ liệu mà chờ nó tải xong mới chạy tiếp dòng code dưới, website sẽ bị đơ (blocking). Async giúp JS gửi request xong đi làm việc khác, khi nào có kết quả thì quay lại xử lý.",
      },
      {
        type: "heading",
        content: "2. Từ Callback Hell đến Promise",
      },
      {
        type: "paragraph",
        content:
          "Ngày xưa dùng callback lồng nhau (Callback Hell) rất rối rắm. Promise ra đời để giải quyết vấn đề đó, cho phép ta `.then()` liên tiếp.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Callback Hell (Nhìn phát sợ)
getData(function(a) {
  getMoreData(a, function(b) {
    getMoreMoreData(b, function(c) {
      console.log(c);
    });
  });
});

// Promise (Đỡ hơn chút)
getData()
  .then(a => getMoreData(a))
  .then(b => getMoreMoreData(b))
  .then(c => console.log(c))
  .catch(err => console.error(err));`,
      },
      {
        type: "heading",
        content: "3. Async/Await: Cú pháp của chân ái",
      },
      {
        type: "paragraph",
        content:
          'Async/await thực chất là cú pháp "đường mật" (syntactic sugar) của Promise, giúp code bất đồng bộ nhìn y hệt đồng bộ, dễ đọc và dễ debug hơn hẳn.',
      },
      {
        type: "code",
        language: "javascript",
        content: `const fetchUser = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Nhật Cường Dev"), 2000);
  });
};

const app = async () => {
  console.log("Đang tải...");
  try {
    const user = await fetchUser(); // Dừng tại đây đợi 2s
    console.log(\`Xin chào \${user}\`);
    
    // Chạy song song nhiều promise
    // const [data1, data2] = await Promise.all([api1(), api2()]);
  } catch (error) {
    console.error("Lỗi rồi:", error);
  }
};

app();`,
      },
      {
        type: "tip",
        content:
          "Luôn bọc code async/await trong khối try/catch để bắt lỗi nhé. Nếu quên, lỗi sẽ làm crash ứng dụng mà không có thông báo rõ ràng.",
      },
    ],
  },
  {
    id: "6-dom-manipulation",
    title: "DOM là gì? Cách JavaScript tương tác với HTML",
    excerpt:
      "DOM (Document Object Model) là cầu nối giữa code JS và giao diện người dùng. Học cách thao tác DOM thuần thục.",
    date: "2025-12-15",
    readTime: "10 phút",
    tags: ["DOM", "Web API"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. DOM là cái cây",
      },
      {
        type: "paragraph",
        content:
          "Trình duyệt đọc HTML và dựng lên một sơ đồ dạng cây gọi là DOM. Mỗi thẻ HTML là một node (nút) trên cây đó. JS dùng DOM API để tìm, thêm, sửa, xóa các node này.",
      },
      {
        type: "heading",
        content: "2. Tuyệt chiêu truy vấn phần tử",
      },
      {
        type: "paragraph",
        content:
          "Ngày xưa dùng `getElementById`, giờ chúng ta dùng `querySelector` cho nó pro và thống nhất (giống selector của CSS).",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Chọn 1 phần tử đầu tiên
const btn = document.querySelector('.submit-btn');

// Chọn tất cả phần tử (trả về NodeList)
const items = document.querySelectorAll('li');

// Duyệt qua NodeList
items.forEach(item => {
  item.style.color = 'blue';
});`,
      },
      {
        type: "heading",
        content: "3. Thêm và Xóa phần tử",
      },
      {
        type: "paragraph",
        content: "Bạn có thể tạo ra HTML mới hoàn toàn bằng JS.",
      },
      {
        type: "code",
        language: "javascript",
        content: `// Tạo thẻ div mới
const newDiv = document.createElement('div');
newDiv.innerText = "Nội dung mới";
newDiv.classList.add('box');

// Gắn vào body
document.body.appendChild(newDiv);

// Xóa phần tử
newDiv.remove();`,
      },
      {
        type: "tip",
        content:
          "Khi dùng React/Vue, bạn sẽ ít đụng vào DOM trực tiếp vì Framework làm hộ rồi (Virtual DOM). Tuy nhiên, hiểu DOM giúp bạn tối ưu hiệu năng và làm những animation phức tạp.",
      },
    ],
  },
  {
    id: "7-events-loop",
    title: "Event, Event Loop và những lỗi người mới hay gặp",
    excerpt:
      "Cơ chế Event Loop hoạt động ra sao? Tại sao setTimeout 0 lại chạy sau cùng? Giải mã bí ẩn cốt lõi của JS.",
    date: "2025-12-15",
    readTime: "15 phút",
    tags: ["Deep Dive", "Concept"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. Event Loop - Trái tim của JS",
      },
      {
        type: "paragraph",
        content:
          'Rất nhiều bạn đi phỏng vấn bị hỏi câu này: "Kết quả in ra theo thứ tự nào?". Đây là câu hỏi kinh điển để kiểm tra kiến thức về Event Loop.',
      },
      {
        type: "code",
        language: "javascript",
        content: `console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// Thứ tự đúng: 1 -> 4 -> 3 -> 2. Tại sao?`,
      },
      {
        type: "paragraph",
        content:
          "Giải thích: \n1. Code đồng bộ chạy trước (1, 4).\n2. `Promise` thuộc Microtask Queue, có ưu tiên cao hơn.\n3. `setTimeout` thuộc Macrotask Queue, chạy sau cùng.",
      },
      {
        type: "heading",
        content: "2. Event Bubbling & Capturing",
      },
      {
        type: "paragraph",
        content:
          'Khi bạn click vào một nút con, sự kiện click đó sẽ "nổi bọt" (bubble) lên cha, rồi lên ông nội. Để chặn nó, dùng `e.stopPropagation()`.',
      },
      {
        type: "code",
        language: "javascript",
        content: `document.querySelector('#child').addEventListener('click', (e) => {
  e.stopPropagation(); // Chặn không cho cha biết là con bị click
  console.log('Con được click');
});

document.querySelector('#parent').addEventListener('click', () => {
  console.log('Cha được click'); // Sẽ không chạy dòng này
});`,
      },
    ],
  },
  {
    id: "8-es6-plus",
    title: "ES6+ có gì hay? Những cú pháp giúp code gọn và sạch hơn",
    excerpt:
      "Template Literals, Optional Chaining, Nullish Coalescing... Nâng cấp code của bạn lên tầm cao mới.",
    date: "2025-12-21",
    readTime: "8 phút",
    tags: ["Modern JS", "Tips"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "1. Optional Chaining (?.)",
      },
      {
        type: "paragraph",
        content:
          "Đã bao giờ bạn gặp lỗi `Cannot read property of undefined` chưa? Chắc chắn là rồi. Dùng `?.` để fix ngay. Nó sẽ trả về undefined nếu giá trị phía trước không tồn tại thay vì quăng lỗi.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const user = {};

// Cách cũ: lỗi sập app nếu address không có
// console.log(user.address.street); 

// Cách mới: an toàn tuyệt đối
console.log(user?.address?.street); // undefined`,
      },
      {
        type: "heading",
        content: "2. Nullish Coalescing (??)",
      },
      {
        type: "paragraph",
        content:
          'Khác với `||`, toán tử `??` chỉ lấy giá trị mặc định khi vế trái là `null` hoặc `undefined`. Nó không tính `0` hay `""` là false.',
      },
      {
        type: "code",
        language: "javascript",
        content: `const score = 0;

const result1 = score || 10; // 10 (Sai, vì 0 là falsy)
const result2 = score ?? 10; // 0 (Đúng, vì 0 khác null/undefined)`,
      },
      {
        type: "heading",
        content: "3. Template Literals (``)",
      },
      {
        type: "paragraph",
        content:
          "Không cần cộng chuỗi mệt mỏi nữa. Dùng dấu backtick (`) để chèn biến và viết chuỗi nhiều dòng dễ dàng.",
      },
      {
        type: "code",
        language: "javascript",
        content: `const name = "Cường";
const html = \`
  <div>
    <h1>Xin chào \${name}</h1>
    <p>Hôm nay trời đẹp quá!</p>
  </div>
\`;`,
      },
    ],
  },
  {
    id: "9-roadmap",
    title: "Lộ trình học JavaScript để đi làm Front-end / Full-stack",
    excerpt:
      "Học xong cơ bản rồi thì làm gì tiếp theo? Đây là tấm bản đồ kho báu dành cho bạn.",
    date: "2025-12-25",
    readTime: "10 phút",
    tags: ["Career", "Roadmap"],
    image: "/blog-thumbnail.png",
    blocks: [
      {
        type: "heading",
        content: "Giai đoạn 1: Nắm chắc nền tảng (1-2 tháng)",
      },
      {
        type: "list",
        content: [
          "Biến, kiểu dữ liệu, toán tử.",
          "Hàm, vòng lặp, điều kiện.",
          "Array methods (Map, Filter, Reduce).",
          "DOM & Events cơ bản.",
        ],
      },
      {
        type: "heading",
        content: "Giai đoạn 2: Advanced JS & Tooling (1 tháng)",
      },
      {
        type: "list",
        content: [
          "Async/Await, Promise, Fetch API (Gọi API lấy dữ liệu).",
          "ES6+ Features (Destructuring, Modules, Classes).",
          "Hiểu về NPM (cài thư viện), Webpack/Vite (đóng gói code).",
          "Git & Github (Quản lý mã nguồn - Bắt buộc).",
        ],
      },
      {
        type: "heading",
        content: "Giai đoạn 3: Framework (React/Vue/Angular)",
      },
      {
        type: "paragraph",
        content:
          "Sau khi cứng JS, hãy chọn 1 framework. Hiện tại React đang nhiều việc nhất và cộng đồng lớn nhất. Bạn cần học:",
      },
      {
        type: "list",
        content: [
          "Component Thinking (Tư duy chia nhỏ giao diện).",
          "State & Props.",
          "Hooks (useState, useEffect, useContext).",
          "Routing (React Router).",
        ],
      },
      {
        type: "heading",
        content: "Giai đoạn 4: Đi làm & Mở rộng",
      },
      {
        type: "paragraph",
        content:
          "Khi đã làm được các dự án nhỏ (Todo App, Weather App, E-commerce cơ bản), hãy apply đi thực tập. Đồng thời học thêm:",
      },
      {
        type: "list",
        content: [
          "TypeScript (JS có định kiểu - Các công ty lớn đều dùng).",
          "Backend cơ bản (Node.js/Express) để hiểu luồng dữ liệu.",
          "Database (MongoDB/SQL).",
          "Next.js (Framework mạnh mẽ cho React).",
        ],
      },
      {
        type: "heading",
        content: "Kết luận",
      },
      {
        type: "paragraph",
        content:
          "Đừng vội nhảy vào Framework khi chưa vững JS thuần. Móng có chắc thì nhà mới cao. Chúc anh em học tốt và sớm kiếm được job xịn! Kiên trì là chìa khóa.",
      },
    ],
  },
];
