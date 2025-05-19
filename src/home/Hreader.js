import React, { useEffect, useState } from "react";

const Hreader = () => {
  const imgArr = [
    "/img/home/header/greece-2197996_1280.jpg",
    "/img/home/header/italy-9505446_1280.jpg",
    "/img/home/header/the-historical-museum-of-moscow-5079680_1280.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imgArr.length);
      setActive((prev) => !prev);
    }, 3000); // تغيير الصورة كل 3 ثواني
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const word = " Your Travel Destinations like never before";
    let charIndex = 0;
    let deleting = false;
    const element = document.getElementById("type_text");

    function writer() {
      if (!element) return;

      if (!deleting) {
        element.textContent = word.substring(0, charIndex);
        charIndex++;
        if (charIndex > word.length) {
          setTimeout(() => {
            deleting = true;
            writer();
          }, 1500); // وقت انتظار قبل الحذف
        } else {
          setTimeout(writer, 150); // سرعة الكتابة
        }
      } else {
        element.textContent = word.substring(0, charIndex);
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          setTimeout(writer, 700); // وقت انتظار قبل الكتابة من جديد
        } else {
          setTimeout(writer, 80); // سرعة الحذف
        }
      }
    }

    writer();
  }, []);

  useEffect(() => {
    function funscroll() {
      const nav = document.querySelector(".navbar");
      if (!nav) return;
      const scrolll = window.scrollY;
      if (scrolll < 200) {
        nav.classList.remove("navscroll");
      } else {
        nav.classList.add("navscroll");
      }
    }
    window.addEventListener("scroll", funscroll);
    return () => window.removeEventListener("scroll", funscroll);
  }, []);

  return (
    <div id="bark_mode_body" className="container-fluid">
      <div className="row header">
        <div className="col-md-5 header_articl">
          <div className="sizzz">
            <div className="text_writer">
              <span>Explore</span>
              <span id="type_text"></span>
              <span className="cursor"></span>
            </div>
          </div>
          <p className="header_dark_p wow fadeInLeft" data-wow-delay=".1s">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country.
          </p>
          <button
            className="header_dark_button wow fadeInLeft"
            data-wow-delay=".2s"
          >
            Discover <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="col-md-7 header_img">
          <img
            src={imgArr[index]}
            id="consal_img"
            className={active ? "active slider-img" : "slider-img"}
            alt="slider1"
          />
          <img
            src={imgArr[(index + 1) % imgArr.length]}
            id="consal_img_2"
            className={active ? "slider-img" : "active slider-img"}
            alt="slider2"
          />
        </div>
      </div>
    </div>
  );
};

export default Hreader;
