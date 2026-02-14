const Categories = () => {
return (
<section className="container py-5">
    <h2 className="text-center mb-5">Top Categories</h2>
    <div className="row g-4">

        {/* Mobiles */}
        <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top" alt="Mobiles" />
                <div className="card-body text-center">
                    <h6 className="fw-bold">Mobiles</h6>
                </div>
            </div>
        </div>

        {/* Laptops */}
        <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top" alt="Laptops" />
                <div className="card-body text-center">
                    <h6 className="fw-bold">Laptops</h6>
                </div>
            </div>
        </div>

        {/* Accessories */}
        <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top" alt="Accessories" />
                <div className="card-body text-center">
                    <h6 className="fw-bold">Accessories</h6>
                </div>
            </div>
        </div>

        {/* Wearables */}
        <div className="col-md-3 col-sm-6">
            <div className="card shadow-sm border-0">
                <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80"
                    className="card-img-top" alt="Wearables" />
                <div className="card-body text-center">
                    <h6 className="fw-bold">Wearables</h6>
                </div>
            </div>
        </div>

    </div>
</section>
);
};

export default Categories;