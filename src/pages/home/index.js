function toggleDropdown(dropdownId) {
  var dropdownContent = document.getElementById(dropdownId + "Content");
  var dropdownIcon = document.getElementById(dropdownId + "Icon");

  if (dropdownContent.classList.contains("show")) {
    dropdownContent.style.maxHeight = "0"; // Ẩn dropdown
    dropdownIcon.style.transform = "rotate(0deg)";
  } else {
    dropdownContent.style.maxHeight = "1000px"; // Hiển thị dropdown với chiều cao lớn
    dropdownIcon.style.transform = "rotate(180deg)";
  }

  dropdownContent.classList.toggle("show");
}
function toggleDropdownTeacher() {
  var dropdown = document.getElementById("myDropdownTeacher");
  var icon = document.getElementById("dropdownIconTeacher");

  if (dropdown.classList.contains("show")) {
    dropdown.style.maxHeight = "0"; // Ẩn dropdown
    icon.style.transform = "rotate(0deg)";
  } else {
    dropdown.style.maxHeight = "1000px"; // Hiển thị dropdown với chiều cao lớn
    icon.style.transform = "rotate(180deg)";
  }

  dropdown.classList.toggle("show");
}
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;
  var totalSlides = slides.length;
  var scrollCounter = 0;
  var scrollThreshold = 4; // Ngưỡng lăn chuột cần để chuyển slide
  var isOffcanvasActive = false; // Biến để theo dõi trạng thái của offcanvas

  // Hàm thực hiện chuyển slide
  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0; // Quay lại slide đầu tiên nếu đang ở slide cuối cùng
    }
    scrollToSlide(currentSlide);
  }

  // Hàm thực hiện chuyển slide ngược lại
  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1; // Chuyển đến slide cuối cùng nếu đang ở slide đầu tiên
    }
    scrollToSlide(currentSlide);
  }

  // Hàm cuộn slide đến vị trí được chỉ định
  function scrollToSlide(slideIndex) {
    slides[slideIndex].scrollIntoView({ behavior: "smooth", block: "start" });
    // Đóng phần comment khi chuyển slide
    customOffcanvas.classList.remove("active");
    isOffcanvasActive = false;
  }

  // Bắt sự kiện cuộn chuột để chuyển slide
  document.addEventListener("wheel", function (event) {
    // Kiểm tra nếu offcanvas đang mở thì ngăn sự kiện cuộn chuột
    if (isOffcanvasActive) {
      event.preventDefault();
      return;
    }

    // Kiểm tra hướng của sự kiện cuộn chuột
    var delta = Math.sign(event.deltaY);

    // Nếu người dùng cuộn xuống (delta > 0), tăng biến đếm
    // Nếu người dùng cuộn lên (delta < 0), giảm biến đếm
    scrollCounter += delta;

    // Nếu vượt qua ngưỡng lăn chuột, chuyển slide và reset biến đếm
    if (Math.abs(scrollCounter) >= scrollThreshold) {
      if (scrollCounter > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      scrollCounter = 0;
    }
  });
});

//
// Lấy các phần tử DOM cần thiết bằng ID
const customOffcanvas = document.getElementById("customOffcanvasRight");
const closeButton = document.getElementById("customCloseButton");
const overlay = document.getElementById("customOffcanvasOverlay");

// Khởi tạo biến isOffcanvasActive
var isOffcanvasActive = false;

// Lặp qua từng nút toggleButton để thêm sự kiện click
for (let i = 0; i < 3; i++) {
  const toggleButton = document.getElementById("toggleButton" + i);
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      // Đảo ngược trạng thái của customOffcanvas
      customOffcanvas.classList.toggle("active");

      // Cập nhật trạng thái của isOffcanvasActive
      isOffcanvasActive = !isOffcanvasActive;
    });
  }
}

// Thêm sự kiện click cho nút closeButton
closeButton.addEventListener("click", function () {
  // Ẩn offcanvas
  customOffcanvas.classList.remove("active");

  // Cập nhật trạng thái của isOffcanvasActive
  isOffcanvasActive = false;
});

// Thêm sự kiện click cho phần overlay
overlay.addEventListener("click", function () {
  // Ẩn offcanvas
  customOffcanvas.classList.remove("active");

  // Cập nhật trạng thái của isOffcanvasActive
  isOffcanvasActive = false;
});

const menuBarBtn = document.querySelector(".menu-bars");
const sideBarRight = document.querySelector(".sideBar");
menuBarBtn.addEventListener("click",function(){
  sideBarRight.classList.toggle("sideBar-left-phone");
})


const searchContainer = document.querySelector(".search-container");
const searchInput = document.querySelector(".search-input");
const headerBtn = document.querySelector(".header-button");
let searchBtnCheck = false;

document.addEventListener("DOMContentLoaded", function() {
  searchContainer.addEventListener("click", function() {
    var searchWidth;  
    var width = window.innerWidth;
    if (width > 990) {searchWidth = "250px"; } else 
    if (width > 700) {searchWidth = "220px"; } else 
    if (width > 550) {searchWidth = "150px"; } else
    {searchWidth = width/2-40+"px"; }
    // headerBtn.classList.add("d-none");
    headerBtn.style.display="none";
    searchBtnCheck = true;
    searchInput.style.width = searchWidth;
  
  });

  document.addEventListener("click", function(event) {
    // Check if the click event occurred inside the search container
    if (searchBtnCheck && !searchContainer.contains(event.target)) {
      searchInput.style.width = "0px";
      searchBtnCheck = false;
      setTimeout(function() {
        headerBtn.classList.remove("d-none");
        headerBtn.style.display="flex";
      }, 300);
    }
  });
});
