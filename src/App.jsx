import React from "react";

const App = () => {
  return (
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
  );
};

export default App;
