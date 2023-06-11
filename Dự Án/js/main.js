$(document).ready(function() {
    $(".menu").click(function() {
        $("nav").slideToggle();
    });
});
var slideIndex = 1;
        showSlides(slideIndex);

//  plusSlides để di chuyển giữa các slide

        function plusSlides(n) {
        showSlides(slideIndex += n);
        }

// currentSlide để hiển thị slide được click vào

        function currentSlide(n) {
        showSlides(slideIndex = n);
        }

//  showSlides để hiển thị slide hiện tại và ẩn các slide khác

        function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

// Nếu chỉ số slide vượt quá chiều dài của mảng slide, hoặc nhỏ hơn 1,
// sẽ thiết lập lại slideIndex để hiển thị slide đầu tiên
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}

// Lặp qua tất cả các slide và ẩn chúng bằng thuộc tính display

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // Xóa lớp "active" khỏi tất cả các điểm chuyển đổi

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

// Hiển thị slide hiện tại bằng thuộc tính display 
// và thêm lớp "active" vào điểm chuyển đổi tương ứng

        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
        }
        
        // đoạn này là set tg cho nó là 5s
        

        setInterval(function(){plusSlides(1)}, 5000);



        
var c1=document.getElementById('c1');
var c2=document.getElementById('c2');
var c3=document.getElementById('c3');
const root = document.querySelector(':root');

c1.addEventListener('click', function() {
  root.style.setProperty('--color2', '#009943');
  localStorage.setItem('pickColor', '#009943');})

c2.addEventListener('click', function() {
  root.style.setProperty('--color2', '#e2bb10');
  localStorage.setItem('pickColor', '#e2bb10');})

c3.addEventListener('click', function(){
  root.style.setProperty('-color2', '#0fe3ea');
  localStorage.setItem('pickColor', '#0fe3ea');})

function loadTheme(){
  if (localStorage.getItem('pickColor') != '') {
    root.style.setProperty('--color2',
    localStorage.getItem('pickColor') );
}} 