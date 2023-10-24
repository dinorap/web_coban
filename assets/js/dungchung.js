function addTK() {
  document.write(`  
  <div class="member" id="loginButton" onmouseover="showUserMenu()" onmouseout="hideUserMenu()">
    <a>
        <i class="fa fa-user"></i>
        <span id="userText">Đăng nhập</span>
    </a>
    <div class="menuMember hide" id="userMenu">
        <a href="nguoidung.html">Trang người dùng</a>
        <a onclick="if (window.confirm('Xác nhận đăng xuất ?')) logOut();">Đăng xuất</a>
    </div>
</div>
  
    <div class="modaljs" id="modal" ">
        <span class="close" id=closeModal>&#10006;</span>
        <div class="wapperjs" id="signin" style="display: none;">
            <form onsubmit="return logIn(this);">
                <a href="./index.html" class="headerjs">
                    <img style="" src="./img/logo.png" alt="" />
                    <h3>ĐĂNG NHẬP</h3>
                </a>
                <div class="inputjs">
                    <!-- <p>Tên đăng nhập, email, số điện thoại</p> -->
                    <input type="text" id="user" name='username' placeholder="Nhập tài khoản" required />
                    <!-- <p>Mật khẩu</p> -->
                    <div class="ion-box">
                        <input name="pass" class="inputjs" type="password" id="password" required
                            placeholder="Mật khẩu" />
                        <i class='bx bxs-hide' style='color:#0a0a0a'></i>
                        <i class='bx bxs-show hidden' style='color:#0a0a0a'></i>
                    </div>
                </div>
                <div class="reset">
                    <input type="checkbox" /> <span>Nhớ mật khẩu</span>
                    <a id="qmkbutton"><b>Quên mật khẩu</b></a>
                </div>
                <div class="buttonlog" >
                    <a>
                        <input type="submit"  value="Đăng nhập" />
                    </a>
                </div>
                <div class="hr">
                    <hr>
                    <p>Tiếp tục với</p>
                    <hr>
                </div>
                <div class="connect">
                    <a
                        href="https://accounts.google.com/v3/signin/identifier?dsh=S1627976351%3A1686453003340009&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">
                        <button type="button">
                            <img src="./img/google_logo1600.png" alt="">
                            <p>Google </p>
                        </button>
                    </a>
                    <a href="https://www.facebook.com/">
                        <button type="button">
                            <img src="./img/facebook-clipart-png-12.png" alt="">
                            <p>Facebook</p>
                        </button>
                    </a>

                </div>
                <div class="footerjs">
                    <p>Bạn chưa có tài khoản?<a id="snow" style="font-weight: bold;"> Đăng ký ngay</a></p>
                </div>
            </form>
        </div>
        <div class="wapperjs" id="signup" style="display: none;">
            <form onsubmit="return signUp(this);">
                <div class="headerjs">
                    <img src="./img/logo.png" alt="" />
                    <h3>ĐĂNG KÝ </h3>
                </div>
                <div class="inputjs">
                    <!-- <p>Nhập email hoặc số điện thoại </p> -->
                    <input type="email" name="email" placeholder="Nhập email" required />
                    <input type="text" name="newUser" placeholder="Nhập tên tài khoản" required />
                    <input type="password" name="newPass" placeholder="Nhập mật khẩu" required />
                </div>
                <div class="buttonsign" style="margin-top:10px">
                    <a>
                        <input type="submit" value="Đăng ký" />
                    </a>
                </div>
                <div class="hr1">
                    <hr>
                    <p>Hoặc</p>
                    <hr>
                </div>
                <div class="connect">
                    <a
                        href="https://accounts.google.com/v3/signin/identifier?dsh=S1627976351%3A1686453003340009&authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=vi&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession">
                        <button type="button">
                            <img src="./img/google_logo1600.png" alt="">
                            <p>Google </p>
                        </button>
                    </a>
                    <a href="https://www.facebook.com/">
                        <button type="button">
                            <img src="./img/facebook-clipart-png-12.png" alt="">
                            <p>Facebook</p>
                        </button>
                    </a>

                </div>
                <div class="footerjs">
                    <p>Bạn đã có tài khoản ?<a id="lnow" style="font-weight: bold;"> Đăng nhập </a></p>
                </div>
            </form>
        </div>
        <div class="wapperjs" id="qmk" style="display: none;">
        <form >
                <a href="./index.html" class="headerjs">
                    <img src="./img/logo.png" alt="" />
                    <h3>Quên Mật Khẩu</h3>
                </a>
                <div class="inputjs">
                    <input type="email" id="emailInput" name='emailInput' placeholder="Nhập Email" required />
                </div>
                <div class="buttonlog" >
                <a href="#" onclick="validateEmail()">
        <input id="btQmk" type="button" value="Quên Mật Khẩu" />
    </a>
                </div>
                <div class="hr">
                    <hr>
                    <p>Tiếp tục với</p>
                    <hr>
                </div>
                
                <div class="footerjs">
                    <p><a id="back" style="font-weight: bold;"> Quay lại</a></p>
                </div>
            </form>
        </div>
    </div>
  `);

  const forgetModal = document.getElementById("qmk");
  const forgetButtonback = document.getElementById("back");
  const forgetButton = document.getElementById("qmkbutton");
  const modal = document.getElementById("modal");
  const loginButton = document.getElementById("loginButton");
  const loginModal = document.getElementById("signin");
  const signupModal = document.getElementById("signup");
  const signinButton = document.getElementById("lnow");
  const signupButton = document.getElementById("snow");
  const close = document.getElementById("closeModal");
  loginButton.addEventListener("click", () => {
    if (isLoggedIn === "false") {
      loginModal.style.display = "block";
      modal.style.display = "block";
    }
  });
  signinButton.addEventListener("click", () => {
    signupModal.style.display = "none";
    loginModal.style.display = "block";
  });
  signupButton.addEventListener("click", () => {
    signupModal.style.display = "block";
    loginModal.style.display = "none";
  });
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
  forgetButton.addEventListener("click", () => {
    loginModal.style.display = "none";
    forgetModal.style.display = "block";
  });
  forgetButtonback.addEventListener("click", () => {
    signupModal.style.display = "block";
    forgetModal.style.display = "none";
  });
}
if (localStorage.getItem("isLoggedIn") === null) {
  // Nếu không tồn tại, thì đặt giá trị "false" cho biến "isLoggedIn"
  localStorage.setItem("isLoggedIn", "false");
}

var isLoggedIn = localStorage.getItem("isLoggedIn");

function getListUser() {
  var data = JSON.parse(window.localStorage.getItem("ListUser")) || [];
  var l = [];
  for (var d of data) {
    l.push(d);
  }
  return l;
}
function setListUser(l) {
  window.localStorage.setItem("ListUser", JSON.stringify(l));
}
function User(username, pass, email) {
  this.email = email || "";
  this.username = username;
  this.pass = pass;
}
function sha256(input) {
  var encoder = new TextEncoder();
  var data = encoder.encode(input);
  return crypto.subtle.digest("SHA-256", data).then(function (buffer) {
    var hashArray = Array.from(new Uint8Array(buffer));
    var hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  });
}

function logIn(form) {
  // Lấy dữ liệu từ form
  var name = form.username.value;
  var pass = form.pass.value;
  // Mã hóa mật khẩu đăng nhập
  sha256(pass).then(function (hashedPass) {
    // Lấy dữ liệu từ danh sách người dùng local storage
    var listUser = getListUser();
    var userMatch = listUser.find(function (u) {
      return u.username === name && u.pass === hashedPass;
    });

    if (userMatch) {
      var mail = userMatch.email;
      alert("Chào mừng " + name + " đăng nhập thành công");
      isLoggedIn = true; // Đánh dấu người dùng đã đăng nhập thành công
      modal.style.display = "none";
      saveLoginStatus(name, mail, pass);
      location.reload();
    } else {
      alert("Nhập sai tên hoặc mật khẩu !!!");
      return false;
    }
  });
  return false;
}
document.addEventListener("DOMContentLoaded", function () {
  checkLoginStatus();
});
function showUserMenu() {
  var userMenu = document.querySelector(".menuMember");

  if (isLoggedIn === "true") {
    userMenu.classList.remove("hide");
  }
}

function hideUserMenu() {
  var userMenu = document.querySelector(".menuMember");

  if (isLoggedIn === "true") {
    userMenu.classList.add("hide");
  }
}

function checkLoginStatus() {
  var userText = document.getElementById("userText");
  var isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    // Nếu đã đăng nhập, hiển thị tên người dùng và cập nhật trạng thái
    var username = localStorage.getItem("username");
    userText.textContent = username;
    isLoggedIn = true; // Cập nhật trạng thái đăng nhập
  }
}

// Hàm lưu trạng thái đăng nhập vào Local Storage
function saveLoginStatus(username, email, pass) {
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("username", username);
  localStorage.setItem("emailcur", email);
  localStorage.setItem("passcur", pass);
}

// Hàm đăng xuất và xóa trạng thái đăng nhập khỏi Local Storage
function logOut() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("emailcur");
  localStorage.removeItem("passcur");
  localStorage.setItem("isLoggedIn", false);
  window.location.href = "index.html";
}

function resetPassword(email, newPassword) {
  sendEmailNotification(email, newPassword);

  // Hiển thị thông báo cho người dùng sử dụng SweetAlert2
  Swal.fire({
    icon: "success",
    title: "Mật khẩu mới đã được gửi",
    text: `Mật khẩu mới đã được gửi đến ${email}. Vui lòng kiểm tra email của bạn.`,
    confirmButtonText: "OK",
  }).then((result) => {
    if (result.isConfirmed) {
      // Chuyển hướng trang web về index.html hoặc trang khác

      sendEmailNotification(email, newPassword);
    }
  });
}

function sendEmailNotification(email, newPassword) {
  emailjs.init("T0kVSb9470O5Pa9IH");
  var templateParams = {
    to_email: email, // Địa chỉ email người nhận
    to_name: email,
    Text: newPassword, //
  };

  // Sử dụng public key thay thế cho User ID
  emailjs
    .send("service_947rffi", "template_f4prki8", templateParams) // Thay your_service_id và your_template_id bằng thông tin tương ứng của bạn
    .then(
      function (response) {
        console.log("Email đã được gửi thành công: ", response);
      },
      function (error) {
        console.log("Lỗi khi gửi email: ", error);
      }
    );
}

// Hàm tạo mật khẩu ngẫu nhiên
function generateRandomPassword(length) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  return password;
}

function validateEmail() {
  const email = document.getElementById("emailInput").value;
  if (isValidEmail(email)) {
    const newPassword = generateRandomPassword(8);
    resetPassword(email, newPassword);
    const forgetModal = document.getElementById("qmk");
    const signinModal = document.getElementById("signin");
    signinModal.style.display = "block";
    forgetModal.style.display = "none";
  } else {
    Swal.fire({
      icon: "error",
      title: "Email không hợp lệ",
      text: "Vui lòng nhập một địa chỉ email hợp lệ.",
      confirmButtonText: "OK",
    });
  }
}

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
function signUp(form) {
  var email = form.email.value;
  var username = form.newUser.value;
  var pass = form.newPass.value;
  const loginModal = document.getElementById("signin");
  const signupModal = document.getElementById("signup");
  sha256(pass).then(function (hashedPass) {
    var listUser = getListUser();
    if (pass.length < 8) {
      alert("Mật khẩu tối thiểu 8 ký tự");
      return false;
    }
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!regex.test(pass)) {
      alert(
        "Mật khẩu phải bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số"
      );
      return false;
    }
    for (var u of listUser) {
      if (u.username === username) {
        alert("Tên đăng nhập đã có người sử dụng !!");
        return false;
      }
    }
    for (var u of listUser) {
      if (u.email === email) {
        alert("Email đã có người sử dụng !!");
        return false;
      }
    }
    alert("Đăng ký tài khoản thành công");
    var newUser = new User(username, hashedPass, email);
    listUser.push(newUser);
    setListUser(listUser);

    // Thay đổi trạng thái hiển thị của modal
    loginModal.style.display = "block";
    signupModal.style.display = "none";
  });
  return false;
}
function addHeader() {
  document.write(`
  <div class="header">
            <div class="header-left">
                <a href="index.html">
                    <img style="width: 100%;" src="img/logoVn.jpg" alt="">
                </a>
            </div>
            <div class="header-right">
                <a href="Eng.html" class="international">
                    <img src="https://cdnweb.dantri.com.vn/dist/static-avatar-default.1-0-1.b474c6ca2d1abee5b89b.png"
                        alt="">
                    <span>International Version</span>
                </a>
                <div class="location">
                    <span class="location-name">Hà Nội</span>
                    <span class="weekdays text-small">Thứ 7, 11/11/2023</span>
                </div>
                <div class="weather">
                <a href="weather.html">
                <img src="https://cdnweb.dantri.com.vn/dist/3ab90e2ad8f9a0ada5be.svg" alt="error">
                    <span>15°C</span>
                    </a>
                </div>
                <div class="divider"></div>
                <div class="login">
                    <script>
                        addTK();
                    </script>
                </div>
                <div class="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>`);
}
function addNav() {
  document.write(`
        <div class="category-header-container">
            <div class="header-category">
                <ul class="list-category">
                    <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
                    <li class="category-item">
                        <a href="video.html">Video</a>
                        <!-- category popup -->
                        <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Tài chính</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Chứng khoán</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Doanh nghiệp</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Khởi nghiệp</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Tiêu dùng</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thanh toán thông minh
                                </li>
                            </ul>
                        </div>
                        <!-- end category popup -->
                    </li>
                    <li class="category-item">
                        <a href="#">Sự kiện</a>
                        <!-- category popup -->
                        <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga -
                                    Ukraine</li>
                        </div>
                    </li>
                    <li class="category-item"><a href="#">Xã hội</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="bieudo.html">Kinh tế</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div>
                      </li>
                    <li class="category-item"><a href="#">Kinh doanh</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Bất động sản</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Thể thao</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Việc làm</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Nhân ái</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Sức khỏe</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Văn hóa</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Giải trí</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Giáo dục</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Đời sống</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Công nghệ</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Kiến thức</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">Nghệ Thuật</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="category-item"><a href="#">DMPI</a>
                    <div class="category-popup">
                            <span class="up-arrow"><i class="fa-solid fa-caret-up"></i></span>
                            <ul class="list-category-popup">
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Quân sự</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Hồ sơ phân tích </li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Thế giới đó đây</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Kiều bào</li>
                                <li><span class="minus"><i class="fa-solid fa-minus"></i></span> Căng thẳng Nga - Ukraine</li>
                            </ul>
                        </div></li>
                    <li class="three-dots" style="font-size: 15px;">&#160;&#9776;&#160;&#160;</li>
                    <li class="btn-close-category" style="display: none;"><i style="font-size: 1.4rem; color: #0f6c32;"
                            class="fa-regular fa-circle-xmark"></i></li>
                </ul>
                <div class="category-line"></div>
            </div>
        </div>
        <div class="all-category" style="display: none;">
        <div class="all-category-left-section">
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>
            <ul class="group-category-sub-category">
                <li class="category-title"><a href="#" class="text-uppercase">Xã hội</a></li>
                <li class="sub-category"><a href="#">Chỉnh trị</a></li>
                <li><a href="#">Học tập Bác</a></li>
                <li><a href="#">Môi trường</a></li>
                <li><a href="#">Giao thông</a></li>
                <li><a href="#">Nóng trên mạng</a></li>
                <li><a href="#">Sáng kiến an toàn giao thông</a></li>
            </ul>

        </div>
        <div class="all-category-right-section">
            <div class="right-section-item">
                <img style="width: 100%; padding-bottom: 0.5rem;"
                    src="https://cdnweb.dantri.com.vn/dist/static-ads-240x36.1-0-1.962e3fae7be5aac3ad73.jpg" alt="">
                <ul>
                    <li><a href="#" class="text-uppercase">Sự kiện nổi bật</a></li>
                    <li><a href="#" class="text-uppercase">Dân trí TV</a></li>
                </ul>
            </div>
            <div class="horizontal-divider"></div>
            <div class="right-section-item">
                <ul>
                    <li><a href="#">DMagazine</a></li>
                    <li><a href="#">Infographic</a></li>
                    <li><a href="#">Photo Story</a></li>
                </ul>
            </div>
            <div class="horizontal-divider"></div>
            <div class="right-section-item">
                <ul>
                    <li><a href="#">Nhịp sống trẻ</a></li>
                    <li><a href="#">Khoa học</a></li>
                    <li><a href="#">Tâm điểm</a></li>
                    <li><a href="#">Bạn đọc</a></li>
                </ul>
            </div>
            <div class="horizontal-divider"></div>
            <div class="right-section-item">
                <ul>
                    <li><a href="#">Gửi thư cho tòa soạn</a></li>
                    <li><a href="lienhe.html">Liên hệ quảng cáo</a></li>
                    <li class="follow">
                        <span>Theo dõi Dân trí trên:</span>
                        <div class="logo-social-media" style="padding-right: 1rem;">
                            <img src="https://cdnweb.dantri.com.vn/dist/f79dca0321a473942b57.svg" alt="">
                            <img src="https://cdnweb.dantri.com.vn/dist/add0b845165b2db1bdc0.svg" alt="">
                            <img src="https://cdnweb.dantri.com.vn/dist/e84c1388df2f58641617.svg" alt="">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  `);
  const links = document.querySelectorAll(".group-category-sub-category a");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành động mặc định khi bấm vào thẻ a
      window.location.href = "detail2.html";
    });
  });
  var threeDots = document.querySelector(".three-dots");
  threeDots.addEventListener("click", function () {
    var allCategory = document.querySelector(".all-category");
    var categoryHeaderContainer = document.querySelector(
      ".category-header-container"
    );
    if (
      allCategory.style.display === "none" ||
      allCategory.style.display === ""
    ) {
      allCategory.style.display = "";
      categoryHeaderContainer.style.backgroundColor = "#eee";
      btnCloseCategory.style.display = "block";
      threeDots.style.display = "none";
    } else {
      allCategory.style.display = "none";
      categoryHeaderContainer.style.backgroundColor = "#fff";
      btnCloseCategory.style.display = "none";
      threeDots.style.display = "block";
    }
  });

  // Click event for the btn-close-category element
  var btnCloseCategory = document.querySelector(".btn-close-category");
  btnCloseCategory.addEventListener("click", function () {
    btnCloseCategory.style.display = "none";
    var allCategory = document.querySelector(".all-category");
    allCategory.style.display = "none";
    var threeDots = document.querySelector(".three-dots");
    threeDots.style.display = "block";
    var categoryHeaderContainer = document.querySelector(
      ".category-header-container"
    );
    categoryHeaderContainer.style.backgroundColor = "#fff";
  });

  // Scroll to top button
}

function addFotter() {
  document.write(`
  <div class="horizontal-footer-divider"></div>
            <div class="footer-logo">
                <img src="img/logoVn.jpg" alt="">
            </div>
            <div class="footer-main-content">
                <div class="footer-content-left">
                    <ul>
                        <li>Tổng biên tập: Đinh Minh Phương</li>
                        <li>Giấy phép hoạt động báo điện tử tin tức 24h số 298/GP - BTTTT Hà Nội, ngày 11-11-2023.</li>
                        <li>Địa chỉ tòa soạn: Địa chỉ: Trường Phenikaa P. Nguyễn Trác, Yên Nghĩa, Hà Đông, Hà Nội</li>
                        <li>Văn phòng đại diện : Trường Phenikaa P. Nguyễn Trác, Yên Nghĩa, Hà Đông, Hà Nội</li>
                        <li>Điện thoại: 0123-456-789. Fax: 0123-456-789</li>
                        <li>Hotline HN: 0123-456-789. Hotline TP HCM: 0123-456-789</li>
                        <li><a href="#" style="color: #000">Email: phenika-uni.edu.com.vn</a></li>
                    </ul>
                </div>
                <div class="footer-content-middle">
                    <ul>
                        <li>Liên hệ quảng cáo: 0123.456.789</li>
                        <li><a href="#" style="color: #000">Email: phenika-uni.edu.com.vn</a></li>
                    </ul>
                </div>
                <div class="footer-content-right">
                    <ul>
                        <li>Đọc tin tức 24h trên mobile:</li>
                        <li class="download">
                            <img src="https://cdnweb.dantri.com.vn/dist/ee6bf097e303486d2a1c.png" alt="">
                            <img src="https://cdnweb.dantri.com.vn/dist/25695d60eaeb16411962.png" alt="">
                        </li>
                        <li class="follow">
                            <span>Theo dõi tin tức 24h trên:</span>
                            <div class="logo-social-media">
                                <img src="https://cdnweb.dantri.com.vn/dist/f79dca0321a473942b57.svg" alt="">
                                <img src="https://cdnweb.dantri.com.vn/dist/add0b845165b2db1bdc0.svg" alt="">
                                <img src="https://cdnweb.dantri.com.vn/dist/e84c1388df2f58641617.svg" alt="">
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer-end">
                © 2022-2023 Bản quyền thuộc về Báo điện tử tin tức 24h. Cấm sao chép dưới mọi hình thức nếu không có sự cho phép.
            </div>
            <div class="scroll-top">
            <i class="arrow-scroll-top fa-solid fa-angle-up"></i>
        </div>
  `);
  var scrollTopButton = document.querySelector(".scroll-top");
  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll event to show/hide the scroll-top button
  window.addEventListener("scroll", function () {
    var scroll = this.scrollY;
    if (scroll !== 0) {
      scrollTopButton.style.display = "flex";
    } else {
      scrollTopButton.style.display = "none";
    }
  });
}
// Click event for the three-dots element

// end scroll to top button
