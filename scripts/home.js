
/*************SUBPAGE SCROLLING**********************/
var page_url = window.location.href;
var page_id = page_url.substring(page_url.lastIndexOf('#') + 1);
if(page_id == "blog") {
 var windowHeight = window.innerWidth;
  if(windowHeight <= 750){
     $("html,body").animate({
         scrollTop: $("#scroll-" + page_id).offset().top
     });
  }else {
     $("html,body").animate({
         scrollTop: $("#scroll-" + page_id).offset().top - 60
     });
  }
}
/**************USER AUTHENTICATION STATUS*****************/
const $loginBtn = $('#login-btn');
const $logoutBtn = $('#logout-btn');
const $loginContainer = $('#login-container');
const $wish = $('#wish');
const $form = $('.form');
const $userEmail = $('#user-email');
const $notific = $('#notifications');
const $suggetionBox = $('.suggetion-box');
const $lockArticles = $('.lock-articles');
const $unlockArticles = $('.unlock-articles');
const $lockArticlesBtn = $('.lock-articles-btn');
const $unlockArticlesBtn = $('.unlock-articles-btn');
function showAdmin() {
   $('#admin-link').css({'display':'block'});
}
auth.onAuthStateChanged(function(user){
 if(user) {
    $loginBtn.css({'display':'none'});
    $logoutBtn.css({'display':'block'});
    $lockArticles.hide();
    $unlockArticles.show();

    $wish.css({'display':'block'});
    database.collection('users').doc(user.uid).get().then(function(userDoc){
       const html = `Thank You...<br> <b>${userDoc.data().userName}</b> for Purchase Account.<br/>The Money You Pay for This Account is used to Donating Children`;
       $wish.html(html);
       //$wish.css({'border':'5px solid red'}); // CONSTUCTION
    });
    
    $form.css({'display':'none'});
    $loginContainer.css({'display':'flex','align-items':'center','justify-content':'center'});
    $userEmail.html("Logged in as " + user.email);
    $userEmail.css({'color':'#ffffff','background-color':'transparent','text-align':'left'});
    $notific.css({'display':'block'});
    $suggetionBox.css({'display':'block'});
    switch(user.uid) {
       case 'QiICBARLzYYu6lEM2xy8knUOsN62':
            showAdmin();
            break;
    }
    $lockArticlesBtn.css({'display':'none'});
    $unlockArticlesBtn.css({'display':'block'});
    loadUnlockArticles(0, 6, $unlockArticles);
 } else {
   $loginBtn.css({'display':'block'});
   $logoutBtn.css({'display':'none'});
   $unlockArticles.hide();
   $lockArticles.show();
    $wish.css({'display':'none'});
    $form.css({'display':'block'});
    $loginContainer.css({'display':'block'});
    $userEmail.html("");
    $notific.css({'display':'none'});
    $userEmail.html("Take an Account to Break the Lock");
    $userEmail.css({'color':'red','background-color':'#ffffff','text-align':'center'});
    $suggetionBox.css({'display':'none'});
    $('#admin-link').css({'display':'none'});
    $lockArticlesBtn.css({'display':'block'});
    $unlockArticlesBtn.css({'display':'none'});
    loadLockArticles(0, 6, $lockArticles);
 }
});
var blogs = [
     ['10 Quick Tips for Successful Exam Preparation', 'https://gdurl.com/lEP2', 'degree boy as a part time jober', 'articles/post/tips-for-exam-preparation.html'],
     ['Tips for balancing College Studies and Part - Time Job', 'https://gdurl.com/UUiF', 'degree boy as a part time jober', 'articles/post/collage-studies-and-part-time-job.html'],
     ['Self Defense For Girls: Everything You Need to Know','https://gdurl.com/rCTP','degree boy as a part time jober','articles/post/self-defense-for-girls.html'],
     ['Choosing the Right Study Materials', 'https://gdurl.com/j_ca', 'study meterial', 'articles/post/choosing-right-study-meterials.html'],
     ['Suicide and Depression Awareness for Students', 'https://gdurl.com/cckG', 'suicide student', 'articles/post/depretion-awarness-for-students.html'],
     ['How to Face an Interview for Freshers', 'https://gdurl.com/rCtm', 'fresher interview', 'articles/post/how-to-face-interview-for-freshers.html'],
     ['Study Apps for College Students', 'https://gdurl.com/JgJr', 'apps for students', 'articles/post/study-apps-for-collage-students.html'],
     ['money saving: how to apply ts bus pass online', 'https://gdurl.com/4Pie', 'bus', 'articles/post/how-to-apply-ts-buss-pass-online.html'],
     ['How to Break a Bad Habit and Replace It With a Good One', 'https://gdurl.com/eISU', 'Drinker', 'articles/post/break-bad-habits.html'] 
];
function loadLockArticles(start, articles, container) {
 let lockArticleHtml = "";
 for(var i = start; i < articles; i++) {
               lockArticleHtml += "<article>";
               lockArticleHtml += "<img src='" + blogs[i][1] + "' alt='" + blogs[i][2] +"'>";
               lockArticleHtml += "<div class='article-content'>";
               lockArticleHtml += "<h2>" + blogs[i][0] + "</h2>";
               lockArticleHtml += "<span class='lock-btn'>";
               lockArticleHtml += "<i class='material-icons'>lock</i>Read</span>";
               lockArticleHtml += "</div>"
               lockArticleHtml += "</article>";
            }
 container.html(lockArticleHtml);
}
loadLockArticles(0, 6, $lockArticles);
function loadUnlockArticles(start, articles, container) {
 let articleHtml = "";
          for(var i = start; i < articles; i++) {
             articleHtml += "<article id='post" + i + "'>";
             articleHtml += "<img src='" + blogs[i][1] + "' alt='" + blogs[i][2] +"'>";
             articleHtml += "<div class='article-content'>";
             articleHtml += "<h2>" + blogs[i][0] + "</h2>";
             articleHtml += "<a href='" + blogs[i][3] + "' class='read-btn'>";
             articleHtml += "<i class='material-icons'>arrow_forward</i>Read</a>";
             articleHtml += "</div>"
             articleHtml += "</article>";
          }
container.html(articleHtml);  
}
loadUnlockArticles(0, 6, $unlockArticles);
/***********************SLIDER***********************/
$('.slider').each(function() {              
 var $this   = $(this);                    
 var $group  = $this.find('.slide-group'); 
 var $slides = $this.find('.slide');       
 var buttonArray  = [];                    
 var currentIndex = 0;                     
 var timeout;
 function move(newIndex) {          
   var animateLeft, slideLeft;      
   advance();                       
   if ($group.is(':animated') || currentIndex === newIndex) {  
     return;
   }
   buttonArray[currentIndex].removeClass('active'); 
   buttonArray[newIndex].addClass('active');        
   if (newIndex > currentIndex) {
     slideLeft = '100%';            
     animateLeft = '-100%';         
   } else {                         
     slideLeft = '-100%';           
     animateLeft = '100%';          
   }   
   $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );
   $group.animate( {left: animateLeft}, function() {    
     $slides.eq(currentIndex).css( {display: 'none'} );       
     $slides.eq(newIndex).css( {left: 0} ); 
     $group.css( {left: 0} );               
     currentIndex = newIndex;
   });
 }
 function advance() {
   clearTimeout(timeout);                 
   timeout = setTimeout(function() {      
     if (currentIndex < ($slides.length - 1)) {
       move(currentIndex + 1);            
     } else {                             
       move(0);
     }
   }, 2500);
 }
 $.each($slides, function(index) {   
   var $button = $('<button type="button" class="slide-btn">&bull;</button>');
   if (index === currentIndex) {    
     $button.addClass('active');    
   }
   $button.on('click', function() { 
     move(index);                   
   }).appendTo('.slide-buttons');   
   buttonArray.push($button);       
 });
 advance();                          
});
/********************ARTICLES BUTTON**********************/
$lockArticlesBtn.on('click', function(){
 loadLockArticles(0, 9, $lockArticles);
 $(this).hide();
});
$unlockArticlesBtn.on('click', function(){
 loadUnlockArticles(0, 9, $unlockArticles);
 $(this).hide();
});
/********************LOGIN FORM***************************/
$('#login-form').on('submit', function(e) {
 e.preventDefault();
 const email = $(this).find('#login-email').val();
 const password = $(this).find('#login-password').val();
 auth.signInWithEmailAndPassword(email, password).then(function(){
   document.getElementById('login-form').reset();
 }).catch(function(err){
   window.alert(err.message);
 });
});
/********************USER SIGNOUT**********************/
$logoutBtn.on('click', function(e) {
   e.preventDefault();
   auth.signOut();
});
/**************NAV LINK SCROLLING*****************/
   $('.nav-link').on('click', function(e){
      e.preventDefault();
      var href = $(this).attr('href');
      var headerHeightNav = $('header').outerHeight(true);
      var windowHeight = window.innerWidth;
      if(windowHeight <= 750) {
        $('html, body').animate({
         scrollTop: $(href).offset().top - headerHeightNav + 60
        }, 1000);
      } else {
       $('html, body').animate({
         scrollTop: $(href).offset().top - headerHeightNav
       }, 1000);
      }
   });