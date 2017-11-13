$(function(){
    
//button__a hover
$(".button_main-desc").hover(
    (function(){
    $(".button__a").css( "color", "#ffffff" );
    }), (function(){
    $(".button__a").css( "color", "#ff2d2d" );
}));
   
//спрятанный параграф  
$(".button_serv-desc").click(function(){
    $(".serv-desc__p_hidden").toggle();
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
        $(this).animate({bottom:'-120px'});
    }
    else {
        $(this).animate({bottom:'0px'});
    }
});

//лайтбокс        
$(".product-image_a").click(function(e){
    e.preventDefault();
    var image_href = $(this).attr("href");
    $("#lightbox-img").attr("src",image_href);
    $("#lightbox").show();
});

$("#lightbox").on("click", function() { 
		$(this).hide();
});
    
    
//смена изображений в портфолио
allThumbs = [
    "./img/products/print/thumbnails/print-img-1-thumb.jpg",
    "./img/products/web/thumbnails/web-img-1-thumb.jpg",
    "./img/products/print/thumbnails/print-img-3-thumb.jpg",
    "./img/products/web/thumbnails/web-img-2-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-1-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-1-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-2-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-2-thumb.jpg"
];

all = [
    "./img/products/print/print-img-1.jpg",
    "./img/products/web/web-img-1.jpg",
    "./img/products/print/print-img-3.jpg",
    "./img/products/web/web-img-2.jpg",
    "./img/products/ui/ui-img-1.jpg",
    "./img/products/mockup/mockup-img-1.jpg",
    "./img/products/ui/ui-img-2.jpg",
    "./img/products/mockup/mockup-img-2.jpg"
];

$(".products-menu__link_all").on("click", function() {
    $("a.product-image_a img").each(function(i) {
        $(this).attr("src", allThumbs[i]);
        i++;
    });
});
    
$(".products-menu__link_all").on("click", function() {
    $("a.product-image_a").each(function(i) {
        $(this).attr("href", all[i]);
        i++;
    });
});    
    
printThumbs = [
    "./img/products/print/thumbnails/print-img-1-thumb.jpg",
    "./img/products/print/thumbnails/print-img-2-thumb.jpg",
    "./img/products/print/thumbnails/print-img-3-thumb.jpg",
    "./img/products/print/thumbnails/print-img-4-thumb.jpg",
    "./img/products/print/thumbnails/print-img-5-thumb.jpg",
    "./img/products/print/thumbnails/print-img-6-thumb.jpg",
    "./img/products/print/thumbnails/print-img-7-thumb.jpg",
    "./img/products/print/thumbnails/print-img-8-thumb.jpg"
];

print = [
    "./img/products/print/print-img-1.jpg",
    "./img/products/print/print-img-2.jpg",
    "./img/products/print/print-img-3.jpg",
    "./img/products/print/print-img-4.jpg",
    "./img/products/print/print-img-5.jpg",
    "./img/products/print/print-img-6.jpg",
    "./img/products/print/print-img-7.jpg",
    "./img/products/print/print-img-8.jpg"
];

$(".products-menu__link_print").on("click", function() {
    $("a.product-image_a img").each(function(i) {
        $(this).attr("src", printThumbs[i]);
        i++;
    });
});
    
$(".products-menu__link_print").on("click", function() {
    $("a.product-image_a").each(function(i) {
        $(this).attr("href", print[i]);
        i++;
    });
});

webThumbs = [
    "./img/products/web/thumbnails/web-img-1-thumb.jpg",
    "./img/products/web/thumbnails/web-img-2-thumb.jpg",
    "./img/products/web/thumbnails/web-img-3-thumb.jpg",
    "./img/products/web/thumbnails/web-img-4-thumb.jpg",
    "./img/products/web/thumbnails/web-img-5-thumb.jpg",
    "./img/products/web/thumbnails/web-img-6-thumb.jpg",
    "./img/products/web/thumbnails/web-img-7-thumb.jpg",
    "./img/products/web/thumbnails/web-img-8-thumb.jpg"
];

web = [
    "./img/products/web/web-img-1.jpg",
    "./img/products/web/web-img-2.jpg",
    "./img/products/web/web-img-3.jpg",
    "./img/products/web/web-img-4.jpg",
    "./img/products/web/web-img-5.jpg",
    "./img/products/web/web-img-6.jpg",
    "./img/products/web/web-img-7.jpg",
    "./img/products/web/web-img-8.jpg"
];

$(".products-menu__link_web").on("click", function() {
    $("a.product-image_a img").each(function(i) {
        $(this).attr("src", webThumbs[i]);
        i++;
    });
});
    
$(".products-menu__link_web").on("click", function() {
    $("a.product-image_a").each(function(i) {
        $(this).attr("href", web[i]);
        i++;
    });
});

uiThumbs = [
    "./img/products/ui/thumbnails/ui-img-1-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-2-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-3-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-4-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-5-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-6-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-7-thumb.jpg",
    "./img/products/ui/thumbnails/ui-img-8-thumb.jpg"
];

ui = [
    "./img/products/ui/ui-img-1.jpg",
    "./img/products/ui/ui-img-2.jpg",
    "./img/products/ui/ui-img-3.jpg",
    "./img/products/ui/ui-img-4.jpg",
    "./img/products/ui/ui-img-5.jpg",
    "./img/products/ui/ui-img-6.jpg",
    "./img/products/ui/ui-img-7.jpg",
    "./img/products/ui/ui-img-8.jpg"
];

$(".products-menu__link_ui").on("click", function() {
    $("a.product-image_a img").each(function(i) {
        $(this).attr("src", uiThumbs[i]);
        i++;
    });
});
    
$(".products-menu__link_ui").on("click", function() {
    $("a.product-image_a").each(function(i) {
        $(this).attr("href", ui[i]);
        i++;
    });
});
    
mockUpThumbs = [
    "./img/products/mockup/thumbnails/mockup-img-1-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-2-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-3-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-4-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-5-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-6-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-7-thumb.jpg",
    "./img/products/mockup/thumbnails/mockup-img-8-thumb.jpg"
];

mockUp = [
    "./img/products/mockup/mockup-img-1.jpg",
    "./img/products/mockup/mockup-img-2.jpg",
    "./img/products/mockup/mockup-img-3.jpg",
    "./img/products/mockup/mockup-img-4.jpg",
    "./img/products/mockup/mockup-img-5.jpg",
    "./img/products/mockup/mockup-img-6.jpg",
    "./img/products/mockup/mockup-img-7.jpg",
    "./img/products/mockup/mockup-img-8.jpg"
];

$(".products-menu__link_mockup").on("click", function() {
    $("a.product-image_a img").each(function(i) {
        $(this).attr("src", mockUpThumbs[i]);
        i++;
    });
});
    
$(".products-menu__link_mockup").on("click", function() {
    $("a.product-image_a").each(function(i) {
        $(this).attr("href", mockUp[i]);
        i++;
    });
}); 
    
    
//смена фото члена команды
$(".member-photo").click(function(e){
    e.preventDefault();
    var image_href = $(this).attr("href");
    $(".member-photo_selected").attr("src",image_href);
});

    
//смена информации члена команды
var mark={
    name: "Mark Waugh",
    specDesc: "Lorem ipsum dolor sit amet, consectetur adipis cing elit,sed do eiusmod tempor incididunt ut labore et.",
    socialLinkFacebook: "https://www.facebook.com/markwaugh",
    socialLinkDribble: "https://dribbble.com/markwaugh",
    socialLinkBehance: "https://www.behance.net/markwaugh",
    socialLinkTwitter: "https://twitter.com/markwaugh"
};   
    
var erica={
    name: "Erica May",
    specDesc: "Lorem ipsum dolor sitea amet, zixf conseit adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore.",
    socialLinkFacebook: "https://www.facebook.com/ericamay",
    socialLinkDribble: "https://dribbble.com/ericamay",
    socialLinkBehance: "https://www.behance.net/ericamay",
    socialLinkTwitter: "https://twitter.com/ericamay"
}; 
    
var joey={
    name: "Joey Jordison",
    specDesc: "Eiusmod tempor incididunt ut labore et. ur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.",
    socialLinkFacebook: "https://www.facebook.com/joeyjordison",
    socialLinkDribble: "https://dribbble.com/joeyjordison",
    socialLinkBehance: "https://www.behance.net/joeyjordison",
    socialLinkTwitter: "https://twitter.com/joeyjordison"
}; 
    
var lisa={
    name: "Lisa Ann",
    specDesc: "Amet, zixf conseit adipi cing elit, seddi do eiusmod btdempor in didunt utlae ore etioe. Lorem ipsum new idolor",
    socialLinkFacebook: "https://www.facebook.com/lisaann",
    socialLinkDribble: "https://dribbble.com/lisaann",
    socialLinkBehance: "https://www.behance.net/lisaann",
    socialLinkTwitter: "https://twitter.com/lisaann"
};   
   
    
$(".member-photo_mark").click(function(){
    $(".member-photo_selected").attr("alt",mark.name);
    $(".team-member__name").text(mark.name);
    $(".team-member__spec").text(mark.specDesc);
    $(".team_member__social-link_fb").attr("href",mark.socialLinkFacebook);
    $(".team_member__social-link_dribble").attr("href",mark.socialLinkDribble);
    $(".team_member__social-link_behance").attr("href",mark.socialLinkBehance);
    $(".team_member__social-link_twitter").attr("href",mark.socialLinkTwitter);
});
       
$(".member-photo_erica").click(function(){
    $(".member-photo_selected").attr("alt",erica.name);
    $(".team-member__name").text(erica.name);
    $(".team-member__spec").text(erica.specDesc);
    $(".team_member__social-link_fb").attr("href",erica.socialLinkFacebook);
    $(".team_member__social-link_dribble").attr("href",erica.socialLinkDribble);
    $(".team_member__social-link_behance").attr("href",erica.socialLinkBehance);
    $(".team_member__social-link_twitter").attr("href",erica.socialLinkTwitter);
});
        
$(".member-photo_joey").click(function(){
    $(".member-photo_selected").attr("alt",joey.name);
    $(".team-member__name").text(joey.name);
    $(".team-member__spec").text(joey.specDesc);
    $(".team_member__social-link_fb").attr("href",joey.socialLinkFacebook);
    $(".team_member__social-link_dribble").attr("href",joey.socialLinkDribble);
    $(".team_member__social-link_behance").attr("href",joey.socialLinkBehance);
    $(".team_member__social-link_twitter").attr("href",joey.socialLinkTwitter);
});
    
$(".member-photo_lisa").click(function(){
    $(".member-photo_selected").attr("alt",lisa.name);
    $(".team-member__name").text(lisa.name);
    $(".team-member__spec").text(lisa.specDesc);
    $(".team_member__social-link_fb").attr("href",lisa.socialLinkFacebook);
    $(".team_member__social-link_dribble").attr("href",lisa.socialLinkDribble);
    $(".team_member__social-link_behance").attr("href",lisa.socialLinkBehance);
    $(".team_member__social-link_twitter").attr("href",lisa.socialLinkTwitter);
});    
    
 
//валидация форм  
$(function() {
$(".form-check").each(function(){

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;      
var form = $(this),
btn = form.find(".submit-button");
      
form.find(".field-check").addClass("empty-field");
form.find(".email-field").addClass("empty-field"); 
    
function mailFieldCheck(){
    form.find(".email-field").each(function(){
        if($(this).val().match(mailformat)){ 
		$(this).removeClass("empty-field");
        } else {
		$(this).addClass("empty-field");
        }
    }); 
}
    
function fieldCheck(){
    form.find(".field-check").each(function(){
    if($(this).val() != ''){ 
		$(this).removeClass("empty-field");
        } else {
		$(this).addClass("empty-field");
        }
    });    
}


function lightEmptyField (){
    form.find(".empty-field").css("border", "2px solid #ff2d2d");
    setTimeout(function(){
        form.find(".empty-field").removeAttr("style");
    },800);
}

setInterval(function(){
    mailFieldCheck();
    fieldCheck();
    
    var sizeEmpty = form.find(".empty-field").length;
    
    if(sizeEmpty > 0){
        if(btn.hasClass("disabled")){
        return false
    } else {
          btn.addClass("disabled")
      }
    } else {
        btn.removeClass("disabled")
      }
    },500);

btn.click(function(){
    if($(this).hasClass("disabled")){
    lightEmptyField();
    return false
    } else {
    form.submit();
    }
});
    
});
});   

    
});