function OfficeBanner() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-3">
      <div className="flex-1 relative">
        <div>
          <img
            src="./img/Hero_banner/01.jpg"
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="absolute bottom-4 p-3">
          <h1 className="title text-[clamp(1em,2.5vw,3em)] font-semibold">
            Exclusive Deal:
          </h1>
          <h1 className=" title text-[clamp(1em,3vw,4em)] font-bold">
            Save Big on Stylish Chairs!
          </h1>
        </div>
      </div>
      <div className="flex-1 relative">
        <div>
          <img
            src="./img/Hero_banner/04.jpg"
            alt="banner"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-4 p-3">
          <h1 className="title text-[clamp(1em,2.5vw,3em)] font-semibold">
            Limited Time Offer:
          </h1>
          <h1 className=" title text-[clamp(1em,3vw,4em)] font-bold">
            Get Cozy with Discounts!
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OfficeBanner;
