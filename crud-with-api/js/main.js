// Hiển thị danh sách sinh viên từ BE
let studentList = [];

const fetchStudent = () => {
  axios({
    url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
    method: "GET",
  })
    .then((res) => {
      // console.log(res);
      studentList = res.data;
      // console.log(studentList);
      renderStudentList();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Hiển thị danh sách sinh viên ra màn hình
const renderStudentList = () => {
  let htmlContent = ``;
  for (let student of studentList) {
    htmlContent += `
      <tr>
        <td>${student.MaSV}</td>
        <td>${student.HoTen}</td>
        <td>${student.Email}</td>
        <td>${student.SoDT}</td>
        <td>${student.DiemToan}</td>
        <td>${student.DiemLy}</td>
        <td>${student.DiemHoa}</td>
        <td>
          <button class="btn btn-danger" onclick="deleteStudent('${student.MaSV}')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
        </button>
          <button class="btn btn-info" onclick="getStudent('${student.MaSV}')">Update</button>
        </td>
      </tr>
    `;
  }
  document.querySelector("#tableDanhSach").innerHTML = htmlContent;
};

// thêm sinh viên
const addStudent = () => {
  // DOM tới input, lấy thông tin ng nhập
  const studentId = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  // const idCard = document.querySelector("#idCard").value;
  const math = document.querySelector("#math").value;
  const physics = document.querySelector("#physics").value;
  const chemistry = document.querySelector("#chemistry").value;
  // Tạo đối tượng sinh viên, chứa thông tin vừa lấy đc
  const student = new Student(
    studentId,
    name,
    email,
    phone,
    math,
    physics,
    chemistry
  );
  // Gửi thông tin xuống cho BE, BE sẽ giúp thêm vào DB
  axios({
    url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
    method: "POST",
    data: student,
  })
    .then((response) => {
      // Cập nhật lại giao diện
      fetchStudent();
      // console.log(response);
    })
    .catch((error) => {
      // console.log(error);
    });
};

// Xóa sinh viên
const deleteStudent = (id) => {
  // Lấy đc id sinh viên
  // Gọi API xóa sinh viên
  axios({
    url: `http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/${id}`,
    method: "DELETE",
  })
    .then((response) => {
      // console.log(response);
      fetchStudent();
    })
    .catch((err) => {
      // console.log(err);
    });
  // Cập nhật lại giao diện
};

// Cập nhật thông tin sinh viên
const getStudent = (id) => {
  axios({
    url: `http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/${id}`,
    method: "GET",
  })
    .then((response) => {
      // console.log(response);
      document.querySelector("#btnThem").click();

      document.querySelector("#id").value = response.data.MaSV;
      document.querySelector("#id").setAttribute("disabled", "disabled");
      document.querySelector("#name").value = response.data.HoTen;
      document.querySelector("#email").value = response.data.Email;
      document.querySelector("#phone").value = response.data.SoDT;
      // document.querySelector("#idCard").value = response.data.CMND;
      document.querySelector("#math").value = response.data.DiemToan;
      document.querySelector("#physics").value = response.data.DiemLy;
      document.querySelector("#chemistry").value = response.data.DiemHoa;
    })
    .catch((error) => {});
};

// Update student
const updateStudent = () => {
  // DOM tới input, lấy thông tin ng nhập
  const studentId = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  // const idCard = document.querySelector("#idCard").value;
  const math = document.querySelector("#math").value;
  const physics = document.querySelector("#physics").value;
  const chemistry = document.querySelector("#chemistry").value;
  // Tạo đối tượng sinh viên, chứa thông tin vừa lấy đc
  const updatedStudent = new Student(
    studentId,
    name,
    email,
    phone,
    math,
    physics,
    chemistry
  );
  // Gửi thông tin xuống cho BE, BE sẽ giúp thêm vào DB
  axios({
    url: "http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien",
    method: "PUT",
    data: updatedStudent,
  })
    .then((response) => {
      // clear form
      document.querySelector("#btnReset").click();
      // an popup
      document.querySelector("#btnClose").click();
      // Mở khóa input id
      document.querySelector("#id").removeAttribute("disabled");

      // Cập nhật lại giao diện
      fetchStudent();
      // console.log(response);
    })
    .catch((error) => {
      // console.log(error);
    });
};

fetchStudent();
