var limiter = {
    allowed: 0, 
    counter: null, 
    textarea: null, 
    init: function(max, counter, textarea){
      limiter.allowed = max;
      limiter.counter = counter;
      limiter.counter.innerHTML = limiter.allowed;
      limiter.textarea = textarea;
      limiter.textarea.setAttribute("maxlength", limiter.allowed);
      limiter.textarea.addEventListener("keyup", limiter.update);
      limiter.textarea.removeAttribute("disabled");
    },
    update: function(evt){
      let remain = limiter.allowed - limiter.textarea.value.length;
      limiter.counter.innerHTML = remain;
    },
  };
  window.onload = function(){
    limiter.init(
      1000,
      document.getElementById("remain"),
      document.getElementById("textin")
    );
  }; 
  const friend_request = document.getElementById("req-btn");
const friend_request_area = document.getElementById("friend-req-area");
friend_request.onclick = function(){
  if(window.getComputedStyle(friend_request_area).display === "none") {
    friend_request_area.style.display="block";
  }else{
    friend_request_area.style.display="none";
  }
} 


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}