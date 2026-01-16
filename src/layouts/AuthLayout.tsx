import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Slide1,
  Slide2,
  Slide3,
  Slide4,
} from "../components/slides/AuthSlides";

const AuthLayout = () => {
  const data = [
    {
      component: <Slide1 />,
    },
    {
      component: <Slide2 />,
    },
    {
      component: <Slide3 />,
    },
    {
      component: <Slide4 />,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfiniteScrolling = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScrolling();
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <section className="flex items-start p-4 gap-4 h-full w-full relative bg-white lg:bg-[#F4F4F5]">
      <div className="fixed hidden lg:block">
        <div className="overflow-hidden h-[calc(100vh-32px)] max-w-100 rounded-2xl">
          <div
            className="flex flex-nowrap transition-transform duration-1000 h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full min-w-full flex items-center justify-center"
              >
                {item.component}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-full flex px-9 gap-2 bottom-9">
          {data.map((_, index) => (
            <span
              key={index}
              className={`
          h-1 rounded-full transition-all duration-500 w-4
          ${currentIndex === index ? " bg-white" : " bg-[#52525B]"}
        `}
            />
          ))}
        </div>
      </div>

      <div className="w-full ml-0 lg:ml-104">
        <section className="flex flex-col justify-between h-full min-h-[calc(100vh-32px)] overflow-auto">
          <div className="w-full flex items-center gap-3 justify-between lg:justify-end">
            <img
              src="/logo_mobile.png"
              alt="logo"
              width={100}
              height={20}
              className="block w-25 h-5 lg:hidden"
            />
            <div className="flex items-center justify-end border-2 border-[#E1E1E2] text-xs lg:text-sm font-semibold w-fit rounded-[20px]">
              <span className="flex items-center gap-1 py-2 px-3 border-r-2 border-[#E1E1E2]">
                <img src="/rates.png" alt="rates" />
                Check Rates
              </span>
              <span className="flex items-center gap-1 py-2 px-3">
                <img src="/help.png" alt="help" />
                Get Help
              </span>
            </div>
          </div>

          <Outlet />

          <footer className="flex items-center justify-between text-[#1A1A1AB2] text-sm">
            <p>© Zabira. 2026</p>
            <div className="flex items-center gap-9">
              <p className="flex items-center gap-1">
                Privacy <span className="hidden md:block">Policy</span>
              </p>
              <p className="flex items-center gap-1">
                Terms <span className="hidden md:block">of Service</span>
              </p>
            </div>
          </footer>
        </section>
      </div>
    </section>
  );
};

export default AuthLayout;
