const article1 = '<h2>6.3. MỘT SỐ LỚP THÔNG DỤNG TRONG API</h2>  <h3>6.3.1. Math</h3> <p>Math là lớp cung cấp các hàm toán học thông dụng.</p> <ul>   <li><code>Math.random()</code>: trả về một giá trị kiểu double trong khoảng [0.0,..,1.0).</li>   <li><code>Math.abs()</code>: trả về một giá trị double là giá trị tuyệt đối của đối số kiểu double, tương tự đối với đối số và giá trị trả về kiểu int.</li>   <li><code>Math.round()</code>: trả về một giá trị int hoặc long (tùy theo đối số là kiểu float hay double) là giá trị làm tròn của đối số tới giá trị nguyên gần nhất. Lưu ý rằng các hằng kiểu float được Java hiểu là thuộc kiểu double trừ khi thêm kí tự f vào cuối, ví dụ 1.2f.</li>   <li><code>Math.min()</code>: trả về giá trị nhỏ hơn trong hai đối số. Đối số có thể là int, long, float, hoặc double.</li>   <li><code>Math.max()</code>: trả về giá trị lớn hơn trong hai đối số. Đối số có thể là int, long, float, hoặc double.</li> </ul> <p>Ngoài ra, Math còn các phương thức khác như <code>sqrt()</code>, <code>tan()</code>, <code>ceil()</code>, <code>floor()</code>, và <code>sin()</code>. Ta nên tra cứu chi tiết tại tài liệu API.</p>  <h3>6.3.2. Các lớp bọc ngoài kiểu dữ liệu cơ bản</h3> <p>Đôi khi, ta muốn đối xử với một giá trị kiểu cơ bản như là một đối tượng. Ví dụ, ở các phiên bản Java trước 5.0, ta không thể chèn thẳng một giá trị kiểu cơ bản vào trong một cấu trúc kiểu ArrayList. Các lời gọi tương tự như <code>list.add(2)</code> sẽ bị trình biên dịch báo lỗi do phương thức <code>add</code> lấy đối số là tham chiếu đối tượng.</p> <p>Trong những trường hợp như vậy, ta có các lớp bọc ngoài mỗi kiểu cơ bản (wrapper class). Các lớp bọc ngoài này có tên gần trùng với tên kiểu cơ bản tương ứng: Boolean, Character, Byte, Short, Integer, Long, Float, Double. Mỗi đối tượng thuộc các lớp trên bao bọc một giá trị kiểu cơ bản tương ứng, kèm theo các phương thức để thao tác với giá trị đó. Ví dụ:</p> <pre>   </pre> <img src="image_1.png" alt="Sử dụng lớp integer" width="700" height="300"> <p>Các lớp bọc ngoài khác cũng có cách sử dụng và các phương thức tiện ích tương tự như Integer. Chẳng hạn, mỗi đối tượng Boolean có phương thức <code>booleanValue()</code> trả về giá trị boolean chứa trong nó.</p> <p>Tóm lại, nếu dùng phiên bản Java trước 5.0 hay từ 5.0 trở đi, ta sẽ sử dụng ArrayList cho các giá trị int theo kiểu như trên.</p> </body> </html> <img src="image_2.png" alt="All Text" title="Ví dụ" width="800" height="300">  <h2>Bài tập</h2>  <h3>1. Điền từ thích hợp vào các chỗ trống dưới đây</h3> <p>a) Các thành viên có mức truy nhập <u>____________</u> của lớp cha có thể được truy nhập từ trong lớp cha và lớp con.</p> <p>b) Trong quan hệ <u>____________</u>, một đối tượng của một lớp con có thể được đối xử như một đối tượng thuộc lớp cha.</p> <p>c) Trong quan hệ <u>____________</u> giữa hai lớp, đối tượng của một lớp này có biến thực thể là tham chiếu tới đối tượng thuộc lớp kia.</p>  <p><u>___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</u></p> <h3>2. Các phát biểu sau đây đúng hay sai:</h3> <p>a) Quan hệ <u>HAS-A</u> được cài đặt bằng cơ chế thừa kế.</p> <p>b) Lớp Ô tô có quan hệ <u>IS-A</u> đối với các lớp Bánh lái và Phanh.</p> <p>c) Khi lớp con định nghĩa lại một phương thức của lớp cha trong khi giữ nguyên danh sách tham số của phương thức đó, lớp con được gọi là đã cài chồng phương thức của lớp cha.</p> <p>d) Có thể đối xử với các đối tượng lớp cha và các đối tượng lớp con như nhau.</p>  <p>Ta có thể quy định rằng một vài (hoặc tất cả) các hành vi của một lớp trừu tượng phải được cài đặt bởi một lớp con có tính đặc trưng hơn, nếu không các hành vi đó là vô nghĩa. Nói cách khác, ta không thể nghĩ ra một cài đặt tổng quát nào cho phương thức đó mà có thể hữu ích cho các lớp con. Một phương thức <code>makeNoise()</code> tổng quát sẽ làm gì?</p> <p>Cú pháp Java quy định rằng phương thức trừu tượng không có thân phương thức. Dòng khai báo phương thức kết thúc tại dấu chấm phảy và không có cặp ngoặc <code>{ }</code>.</p> <pre> public abstract void makeNoise(); </pre> <p>Nếu ta khai báo một phương thức là abstract, ta phải đánh dấu lớp đó cũng là abstract. Ta không thể đặt một phương thức trừu tượng ở bên trong một lớp cụ thể. Tuy nhiên, ta có thể có phương thức không trừu tượng bên trong một lớp trừu tượng.</p> <h3>Những điểm quan trọng:</h3> <ul>   <li>Một phương thức có thể ném ngoại lệ khi gặp sự cố trong khi đang chạy</li>   <li>Một ngoại lệ là một đối tượng thuộc kiểu Exception hoặc lớp con của Exception.</li>   <li>Trình biên dịch không quan tâm đến các ngoại lệ kiểu RuntimeException. Các ngoại lệ kiểu RuntimeException không bắt buộc phải được phương thức xử lý bằng khối try/catch hay khai báo throws để né.</li>   <li>Tất cả các loại ngoại lệ mà trình biên dịch quan tâm được gọi là các ngoại lệ được kiểm tra. Các ngoại lệ còn lại (các loại RuntimeException) được gọi là ngoại lệ không được kiểm tra.</li>   <li>Một phương thức ném một ngoại lệ bằng lệnh throw, tiếp theo là một đối tượng ngoại lệ mới.</li>   <li>Các phương thức có thể ném một ngoại lệ loại được kiểm tra phải khai báo ngoại lệ đó với dạng throws Exception.</li>   <li>Nếu một phương thức của ta gọi một phương thức có ném ngoại lệ loại được kiểm tra, phương thức đó phải đảm bảo rằng ngoại lệ đó được quan tâm xử lý.</li>   <li>Nếu muốn xử lý ngoại lệ phát sinh từ một đoạn mã, ta bọc đoạn mã đó vào trong một khối try/catch và đặt phần mã xử lý ngoại lệ/khắc phục sự cố vào trong khối catch.</li>   <li>Nếu không định xử lý ngoại lệ, ta có thể "né" ngoại lệ bằng khai báo throws.</li>   <li>Nếu một lớp con cài đè phương thức của lớp cha thì phiên bản của lớp con chỉ được ném các kiểu ngoại lệ đã được khai báo tại phiên bản của lớp cha, hoặc ngoại lệ thuộc các lớp con của các kiểu nói trên, hoặc không ném ngoại lệ nào.</li> </ul>'
const articlesMock = [
  {
    "id": 0,
    "section_id": 1,
    "title": "MỘT SỐ LỚP THÔNG DỤNG TRONG API",
    "category": "definition",
    "featured": true,
    "content": article1
  },
  {
    "id": 1,
    "section_id": 1,
    "title": "Types of Inheritance",
    "category": "concept",
    "featured": true,
    "content": "<p>There are several types of inheritance in OOP, including single inheritance, multiple inheritance, multilevel inheritance, and hierarchical inheritance. Each type has its own characteristics and use cases.</p>"
  },
  {
    "id": 2,
    "section_id": 1,
    "title": "Benefits and Drawbacks of Inheritance",
    "category": "concept",
    "featured": true,
    "content": "<p>Inheritance offers several benefits, such as code reuse, extensibility, and modularity. However, it can also lead to tight coupling between classes and potential issues with the inheritance hierarchy.</p>"
  },
  {
    "id": 3,
    "section_id": 1,
    "featured": true,
    "title": "Examples of Inheritance in OOP",
    "category": "example",
    "content": "<p>Examples of inheritance in OOP can be found in various domains, such as software development, game development, and modeling real-world entities. For instance, a software application may have a base class for different types of users, with subclasses for specific roles like admin, customer, and employee.</p>"
  },
  // ... other articles ...
];

export default articlesMock;
