import React from "react";

const App = () => {
  return (
    <div className="container mx-auto w-screen h-screen overflow-hidden relative z-50">
      <div className="tiles">
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
    </div>
  );
};

export default App;
