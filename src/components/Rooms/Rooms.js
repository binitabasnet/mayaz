import React from "react";

const Rooms = () => {
  return (
    <>
      <div className="room container-fluid">
        <div className="my-2 shadow p-2  ">
          <h2 className="text-center mt-5">Our Rooms</h2>
          <h2 className="text-center">
            These best rooms choosen by our customers
          </h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card shadow-lg">
              <div className="inner">
                <img
                  src="/images/img10.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Standard Double and Twin</h5>
                <p>Standard double and twin bed, facing the himalayan range</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <div className="inner">
                <img
                  src="/images/img12.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Standard Twin Bed</h5>
                <p>Two single beds, Panaromic view and sunrise</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <div className="inner">
                <img
                  src="/images/img11.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Standard Triple</h5>
                <p>Three single bed , Great view of himalayan range.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-lg">
              <div className="inner">
                <img
                  src="/images/img10.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body ">
                <h5 className="card-title">Budget Double or Twin</h5>
                <p>
                  One double bed and a single bed, Facing the himalayan range,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
