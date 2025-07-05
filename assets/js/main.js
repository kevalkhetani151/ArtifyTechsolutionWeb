!(function (e) {
  "use strict";
  function t(t) {
    e(t).length > 0 &&
      e(t).each(function () {
        var t = e(this).find("a");
        e(this)
          .find(t)
          .each(function () {
            e(this).on("click", function () {
              var t = e(this.getAttribute("href"));
              t.length &&
                (event.preventDefault(),
                e("html, body")
                  .stop()
                  .animate({ scrollTop: t.offset().top - 10 }, 1e3));
            });
          });
      });
  }
  function a() {
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
      e("[data-ani-delay]").each(function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t);
      });
  }
  function a() {
    e("[data-ani]").each(function () {
      var t = e(this).data("ani");
      e(this).addClass(t);
    }),
      e("[data-ani-delay]").each(function () {
        var t = e(this).data("ani-delay");
        e(this).css("animation-delay", t);
      });
  }
  e(window).on("load", function () {
    e(".preloader").fadeOut();
  }),
    e(document).on("click", ".preloaderCls", function (t) {
      t.preventDefault(), e(".preloader").css("display", "none");
    }),
    e(".nice-select").length && e(".nice-select").niceSelect(),
    (e.fn.thmobilemenu = function (t) {
      var a = e.extend(
        {
          menuToggleBtn: ".th-menu-toggle",
          bodyToggleClass: "th-body-visible",
          subMenuClass: "th-submenu",
          subMenuParent: "menu-item-has-children",
          thSubMenuParent: "th-item-has-children",
          subMenuParentToggle: "th-active",
          meanExpandClass: "th-mean-expand",
          subMenuToggleClass: "th-open",
          toggleSpeed: 400,
        },
        t
      );
      return this.each(function () {
        var t = e(this);
        function n() {
          t.toggleClass(a.bodyToggleClass);
          var n = "." + a.subMenuClass;
          e(n).each(function () {
            e(this).hasClass(a.subMenuToggleClass) &&
              (e(this).removeClass(a.subMenuToggleClass),
              e(this).css("display", "none"),
              e(this).parent().removeClass(a.subMenuParentToggle));
          });
        }
        t.find("." + a.subMenuParent).each(function () {
          var t = e(this).find("ul");
          t.addClass(a.subMenuClass),
            t.css("display", "none"),
            e(this).addClass(a.subMenuParent),
            e(this).addClass(a.thSubMenuParent),
            e(this).children("a").append(a.appendElement);
        });
        var i = "." + a.thSubMenuParent + " > a";
        e(i).each(function () {
          e(this).on("click", function (t) {
            var n, i;
            t.preventDefault(),
              (n = e(this).parent()),
              (i = n.children("ul")).length > 0 &&
                (n.toggleClass(a.subMenuParentToggle),
                i.slideToggle(a.toggleSpeed),
                i.toggleClass(a.subMenuToggleClass));
          });
        }),
          e(a.menuToggleBtn).each(function () {
            e(this).on("click", function () {
              n();
            });
          }),
          t.on("click", function (e) {
            e.stopPropagation(), n();
          }),
          t.find("div").on("click", function (e) {
            e.stopPropagation();
          });
      });
    }),
    e(".th-menu-wrapper").thmobilemenu(),
    e(window).scroll(function () {
      e(this).scrollTop() > 500
        ? (e(".sticky-wrapper").addClass("sticky"),
          e(".category-menu").addClass("close-category"))
        : (e(".sticky-wrapper").removeClass("sticky"),
          e(".category-menu").removeClass("close-category"));
    }),
    e(document).on("click", ".menu-expand", function (t) {
      t.preventDefault(), e(".category-menu").toggleClass("open-category");
    }),
    t(".onepage-nav"),
    t(".scroll-down"),
    e(window).on("scroll", function () {
      e(".onepage-nav").length;
    }),
    e(document).ready(function () {
      if (e(".scroll-top").length > 0) {
        var t = e(".scroll-top")[0],
          a = e(".scroll-top path")[0],
          n = a.getTotalLength();
        (a.style.transition = a.style.WebkitTransition = "none"),
          (a.style.strokeDasharray = n + " " + n),
          (a.style.strokeDashoffset = n),
          a.getBoundingClientRect(),
          (a.style.transition = a.style.WebkitTransition =
            "stroke-dashoffset 10ms linear");
        var i = function () {
          var t = e(window).scrollTop(),
            i = e(document).height() - e(window).height(),
            s = n - (t * n) / i;
          a.style.strokeDashoffset = s;
        };
        i(), e(window).on("scroll", i);
        e(window).on("scroll", function () {
          e(this).scrollTop() > 50
            ? e(t).addClass("show")
            : e(t).removeClass("show");
        }),
          e(t).on("click", function (t) {
            return (
              t.preventDefault(),
              e("html, body").animate({ scrollTop: 0 }, 750),
              !1
            );
          });
      }
    }),
    e("[data-bg-src]").length > 0 &&
      e("[data-bg-src]").each(function () {
        var t = e(this).attr("data-bg-src");
        e(this).css("background-image", "url(" + t + ")"),
          e(this).removeAttr("data-bg-src").addClass("background-image");
      }),
    e("[data-bg-color]").length > 0 &&
      e("[data-bg-color]").each(function () {
        var t = e(this).attr("data-bg-color");
        e(this).css("background-color", t), e(this).removeAttr("data-bg-color");
      }),
    e("[data-border]").each(function () {
      var t = e(this).data("border");
      e(this).css("--th-border-color", t);
    }),
    e("[data-mask-src]").length > 0 &&
      e("[data-mask-src]").each(function () {
        var t = e(this).attr("data-mask-src");
        e(this).css({
          "mask-image": "url(" + t + ")",
          "-webkit-mask-image": "url(" + t + ")",
        }),
          e(this).addClass("bg-mask"),
          e(this).removeAttr("data-mask-src");
      }),
    e(".th-slider").each(function () {
      var t = e(this),
        a = e(this).data("slider-options"),
        n = t.find(".slider-prev"),
        i = t.find(".slider-next"),
        s = t.find(".slider-pagination.pagi-number"),
        o = t.siblings(".slider-controller").find(".slider-pagination"),
        r = o.length ? o.get(0) : t.find(".slider-pagination").get(0),
        l = a.paginationType ? a.paginationType : "bullets",
        c = a.autoplay,
        d = {
          slidesPerView: 1,
          spaceBetween: a.spaceBetween || 24,
          loop: !1 !== a.loop,
          speed: a.speed || 1e3,
          autoplay: c || { delay: 6e3, disableOnInteraction: !1 },
          navigation: { nextEl: i.get(0), prevEl: n.get(0) },
          pagination: {
            el: r,
            type: l,
            clickable: !0,
            renderBullet: function (e, t) {
              var a = e + 1,
                n = a < 10 ? "0" + a : a;
              return s.length
                ? '<span class="' + t + ' number">' + n + "</span>"
                : '<span class="' +
                    t +
                    '" aria-label="Go to Slide ' +
                    n +
                    '"></span>';
            },
            formatFractionCurrent: function (e) {
              return e < 10 ? "0" + e : e;
            },
            formatFractionTotal: function (e) {
              return e < 10 ? "0" + e : e;
            },
          },
          on: {
            slideChange: function () {
              setTimeout(function () {
                p.params.mousewheel.releaseOnEdges = !1;
              }, 500);
            },
            reachEnd: function () {
              setTimeout(function () {
                p.params.mousewheel.releaseOnEdges = !0;
              }, 750);
            },
          },
        },
        u = JSON.parse(t.attr("data-slider-options"));
      u = e.extend({}, d, u);
      var p = new Swiper(t.get(0), u);
      if (
        (e(".slider-area").length > 0 &&
          e(".slider-area")
            .closest(".container")
            .parent()
            .addClass("arrow-wrap"),
        t.hasClass("categorySlider"))
      ) {
        const e = { translate: 0.1, rotate: 0.008 };
        !(function t() {
          requestAnimationFrame(t),
            document.querySelectorAll(".single").forEach((t) => {
              const a = t.getBoundingClientRect(),
                n = 0.5 * window.innerWidth - (a.x + 0.5 * a.width);
              let i = Math.abs(n) * e.translate - a.width * e.translate;
              i < 0 && (i = 0);
              const s = n < 0 ? "left top" : "right top";
              (t.style.transform = `translate(0, ${i}px) rotate(${
                -n * e.rotate
              }deg)`),
                (t.style.transformOrigin = s);
            });
        })();
      }
    }),
    a(),
    e(document).on(
      "click",
      "[data-slider-prev], [data-slider-next]",
      function () {
        var t = e(this).data("slider-prev") || e(this).data("slider-next"),
          a = e(t);
        if (a.length) {
          var n = a[0].swiper;
          n && (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
        }
      }
    ),
    a();
  var n = new Swiper(".heroThumbs", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: !0,
    watchSlidesProgress: !0,
    slideToClickedSlide: !0,
    navigation: { nextEl: ".slider-next", prevEl: ".slider-prev" },
  });
  (n = new Swiper(".hero-slider-2", {
    spaceBetween: 10,
    thumbs: { swiper: ".heroThumbs" },
    effect: "fade",
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 6e3, disableOnInteraction: !1 },
    loop: !0,
    watchSlidesProgress: !0,
  })),
    (n = new Swiper(".hero3Thumbs", {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: !0,
      watchSlidesProgress: !0,
    })),
    (n = new Swiper(".hero-slider-3", {
      thumbs: { swiper: n },
      loop: !0,
      effect: "fade",
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (e) {
          return "0" + e;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })),
    (n = new Swiper(".hero6Thumbs", {
      spaceBetween: 3,
      slidesPerView: 1,
      freeMode: !0,
      watchSlidesProgress: !0,
    })),
    (n = new Swiper(".hero-slider-6", {
      thumbs: { swiper: n },
      loop: !0,
      effect: "fade",
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (e) {
          return "" + e;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })),
    (n = new Swiper(".hero6Thumbs", {
      spaceBetween: 3,
      slidesPerView: 1,
      freeMode: !0,
      watchSlidesProgress: !0,
    })),
    (n = new Swiper(".hero-slider-6", {
      thumbs: { swiper: n },
      loop: !0,
      effect: "fade",
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (e) {
          return "" + e;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })),
    (n = new Swiper(".hero9Thumbs", {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: !0,
      watchSlidesProgress: !0,
    })),
    (n = new Swiper(".hero-slider-9", {
      thumbs: { swiper: n },
      loop: !0,
      effect: "fade",
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (e) {
          return "0" + e;
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })),
    (n = new Swiper(".hero10Thumbs", {
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: !0,
      watchSlidesProgress: !0,
    })),
    (n = new Swiper(".hero-slider-10", {
      spaceBetween: 10,
      thumbs: { swiper: n },
      effect: "fade",
      pagination: { el: ".swiper-pagination", type: "fraction" },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: { delay: 6e3, disableOnInteraction: !1 },
      loop: !0,
      watchSlidesProgress: !0,
    }));
  document.addEventListener(
    "mouseenter",
    (e) => {
      const t = e.target;
      if (t && t.matches && t.matches(".swiper-container")) {
        t.swiper.autoplay.stop(), t.classList.add("swiper-paused");
        t.querySelector(
          ".swiper-pagination-bullet-active"
        ).style.animationPlayState = "paused";
      }
    },
    !0
  ),
    document.addEventListener(
      "mouseleave",
      (e) => {
        const t = e.target;
        if (t && t.matches && t.matches(".swiper-container")) {
          t.swiper.autoplay.start(), t.classList.remove("swiper-paused");
          const e = t.querySelector(".swiper-pagination-bullet-active");
          e.classList.remove("swiper-pagination-bullet-active"),
            setTimeout(() => {
              e.classList.add("swiper-pagination-bullet-active");
            }, 10);
        }
      },
      !0
    ),
    e(document).ready(function () {
      e(document).on("click", ".service-list-wrap", function () {
        e(this).addClass("active").siblings().removeClass("active");
      }),
        e(".accordion-item-wrapp li:first-child").addClass("active"),
        e(".according-img-tab").hide(),
        e(".according-img-tab:first").show(),
        e(document).on(
          "mouseenter",
          ".accordion-item-wrapp .accordion-item-content",
          function () {
            e(".accordion-item-wrapp .accordion-item-content").removeClass(
              "active"
            ),
              e(".according-img-tab").hide();
            var t = e(this).find(".accordion-tab-item").attr("data-bs-target");
            return e(t).fadeIn(), !1;
          }
        ),
        e(document).on("mouseover", ".hover-item", function () {
          e(this).addClass("item-active"),
            e(".hover-item").removeClass("item-active"),
            e(this).addClass("item-active");
        });
    }),
    e(document).ready(function () {
      e(document)
        .find("[data-ani]")
        .each(function () {
          var t = e(this).data("ani");
          e(this).addClass(t);
        }),
        e(document)
          .find("[data-ani-delay]")
          .each(function () {
            var t = e(this).data("ani-delay");
            e(this).css("animation-delay", t);
          }),
        e(document).on(
          "click",
          "[data-slider-prev], [data-slider-next]",
          function () {
            var t = e(this).data("slider-prev") || e(this).data("slider-next"),
              a = e(t);
            if (a.length) {
              var n = a[0].swiper;
              n &&
                (e(this).data("slider-prev") ? n.slidePrev() : n.slideNext());
            }
          }
        );
    }),
    (e.fn.activateSliderThumbs = function (t) {
      var a = e.extend({ sliderTab: !1, tabButton: ".tab-btn" }, t);
      return this.each(function () {
        var t = e(this),
          n = t.find(a.tabButton),
          i = e('<span class="indicator"></span>').appendTo(t),
          s = t.data("slider-tab"),
          o = e(s)[0].swiper;
        if (
          (e(document).on("click", a.tabButton, function (t) {
            t.preventDefault();
            var n = e(this);
            if (
              (n.addClass("active").siblings().removeClass("active"),
              c(n),
              n.prevAll(a.tabButton).addClass("list-active"),
              n.nextAll(a.tabButton).removeClass("list-active"),
              a.sliderTab)
            ) {
              var i = n.index();
              o.slideTo(i);
            }
          }),
          a.sliderTab)
        ) {
          o.on("slideChange", function () {
            var e = o.realIndex,
              t = n.eq(e);
            t.addClass("active").siblings().removeClass("active"),
              c(t),
              t.prevAll(a.tabButton).addClass("list-active"),
              t.nextAll(a.tabButton).removeClass("list-active");
          });
          var r = o.activeIndex,
            l = n.eq(r);
          l.addClass("active").siblings().removeClass("active"),
            c(l),
            l.prevAll(a.tabButton).addClass("list-active"),
            l.nextAll(a.tabButton).removeClass("list-active");
        }
        function c(e) {
          var t = e.position(),
            a = parseInt(e.css("margin-top")) || 0,
            n = parseInt(e.css("margin-left")) || 0;
          i.css("--height-set", e.outerHeight() + "px"),
            i.css("--width-set", e.outerWidth() + "px"),
            i.css("--pos-y", t.top + a + "px"),
            i.css("--pos-x", t.left + n + "px");
        }
      });
    }),
    e(".product-thumb").length &&
      e(".product-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".team-thumb").length &&
      e(".team-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".testi-thumb").length &&
      e(".testi-thumb").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      }),
    e(".testi-thumb2").length &&
      e(".testi-thumb2").activateSliderThumbs({
        sliderTab: !0,
        tabButton: ".tab-btn",
      });
  var i = e(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: !0,
    masonry: { columnWidth: ".grid-item" },
  });
  e(".case-menu").on("click", "button", function () {
    var t = e(this).attr("data-filter");
    i.isotope({ filter: t });
  }),
    e(".portfolio-menu button").on("click", function (t) {
      e(this).siblings(".active").removeClass("active"),
        e(this).addClass("active"),
        t.preventDefault();
    }),
    e(".filter-active").imagesLoaded(function () {
      if (e(".filter-active").length > 0) {
        var t = e(".filter-active").isotope({
          itemSelector: ".filter-item",
          filter: "*",
          masonry: { columnWidth: 1 },
        });
        e(".filter-menu-active").on("click", "button", function () {
          var a = e(this).attr("data-filter");
          t.isotope({ filter: a });
        }),
          e(".filter-menu-active").on("click", "button", function (t) {
            t.preventDefault(),
              e(this).addClass("active"),
              e(this).siblings(".active").removeClass("active");
          });
      }
    }),
    e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
      function () {
        var t = ".masonary-active, .woocommerce-Reviews .comment-list";
        e(t).length > 0 &&
          e(t).isotope({
            itemSelector: ".filter-item, .woocommerce-Reviews .comment-list li",
            filter: "*",
            masonry: { columnWidth: 1 },
          }),
          e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (a) {
            e(t).isotope({ filter: "*" });
          });
      }
    );
  var s,
    o,
    r,
    l,
    c = ".ajax-contact",
    d = '[name="email"]',
    u = e(".form-messages");
  function p() {
    var t = e(c).serialize();
    (function () {
      var t,
        a = !0;
      function n(n) {
        n = n.split(",");
        for (var i = 0; i < n.length; i++)
          (t = c + " " + n[i]),
            e(t).val()
              ? (e(t).removeClass("is-invalid"), (a = !0))
              : (e(t).addClass("is-invalid"), (a = !1));
      }
      n(
        '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]'
      ),
        e(d).val() &&
        e(d)
          .val()
          .match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
          ? (e(d).removeClass("is-invalid"), (a = !0))
          : (e(d).addClass("is-invalid"), (a = !1));
      return a;
    })() &&
      jQuery
        .ajax({ url: e(c).attr("action"), data: t, type: "POST" })
        .done(function (t) {
          u.removeClass("error"),
            u.addClass("success"),
            u.text(t),
            e(c + ' input:not([type="submit"]),' + c + " textarea").val("");
        })
        .fail(function (e) {
            console.log("helllooooo responce is heeeeee")
            console.log(e)
          u.removeClass("success"),
            u.addClass("error"),
            "" !== e.responseText
              ? u.html(e.responseText)
              : u.html(
                  "Oops! An error occured and your message could not be sent."
                );
        });
  }
  function h(t, a, n, i) {
    e(document).on("click", a, function (a) {
      a.preventDefault(), e(t).addClass(i);
    }),
      e(document).on("click", function (n) {
        e(n.target).closest(t).length ||
          e(n.target).closest(a).length ||
          e(t).removeClass(i);
      }),
      e(document).on("click", t + " > div", function (a) {
        a.stopPropagation(), e(t).addClass(i);
      }),
      e(document).on("click", n, function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(i);
      });
  }
  function h(t, a, n, i) {
    e(a).on("click", function (a) {
      a.preventDefault(), e(t).addClass(i);
    }),
      e(t).on("click", function (a) {
        a.stopPropagation(), e(t).removeClass(i);
      }),
      e(t + " > div").on("click", function (a) {
        a.stopPropagation(), e(t).addClass(i);
      }),
      e(n).on("click", function (a) {
        a.preventDefault(), a.stopPropagation(), e(t).removeClass(i);
      });
  }
  if (
    (e(c).on("submit", function (e) {
      e.preventDefault(), p();
    }),
    (s = ".popup-search-box"),
    (o = ".searchBoxToggler"),
    (r = ".searchClose"),
    (l = "show"),
    e(document).on("click", o, function (t) {
      t.preventDefault(), e(s).addClass(l);
    }),
    e(document).on("click", function (t) {
      e(t.target).closest(s).length ||
        e(t.target).closest(o).length ||
        e(s).removeClass(l);
    }),
    e(document).on("click", s + " form", function (t) {
      t.stopPropagation(), e(s).addClass(l);
    }),
    e(document).on("click", r, function (t) {
      t.preventDefault(), t.stopPropagation(), e(s).removeClass(l);
    }),
    h(".sidemenu-wrapper", ".sideMenuToggler", ".sideMenuCls", "show"),
    h(".shopping-cart", ".sideMenuToggler2", ".sideMenuCls", "show"),
    e(document).ready(function () {
      var t = e("#filt-monthly"),
        a = e("#filt-yearly"),
        n = e("#switcher"),
        i = e("#monthly"),
        s = e("#yearly");
      e(".pricing-tabs").length &&
        (t.on("click", function () {
          n.prop("checked", !1),
            t.addClass("toggler--is-active"),
            a.removeClass("toggler--is-active"),
            i.removeClass("hide"),
            s.addClass("hide");
        }),
        a.on("click", function () {
          n.prop("checked", !0),
            a.addClass("toggler--is-active"),
            t.removeClass("toggler--is-active"),
            i.addClass("hide"),
            s.removeClass("hide");
        }),
        n.on("click", function () {
          a.toggleClass("toggler--is-active"),
            t.toggleClass("toggler--is-active"),
            i.toggleClass("hide"),
            s.toggleClass("hide");
        }));
    }),
    e(".popup-image").magnificPopup({
      type: "image",
      mainClass: "mfp-zoom-in",
      removalDelay: 260,
      gallery: { enabled: !0 },
    }),
    e(".popup-video").magnificPopup({ type: "iframe" }),
    e(".popup-content").magnificPopup({ type: "inline", midClick: !0 }),
    e(".th-anim").length)
  ) {
    gsap.registerPlugin(ScrollTrigger),
      document.querySelectorAll(".th-anim").forEach((e) => {
        let t = e.querySelector("img"),
          a = gsap.timeline({
            scrollTrigger: { trigger: e, toggleActions: "play none none none" },
          });
        a.set(e, { autoAlpha: 1 }),
          a.from(e, 1.5, { xPercent: -100, ease: Power2.out }),
          a.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out,
          });
      });
  }
  const m = document.querySelector(".slider-drag-cursor"),
    f = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    g = { x: f.x, y: f.y },
    v = gsap.quickSetter(m, "x", "px"),
    w = gsap.quickSetter(m, "y", "px");
  function b(e) {
    return parseInt(e, 10);
  }
  window.addEventListener("pointermove", (e) => {
    (g.x = e.x), (g.y = e.y);
  }),
    gsap.set(m, { xPercent: -50, yPercent: -50 }),
    gsap.ticker.add(() => {
      const e = 1 - Math.pow(0, gsap.ticker.deltaRatio());
      (f.x += (g.x - f.x) * e), (f.y += (g.y - f.y) * e), v(f.x), w(f.y);
    }),
    e(document)
      .on("mouseenter", ".slider-drag-wrap", function () {
        e(".slider-drag-cursor").addClass("active");
      })
      .on("mouseleave", ".slider-drag-wrap", function () {
        e(".slider-drag-cursor").removeClass("active");
      }),
    e(document)
      .on(
        "mouseenter",
        ".slider-drag-wrap a, .slider-drag-wrap .slider-pagination",
        function () {
          e(".slider-drag-cursor").removeClass("active");
        }
      )
      .on(
        "mouseleave",
        ".slider-drag-wrap a, .slider-drag-wrap .slider-pagination",
        function () {
          e(".slider-drag-cursor").addClass("active");
        }
      ),
    (e.fn.sectionPosition = function (t, a) {
      e(this).each(function () {
        var n,
          i,
          s,
          o,
          r,
          l = e(this);
        (n = Math.floor(l.height() / 2)),
          (i = l.attr(t)),
          (s = l.attr(a)),
          (o = b(e(s).css("padding-top"))),
          (r = b(e(s).css("padding-bottom"))),
          "top-half" === i
            ? (e(s).css("padding-bottom", r + n + "px"),
              l.css("margin-top", "-" + n + "px"))
            : "bottom-half" === i &&
              (e(s).css("padding-top", o + n + "px"),
              l.css("margin-bottom", "-" + n + "px"));
      });
    });
  function y() {
    e(".feature-circle .progressbar").each(function () {
      var t = e(this).attr("data-path-color"),
        a = e(this).offset().top,
        n = e(window).scrollTop(),
        i = e(this).find(".circle").attr("data-percent"),
        s = (parseInt(i, 10), parseInt(100, 10), e(this).data("animate"));
      a < n + e(window).height() - 30 &&
        !s &&
        (e(this).data("animate", !0),
        e(this)
          .find(".circle")
          .circleProgress({
            startAngle: -Math.PI / 2,
            value: i / 100,
            size: 100,
            thickness: 8,
            emptyFill: "#E4E4E4",
            lineCap: "round",
            fill: { color: t },
          })
          .on("circle-animation-progress", function (t, a, n) {
            e(this)
              .find(".circle-num")
              .text((100 * n).toFixed(0) + "%");
          })
          .stop());
    }),
      e(".about-circle .progressbar").each(function () {
        var t = e(this).offset().top,
          a = e(window).scrollTop(),
          n = e(this).find(".circle").attr("data-percent"),
          i = (parseInt(n, 10), parseInt(100, 10), e(this).data("animate"));
        t < a + e(window).height() - 30 &&
          !i &&
          (e(this).data("animate", !0),
          e(this)
            .find(".circle")
            .circleProgress({
              startAngle: -Math.PI / 2,
              value: n / 100,
              size: 160,
              thickness: 6,
              emptyFill: "#ffffff33",
              lineCap: "round",
              fill: { gradient: ["#0B59DB", "#0B59DB"] },
            })
            .on("circle-animation-progress", function (t, a, n) {
              e(this)
                .find(".circle-num")
                .text((100 * n).toFixed(0) + "%");
            })
            .stop());
      });
  }
  e("[data-sec-pos]").length &&
    e("[data-sec-pos]").imagesLoaded(function () {
      e("[data-sec-pos]").sectionPosition("data-sec-pos", "data-pos-for");
    }),
    y(),
    e(window).scroll(y),
    e(document).ready(function () {
      e(".filter-active").imagesLoaded(function () {
        var t = e(".filter-active");
        if (t.length > 0) {
          var a = t.isotope({
            itemSelector: ".filter-item",
            filter: "*",
            masonry: { columnWidth: 1 },
          });
          e(".filter-menu-active").on("click", "button", function () {
            var t = e(this).attr("data-filter");
            a.isotope({ filter: t });
          }),
            e(".filter-menu-active").on("click", "button", function (t) {
              t.preventDefault(),
                e(this)
                  .addClass("active")
                  .siblings(".active")
                  .removeClass("active");
            });
        }
      }),
        e(".masonary-active").imagesLoaded(function () {
          var t = e(".masonary-active");
          t.length > 0 &&
            t.isotope({
              itemSelector: ".filter-item",
              filter: "*",
              masonry: { columnWidth: 1 },
            });
        }),
        e(".masonary-active, .woocommerce-Reviews .comment-list").imagesLoaded(
          function () {
            var t = e(".masonary-active, .woocommerce-Reviews .comment-list");
            t.length > 0 &&
              t.isotope({
                itemSelector:
                  ".filter-item, .woocommerce-Reviews .comment-list li",
                filter: "*",
                masonry: { columnWidth: 1 },
              }),
              e('[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
                t.isotope({ filter: "*" });
              });
          }
        );
    }),
    e(".counter-number").counterUp({ delay: 10, time: 1e3 }),
    (e.fn.shapeMockup = function () {
      e(this).each(function () {
        var t = e(this),
          a = t.data("top"),
          n = t.data("right"),
          i = t.data("bottom"),
          s = t.data("left");
        t.css({ top: a, right: n, bottom: i, left: s })
          .removeAttr("data-top")
          .removeAttr("data-right")
          .removeAttr("data-bottom")
          .removeAttr("data-left")
          .parent()
          .addClass("shape-mockup-wrap");
      });
    }),
    e(".shape-mockup") && e(".shape-mockup").shapeMockup(),
    e(".progress-bar").waypoint(
      function () {
        e(".progress-bar").css({
          animation: "animate-positive 1.8s",
          opacity: "1",
        });
      },
      { offset: "75%" }
    ),
    (e.fn.countdown = function () {
      e(this).each(function () {
        var t = e(this),
          a = new Date(t.data("offer-date")).getTime();
        function n(e) {
          return t.find(e);
        }
        var i = setInterval(function () {
          var e = new Date().getTime(),
            s = a - e,
            o = Math.floor(s / 864e5),
            r = Math.floor((s % 864e5) / 36e5),
            l = Math.floor((s % 36e5) / 6e4),
            c = Math.floor((s % 6e4) / 1e3);
          o < 10 && (o = "0" + o),
            r < 10 && (r = "0" + r),
            l < 10 && (l = "0" + l),
            c < 10 && (c = "0" + c),
            s < 0
              ? (clearInterval(i),
                t.addClass("expired"),
                t.find(".message").css("display", "block"))
              : (n(".day").html(o),
                n(".hour").html(r),
                n(".minute").html(l),
                n(".seconds").html(c));
        }, 1e3);
      });
    }),
    e(".counter-list").length && e(".counter-list").countdown(),
    e(document).ready(function () {
      e(".faq-area").slice(0, 4).show(),
        e(document).on("click", "#loadMore", function (t) {
          t.preventDefault(),
            e(".loadcontent:hidden").slice(0, 3).slideDown(),
            0 === e(".loadcontent:hidden").length &&
              e("#loadMore")
                .text("No Content")
                .addClass("noContent")
                .prop("disabled", !0);
        });
    }),
    e(".price_slider").slider({
      range: !0,
      min: 0,
      max: 100,
      values: [0, 30],
      slide: function (t, a) {
        e(".from").text("$" + a.values[0]), e(".to").text("$" + a.values[1]);
      },
    }),
    e(".from").text("$" + e(".price_slider").slider("values", 0)),
    e(".to").text("$" + e(".price_slider").slider("values", 1));
  const C = {};
  function x() {
    const t = e(this),
      a = t.attr("src");
    if (!C[a]) {
      const t = e.Deferred();
      e.get(a, (a) => {
        t.resolve(e(a).find("svg"));
      }),
        (C[a] = t.promise());
    }
    C[a].then((a) => {
      const n = e(a).clone();
      t.attr("id") && n.attr("id", t.attr("id")),
        t.attr("class") && n.attr("class", t.attr("class")),
        t.attr("style") && n.attr("style", t.attr("style")),
        t.attr("width") &&
          (n.attr("width", t.attr("width")),
          t.attr("height") || n.removeAttr("height")),
        t.attr("height") &&
          (n.attr("height", t.attr("height")),
          t.attr("width") || n.removeAttr("width")),
        n.insertAfter(t),
        t.trigger("svgInlined", n[0]),
        t.remove();
    });
  }
  if (
    ((e.fn.inlineSvg = function () {
      return this.each(x), this;
    }),
    e(".svg-img").inlineSvg(),
    e(".th-anim").length)
  ) {
    gsap.registerPlugin(ScrollTrigger),
      document.querySelectorAll(".th-anim").forEach((e) => {
        let t = e.querySelector("img"),
          a = gsap.timeline({
            scrollTrigger: { trigger: e, toggleActions: "play none none none" },
          });
        a.set(e, { autoAlpha: 1 }),
          a.from(e, 1.5, { xPercent: -100, ease: Power2.out }),
          a.from(t, 1.5, {
            xPercent: 100,
            scale: 1.3,
            delay: -1.5,
            ease: Power2.out,
          });
      });
  }
  function k(t, a, n, i) {
    var s = t.text().split(a),
      o = "";
    s.length &&
      (e(s).each(function (e, t) {
        o += '<span class="' + n + (e + 1) + '">' + t + "</span>" + i;
      }),
      t.empty().append(o));
  }
  var T = {
    init: function () {
      return this.each(function () {
        k(e(this), "", "char", "");
      });
    },
    words: function () {
      return this.each(function () {
        k(e(this), " ", "word", " ");
      });
    },
    lines: function () {
      return this.each(function () {
        var t = "eefec303079ad17405c889e092e105b0";
        k(e(this).children("br").replaceWith(t).end(), t, "line", "");
      });
    },
  };
  (e.fn.lettering = function (t) {
    return t && T[t]
      ? T[t].apply(this, [].slice.call(arguments, 1))
      : "letters" !== t && t
      ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this)
      : T.init.apply(this, [].slice.call(arguments, 0));
  }),
    e(".discount-anime").lettering(),
    e(document).on(
      "change",
      "#ship-to-different-address-checkbox",
      function () {
        e(this).is(":checked")
          ? e("#ship-to-different-address")
              .next(".shipping_address")
              .slideDown()
          : e("#ship-to-different-address").next(".shipping_address").slideUp();
      }
    ),
    e(document).on("click", ".woocommerce-form-login-toggle a", function (t) {
      t.preventDefault(), e(".woocommerce-form-login").slideToggle();
    }),
    e(document).on("click", ".woocommerce-form-coupon-toggle a", function (t) {
      t.preventDefault(), e(".woocommerce-form-coupon").slideToggle();
    }),
    e(document).on("click", ".shipping-calculator-button", function (t) {
      t.preventDefault(),
        e(this).next(".shipping-calculator-form").slideToggle();
    }),
    e(document).on(
      "change",
      '.wc_payment_methods input[type="radio"]',
      function () {
        e(".payment_box").slideUp(),
          e(this).siblings(".payment_box").slideDown();
      }
    ),
    e(document).on("click", ".rating-select .stars a", function (t) {
      t.preventDefault(),
        e(this).siblings().removeClass("active"),
        e(this).parent().parent().addClass("selected"),
        e(this).addClass("active");
    }),
    e(document).on("click", ".quantity-plus", function (t) {
      t.preventDefault();
      var a = e(this).siblings(".qty-input"),
        n = parseInt(a.val(), 10);
      isNaN(n) || a.val(n + 1);
    }),
    e(document).on("click", ".quantity-minus", function (t) {
      t.preventDefault();
      var a = e(this).siblings(".qty-input"),
        n = parseInt(a.val(), 10);
      !isNaN(n) && n > 1 && a.val(n - 1);
    }),
    window.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
      },
      !1
    ),
    (document.onkeydown = function (e) {
      return (
        123 != event.keyCode &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "I".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "C".charCodeAt(0)) &&
        (!e.ctrlKey || !e.shiftKey || e.keyCode != "J".charCodeAt(0)) &&
        (!e.ctrlKey || e.keyCode != "U".charCodeAt(0)) &&
        void 0
      );
    });
})(jQuery);
