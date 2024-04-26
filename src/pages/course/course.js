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
//
// function openPopup(popupId) {
//   var popup = document.getElementById(popupId);
//   if (popup) {
//     popup.style.display = "flex";
//   }
// }

// // Hàm đóng popup
// function closePopup(popupId) {
//   var popup = document.getElementById(popupId);
//   if (popup) {
//     popup.style.display = "none";
//   }
// }
// //
// $(document).ready(function () {
//   // Duyệt qua mỗi cặp slider và thumbnail
//   $(".content-popup-left").each(function (index) {
//     var sliderId = "carouselExampleDark" + (index + 1); // Tạo ID cho slider
//     var thumbnailId = "carouselThumbnails" + (index + 1); // Tạo ID cho thumbnail

//     // Gắn ID cho slider và thumbnail
//     $(this).find(".carousel").attr("id", sliderId);
//     $(this).find(".carousel-thumbnails").attr("id", thumbnailId);

//     // Đặt lớp active cho thumbnail đầu tiên khi trang được load cho slider
//     $("#" + thumbnailId + " .thumbnail")
//       .eq(0)
//       .addClass("active");

//     // Đồng bộ hóa khi lướt slide trên cho slider
//     $("#" + sliderId).on("slide.bs.carousel", function (e) {
//       var slideIndex = e.to;
//       $("#" + thumbnailId + " .thumbnail").removeClass("active"); // Xóa lớp active từ tất cả các thumbnail trong slider
//       $("#" + thumbnailId + " .thumbnail")
//         .eq(slideIndex)
//         .addClass("active"); // Thêm lớp active vào thumbnail tương ứng
//     });

//     // Đồng bộ hóa khi click vào thumbnail dưới cho slider
//     $("#" + thumbnailId + " .thumbnail").click(function () {
//       var slideIndex = $(this).data("bs-slide-to");
//       $("#" + sliderId).carousel(slideIndex);
//       $("#" + thumbnailId + " .thumbnail").removeClass("active"); // Xóa lớp active từ tất cả các thumbnail trong slider
//       $(this).addClass("active"); // Thêm lớp active vào thumbnail được chọn
//     });
//   });

//   // Đồng bộ hóa khi ảnh lớn thay đổi thì ảnh nhỏ dưới cũng thay đổi theo
//   $(".carousel").on("slid.bs.carousel", function (e) {
//     var activeIndex = $(this).find(".carousel-item.active").index();
//     var thumbnails = $(this).next(".carousel-thumbnails").find(".thumbnail");
//     thumbnails.removeClass("active");
//     thumbnails.eq(activeIndex).addClass("active");
//   });
// });
// //
// for (let i = 1; i <= 3; i++) {
//   document
//     .getElementById(`showPopup${i}`)
//     .addEventListener("click", function () {
//       document.getElementById(`popuppopup${i}`).style.display = "block";
//     });

//   document
//     .getElementById(`closePopupPopup${i}`)
//     .addEventListener("click", function () {
//       document.getElementById(`popuppopup${i}`).style.display = "none";
//     });
// }



// hiển thị/ ẩn menu bar cho menubars button
const menuBarBtn = document.querySelector(".menu-bars");
const sideBarRight = document.querySelector(".sideBar");
menuBarBtn.addEventListener("click",function(){
  sideBarRight.classList.toggle("sideBar-left-phone");
})
  // Xử lý hiệu ứng hiện ẩn thanh tìm kiếm
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


// Một chút animation cho login sign up button 
const loginBtn=document.querySelector(".login");
const signInBtn=document.querySelector(".sign-up");
const signInText=document.querySelector(".button-sign_up")

loginBtn.addEventListener("mouseover",function(){
  headerBtn.style.backgroundPosition = "center left";
  signInText.style.color = "#007bff";
})
loginBtn.addEventListener("mouseout",function(){
  headerBtn.style.backgroundPosition = "center right";
  signInText.style.color = "#fff";
})