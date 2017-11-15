function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function openN() {
   $("#myBurguer").css({'width':'50%'});
};

function closeN() {
    $("#myBurguer").css({'width':'0%'});
};

var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.item').length;
var scroller = d.querySelector('.scroller');
var pos = 0;
var transform = ('transform');

function setTransform() {
  items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, itemCount - 1);
  setTransform();
}

window.addEventListener('resize', setTransform);
$('.home').hover(function(){
  $('#info1').text("home");
})


$('#game').on('mouseover',function(){
$('#one').css({'width':'100%','transition':'1.5s'});
$('#p1').css({'opacity':'1','transition':'4s'});
$('#d1').css({'opacity':'1','transition':'4s'});
});

$('#game').on('mouseleave',function(){
$('#one').css({'width':'30%','transition':'1.5s'});
$('#p1').css({'opacity':'0','transition':'0.5s'});
$('#d1').css({'opacity':'0','transition':'0.5s'});
//$('#about_me').css({'opacity':'1','transition':'1.5s'});
});

$('#travel').on('mouseover',function(){
$('#two').css({'width':'100%','transition':'1.5s'});
$('#p2').css({'opacity':'1','transition':'4s'});
$('#d2').css({'opacity':'1','transition':'4s'});
});
$('#travel').on('mouseleave',function(){
$('#two').css({'width':'30%','transition':'1.5s'});
$('#p2').css({'opacity':'0','transition':'0.5s'});
$('#d2').css({'opacity':'0','transition':'0.5s'});
});

$('#activism').on('mouseover',function(){
$('#three').css({'width':'100%','transition':'1.5s'});
$('#p3').css({'opacity':'1','transition':'4s'});
$('#d3').css({'opacity':'1','transition':'4s'});
});
$('#activism').on('mouseleave',function(){
$('#three').css({'width':'30%','transition':'1.5s'});
$('#p3').css({'opacity':'0','transition':'0.5s'});
$('#d3').css({'opacity':'0','transition':'0.5s'});
});

$('#finance').on('mouseover',function(){
$('#four').css({'width':'100%','transition':'1.5s'});
$('#p4').css({'opacity':'1','transition':'4s'});
$('#d4').css({'opacity':'1','transition':'4s'});
});
$('#finance').on('mouseleave',function(){
$('#four').css({'width':'30%','transition':'1.5s'});
$('#p4').css({'opacity':'0','transition':'0.5s'});
$('#d4').css({'opacity':'0','transition':'0.5s'});
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$('.home').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#index').offset().top
      },3000);
 return false;
});

$('.work').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#contac').offset().top
      },2000);
 return false;
});

$('.contact').on('click',function(){
 $('html,body').animate({
        scrollTop: $('#contact_form').offset().top
      },2000);
 return false;
});

$('.inside_nav1').on('click',function(){
 closeN();
 $('html,body').animate({
        scrollTop: $('#index').offset().top
      },2000);
 return false;
});

$('.inside_nav2').on('click',function(){
 closeN();
 $('html,body').animate({
        scrollTop: $('#contac').offset().top
      },2000);
 return false;
});

$('.inside_nav3').on('click',function(){
 closeN();
 $('html,body').animate({
        scrollTop: $('#contact_form').offset().top
      },2000);
 return false;
});

$('.inside_nav4').on('click',function(){
 closeN();
window.open('http://localhost:8000/files/resume.pdf');
 if(window.open('http://localhost:8000/files/resume.pdf')===true){
  link.focus();
 }else{
  alert("Please allow popups for this website");
 }
 return false;
});

$('.resume').on('click',function(){
window.open('http://localhost:8000/files/resume.pdf');
 if(window.open('http://localhost:8000/files/resume.pdf')===true){
  link.focus();
 }else{
  alert("Please allow popups for this website");
 }
 return false;
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  $("#result").text("");
  var email = $("#segundo").val();
  if (validateEmail(email)) {
    $("#result").text(email + " is valid :)");
    $("#result").css("color", "#008180");
  } else {
    $("#result").text(email + " is not valid :(");
    $("#result").css("color", "red");
  }
  return false;
}

$("#segundo").on("change", validate);


$(window).on('load',function(){
     $('#loader').fadeOut();
});

$('#subm').on('click', function(){
  $('#loader').show();
});

$('#b').on('click',function(){
  window.history.go(-1);
});


