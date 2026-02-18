function Product() {
  const products = [
    {
      id: 1,
      name: "vivo T4 Lite 5G",
      variant: "Prism Blue",
      storage: "64 GB",
      originalPrice: 12999,
      discount: 15,
      rating: 4.4,
      totalRatings: 45190,
      totalReviews: 1306,
      assured: true,
      exchangeOffer: "Up to ₹8,400 Off on Exchange",
      bankOffer: true,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/a/x/-original-imahfkvfhcddfzvh.jpeg?q=70",
      specifications: [
        "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
        "17.12 cm (6.74 inch) HD+ Display",
        "50MP + 2MP | 5MP Front Camera",
        "6000 mAh Battery",
        "Dimensity 6300 5G Processor",
      ],
    },
    {
      id: 2,
      name: "Ai+ Pulse",
      variant: "Sparkle Red",
      storage: "64 GB",
      originalPrice: 7999,
      discount: 12,
      rating: 4.3,
      totalRatings: 44721,
      totalReviews: 2659,
      assured: true,
      exchangeOffer: "Up to ₹5,000 Off on Exchange",
      bankOffer: true,
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/w/t/-original-imahhc4czn6fswwz.jpeg?q=70",
      specifications: [
        "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
        "17.13 cm (6.745 inch) HD+ Display",
        "50MP Rear Camera | 5MP Front Camera",
        "5000 mAh Battery",
        "T615 Processor",
      ],
    },
    {
      id: 3,
      name: "Voltas Beko 9 kg Semi Automatic Top Load Washing Machine",
      variant: "Black, Grey",
      category: "Appliance",
      price: 11990,
      originalPrice: 23490,
      discount: 48,
      rating: 4.3,
      totalRatings: 6957,
      totalReviews: 457,
      assured: true,
      hotDeal: true,
      exchangeOffer: "Up to ₹1,330 Off on Exchange",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/x/l/h/-original-imahdz3vpycbsptd.jpeg?q=70",
      specifications: ["1350 rpm Max Speed", "5 Star Rating"],
    },
    {
      id: 4,
      name: "Whirlpool 192 L Direct Cool Single Door 4 Star Refrigerator with Base Drawer",
      category: "Appliance",
      capacity: "192 L",
      rating: 4.4,
      totalRatings: 13733,
      totalReviews: 781,
      price: 15490,
      originalPrice: 21950,
      discount: 29,
      assured: true,
      hotDeal: true,
      exchangeOffer: "Up to ₹3,770 Off on Exchange",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/g/f/l/-original-imahgyad468zwxzs.jpeg?q=70", // replace with actual image URL
      specifications: ["Reciprocating Compressor", "Built-in Stabilizer"],
    },
  ];

  const cart: Array<any> = [];

  const caluclateDiscountedPrice = (
    originalprice: number,
    discount: number,
  ) => {
    return originalprice - (originalprice * discount) / 100;
  };


  const addToCart = (index: number, productId: number) => {
    const productInfo = cart.find(product => product.id === productId)

    if(!productInfo) {
        cart.push({
            ...products[index],
            quantity: 1
        });
        window.alert('Added to cart successfully');
    
    }else{
        window.alert('product already exist in cart');
    }
    
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  return (
    <div>
      <div className="container">
        {products.map((product: any, index: number) => (
          <div className="row py-4 mb-2 border-bottom border-2">
            <div className="col-sm-3">
              <img
                src={product.image}
                className="img-fluid"
                width="120px"
              />
            </div>
            <div className="col-sm-6">
              <h2>{product.name}</h2>
              <ul>
                {product.specifications.map((specification: string) =>(
                     <li>{specification}</li>
                ))}
                 
              </ul>
            </div>
            <div className="col-sm-3">
              <h3>
                {caluclateDiscountedPrice(
                  product.originalPrice,
                  product.discount,
                )}
              </h3>
              <p>{product.discount}% off</p>
              {/* <button className="btn btn-primary" onClick={addToCart}>Add to cart</button> */}

              <button className="btn btn-primary" onClick={() => addToCart(index,product.id)}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Product;
