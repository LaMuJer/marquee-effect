import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen border overflow-hidden relative z-10 shadow-md rounded-lg">
      {/* marquee effect */}
      <div className="t">
        <div className="t-line">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`img ${
                index == 2 || index == 5
                  ? "!w-screen !rounded-[20vh]"
                  : ""
              }`}
              style={{
                backgroundImage: "url(p1.jpg)",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* overlay */}
      <div className="container mx-auto md:p-0 px-5 h-screen relative z-50">
        <div className="md:py-32 py-10 h-full flex flex-col justify-between">
          <div className="flex md:flex-row flex-col-reverse md:gap-0 gap-10 justify-between items-start">
            <div>
              <p className="text-5xl font-bold">HSU WIN LAT</p>
              <p>Frontend Developer</p>
            </div>
            <div>
              <a
                href="https://lens-iota.vercel.app/"
                target="_blank"
                className="text-xs uppercase transition-all duration-500 ease-in-out bg-black text-white px-5 py-2 rounded-lg hover:bg-white hover:text-black"
              >
                previous issue
              </a>
            </div>
          </div>
          <div className="underline flex md:justify-start justify-end gap-5">
            <a
              className="cursor-pointer"
              href="https://github.com/LaMuJer"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            <a
              className="cursor-pointer"
              href="https://www.facebook.com/staphy.staphy.9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
