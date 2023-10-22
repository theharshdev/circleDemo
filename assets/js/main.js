$(".lightToggle").click(function () {
   document.cookie = "lightMode = lightModeOn; max-age=" + 60 * 60 * 24 * 120;
   document.cookie = "darkMode = ";
   $("html").removeClass("dark");
   $(".lightToggle").hide();
   $(".darkToggle").show();
});

$(".darkToggle").click(function () {
   document.cookie = "darkMode = darkModeOn; max-age=" + 60 * 60 * 24 * 120;
   document.cookie = "lightMode = ";
   $("html").addClass("dark");
   $(".lightToggle").show();
   $(".darkToggle").hide();
});

window.addEventListener("load", () => {
   if (document.cookie.includes("lightModeOn")) {
      $("html").removeClass("dark");
      $(".lightToggle").hide();
      $(".darkToggle").show();
   }
});

window.addEventListener("load", () => {
   if (document.cookie.includes("darkModeOn")) {
      $("html").addClass("dark");
      $(".lightToggle").show();
      $(".darkToggle").hide();
   }
});

$(".openMenu").click(() => {
   $(".menuBar").slideDown(300);
   $(".closeMenu").show();
   $(".openMenu").hide();
});

$(".closeMenu").click(() => {
   $(".menuBar").slideUp(300);
   $(".openMenu").show();
   $(".closeMenu").hide();
});

$(".navLinks").click(() => {
   let windowWidth = window.innerWidth;
   if (windowWidth < 768) {
      $(".menuBar").slideUp(300);
      $(".openMenu").show();
      $(".closeMenu").hide();
   }
});

window.addEventListener("resize", () => {
   let windowWidth = window.innerWidth;
   if (windowWidth > 768) {
      $(".menuBar").show();
      $(".openMenu").hide();
      $(".closeMenu").hide();
   } else {
      $(".menuBar").hide();
      $(".openMenu").show();
      $(".closeMenu").hide();
   }
});

$(window).scroll(function () {
   let scroll = $(window).scrollTop();
   if (scroll > 100) {
      $(".navBar").addClass("bg-white/95 dark:bg-slate-800/95 shadow-xl");
   } else {
      $(".navBar").removeClass("bg-white/95 dark:bg-slate-800/95 shadow-xl");
   }
});
