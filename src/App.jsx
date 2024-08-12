import React from "react";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center relative z-50">
      <div className="tiles !hidden">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="tiles__line" key={index}>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: "url(p1.jpg)",
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: "url(p2.jpg)",
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: "url(p3.jpg)",
              }}
            ></div>
            <div
              className="tiles__line-img tiles__line-img--large"
              style={{
                backgroundImage: "url(p1.jpg)",
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: "url(p2.jpg)",
              }}
            ></div>
            <div
              className="tiles__line-img"
              style={{
                backgroundImage: "url(p3.jpg)",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* my testing */}
      <div className="w-screen h-screen border overflow-hidden relative z-50 shadow-md rounded-lg">
        <div className="t">
          <div className="t-line">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className={`img ${
                  index == 2 || index == 5 ? "!w-screen !rounded-[20vh]" : ""
                }`}
                style={{
                  backgroundImage: "url(p1.jpg)",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
