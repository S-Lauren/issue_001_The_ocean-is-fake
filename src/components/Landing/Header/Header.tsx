import "./index.scss";

export const LandingHeader = () => {
  console.log(window.innerWidth);
  return (
    <div className="main">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          overflow: "hidden",
        }}
      >
        <div className="col-left">
          <h1>
            Sarah <br />
            Lauren
          </h1>
          <p style={{ textAlign: "left" }}>
            <span>Illustrator, webdesigner and front end developer</span> <br />
            who wants to bring creative experiences to your projects.
          </p>
        </div>
        <div className="col-right">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpGueslrkAX7BVm7kHI_dCCC7jQHnQzhjrfyBmlL2cEJyKy04t085vg2ldAA7olxLbPwccRCkud1k-b2UpSrRAgQaEbj4YNWL3fE37sLBkfthzw6W3gRL1IQWqFNvJLqvCSY2gLPXcOXwmbi1b5qD0M4N8GnmvfM064TfRAYjUQ5m84cJl6Wup2aTvFIQ/s1112/test.png" />
        </div>
      </div>
    </div>
  );
};
