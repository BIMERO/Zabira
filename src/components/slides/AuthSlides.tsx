export const Slide1 = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#003B8D_0%,#000000_67.58%)] text-white w-full h-full flex flex-col justify-between">
      <img src="/logo.png" alt="logo" className="absolute top-0 p-9 z-10" />
      <img
        src="/slide1.png"
        alt="slide_hero"
        className="w-full h-full max-h-3/5 object-fit-contain"
      />
      <div className="text-left px-9 pb-20">
        <h1 className="text-3xl font-extrabold mb-1">
          Easily Buy & Sell Cryptocurrencies, Giftcards & Pay Bills
        </h1>
        <p className="text-[#FFFFFFB2] font-medium">
          Manage your assets and portfolio easily!
        </p>
      </div>
    </div>
  );
};

export const Slide2 = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#003B8D_0%,#000000_67.58%)] text-white w-full h-full flex flex-col justify-between relative">
      <div
        style={{ backgroundImage: "url(/slidebg.png)" }}
        className="h-full bg-no-repeat"
      ></div>
      <img src="/logo.png" alt="logo" className="absolute top-0 p-9 z-10" />

      <div className="absolute w-full h-full left-0 right-0 flex items-center justify-center">
        <div className="bg-[#00102680] w-full h-full max-w-4/5 max-h-4/5 flex items-center justify-center rounded-xl">
          <img src="/vec1.png" alt="slide_hero" className="" />
        </div>
      </div>

      <div className="text-left px-9 pb-20 z-10">
        <h1 className="text-3xl font-extrabold mb-1">Trade Cryptocurrencies</h1>
        <p className="text-[#FFFFFFB2] font-medium">
          Easy way to buy, sell, convert and store cryptocurrencies
        </p>
      </div>
    </div>
  );
};

export const Slide3 = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#003B8D_0%,#000000_67.58%)] text-white w-full h-full flex flex-col justify-between relative">
      <div
        style={{ backgroundImage: "url(/slidebg.png)" }}
        className="h-full bg-no-repeat"
      ></div>
      <img src="/logo.png" alt="logo" className="absolute top-0 p-9 z-10" />

      <div className="absolute w-full h-full left-0 right-0 flex items-center justify-center">
        <div className="bg-[#00102680] w-full h-full max-w-4/5 max-h-4/5 flex items-center justify-center rounded-xl">
          <img src="/vec2.png" alt="slide_hero" className="" />
        </div>
      </div>

      <div className="text-left px-9 pb-20 z-10">
        <h1 className="text-3xl font-extrabold mb-1">Pay Bills</h1>
        <p className="text-[#FFFFFFB2] font-medium">
          Instantly pay all your bills and make payments all over the world
        </p>
      </div>
    </div>
  );
};

export const Slide4 = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#003B8D_0%,#000000_67.58%)] text-white w-full h-full flex flex-col justify-between relative">
      <div
        style={{ backgroundImage: "url(/slidebg.png)" }}
        className="h-full bg-no-repeat"
      ></div>
      <img src="/logo.png" alt="logo" className="absolute top-0 p-9 z-10" />

      <div className="absolute w-full h-full left-0 right-0 flex items-center justify-center">
        <div className="bg-[#00102680] w-full h-full max-w-4/5 max-h-4/5 flex items-center justify-center rounded-xl">
          <img src="/vec3.png" alt="slide_hero" className="" />
        </div>
      </div>

      <div className="text-left px-9 pb-20 z-10">
        <h1 className="text-3xl font-extrabold mb-1">Customer Support</h1>
        <p className="text-[#FFFFFFB2] font-medium">
          We provide excellent customer support to ensure seamless experience
        </p>
      </div>
    </div>
  );
};
