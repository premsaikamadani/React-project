const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1500&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div className="container">
          <h1 className="display-4 fw-bold">Discover Amazing Deals</h1>
          <p className="lead">Best electronics at unbeatable prices</p>
          <a href="#" className="btn btn-warning btn-lg mt-3">
            Shop Now
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="text-center mb-5">Top Categories</h2>
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Mobiles"
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">Mobiles</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
              <img
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Laptops"
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">Laptops</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
              <img
                src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Accessories"
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">Accessories</h6>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
              <img
                src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                className="card-img-top"
                alt="Wearables"
              />
              <div className="card-body text-center">
                <h6 className="fw-bold">Wearables</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Featured Products</h2>
          <div className="row g-4">
            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Headphones"
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">Wireless Headphones</h6>
                  <p className="text-primary fw-bold">₹2,999</p>
                  <a href="#" className="btn btn-dark btn-sm w-100">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1518444028785-8fb0f0f1d5b6?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Smart Watch"
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">Smart Watch</h6>
                  <p className="text-primary fw-bold">₹4,999</p>
                  <a href="#" className="btn btn-dark btn-sm w-100">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">Gaming Laptop</h6>
                  <p className="text-primary fw-bold">₹59,999</p>
                  <a href="#" className="btn btn-dark btn-sm w-100">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Speaker"
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">Bluetooth Speaker</h6>
                  <p className="text-primary fw-bold">₹2,199</p>
                  <a href="#" className="btn btn-dark btn-sm w-100">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
