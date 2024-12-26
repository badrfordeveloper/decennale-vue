$(".nav").each(function () {
  let n = $(".nav"),
    e = "is-active",
    t = "0%",
    i = "auto",
    r = () => {
      $(window).scrollTop() > 0 ? (n.addClass(e), n.css("top", t)) : (n.removeClass(e), n.css("top", i));
    };
  r(),
    $(window).scroll(r),
    $(".nav-burger").click(function () {
      let s = $(this).data("clicks");
      s ? $("body").removeClass("open") : $("body").addClass("open"), $(this).data("clicks", !s);
    }),
    $(window).resize(function () {
      $("body").hasClass("open") && $(window).width() >= 768 && $("body").removeClass("open");
    }),
    $(".navigation-list_item").each(function () {
      let s = Le.timeline({ paused: !0 }),
        a = $(this).find(".navigation_dropdown-list-item"),
        o = $(this).find(".navigation_dropdown-card");
      a.length && s.fromTo(a, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.02, ease: "power2.inOut" }),
        o.length && s.fromTo(o, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.inOut" }, "-=0.2"),
        $(this).on("mouseover", function () {
          s.play();
        }),
        $(this).on("mouseleave", function () {
          s.reverse();
        }),
        $(".navigation_dropdown-content").on("contextmenu", function (l) {
          l.preventDefault();
        });
    });
});