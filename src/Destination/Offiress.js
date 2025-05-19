import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const Hotel = [
    {
      id: 1,
      name: "Lux Hotel in Egypt",
      image:"img/home/hotel/hotel-1.jpg.webp",
      price:300,
      quantity: 1
    },
        {
      id: 2,
      name: "Alx Hotel in Egypt",
      image:"img/home/hotel/hotel-2.jpg.webp",
      price: 400,
      quantity: 1
    },
        {
      id: 3,
      name: "Dahb Hotel in Egypt",
      image:"img/home/hotel/hotel-3.jpg.webp",
      price:500,
      quantity: 1
    },
         
            {
      id: 4,
      name: "Sharm El Sheikh",
      image:"img/home/header/destination-1.jpg.webp",
      price:500,
      quantity: 1
    },
            {
      id: 5,
      name: "Hurghada Hotel",
      image:"img/home/header/destination-2.jpg.webp",
      price:300,
      quantity: 1
    },
      
                {
      id: 6,
      name: "Luxury Hotel in Egypt",
      image:"img/home/header/destination-4.jpg.webp",
      price:600,
      quantity: 1
    },
          
        
    
  ];

    const Room = [
     {
      id: 7,
      name: "Room in Luxury Hotel",
      image:"img/home/hotel/room-1.jpg",
      price:50,
      quantity: 1
    },
            {
      id: 8,
      name: "Room in Alx Hotel",
      image:"img/home/hotel/room-2.jpg",
      price:70,
      quantity: 1
    },
            {
      id: 9,
      name: "Room in Dahb Hotel",
      image:"img/home/hotel/room-3.jpg",
      price:80,
      quantity: 1
    },
         {
      id: 10,
      name: "Room in Luxury Hotel",
      image:"img/home/hotel/room-4.jpg",
      price:50,
      quantity: 1
    },
            {
      id: 11,
      name: "Room in Alx Hotel",
      image:"img/home/hotel/room-5 .jpg",
      price:70,
      quantity: 1
    },
            {
      id: 12,
      name: "Room in Dahb Hotel",
      image:"img/home/hotel/room-6.jpg",
      price:80,
      quantity: 1
    },
    
  ];

      const Resto = [
            {
      id:13 ,
      name: "Resto Bar, Swetzerland",
      image:"img/home/rest/resto-1.jpg.webp",
      price:100,
      quantity: 1
    },
              
                {
      id: 14,
      name: "Resto Alx, Swetzerland",
      image:"img/home/rest/resto-2.jpg.webp",
      price:150,
      quantity: 1
    },
              
                {
      id: 15,
      name: "Resto Sharm El Sheikh",
      image:"img/home/rest/resto-3.jpg.webp",
      price:200,
      quantity: 1
    },
          {
      id:16 ,
      name: "Resto Bar, Swetzerland",
      image:"img/home/rest/resto-4.jpg",
      price:100,
      quantity: 1
    },
              
                {
      id: 17,
      name: "Resto Alx, Swetzerland",
      image:"img/home/rest/resto-5.jpg",
      price:150,
      quantity: 1
    },
              
                {
      id: 18,
      name: "Resto Sharm El Sheikh",
      image:"img/home/rest/resto-6.jpg",
      price:200,
      quantity: 1
    },
    
    
  ];


  return (
    <div className="container">
      {/* /////////////////////////////////api of hotel////////////////////////////// */}
      <div class="row">
          <div className="col-md-12">
          <h1 className="api_titel">Hotel</h1>
          </div>
      {Hotel.map((items) => (
        <div key={items.id}>
        <div className="col-md-4 mt-5 api_cart" >
        <div className="Place_cart wow fadeInDown" data-wow-delay=".5s">
        <img src={items.image}></img>
        <div className="place_back">
          <a href={items.image}><i className="fa-solid fa-up-right-and-down-left-from-center"></i></a>
          <h5>{items.price}</h5>
        </div>
      </div>
      <div className="place_artcil api_cart_articl">
        <h6>1 night</h6>
        <h4 className="Hotel_darck_h4_1">{items.name}</h4>
         <span className="  wow fadeInLeft" data-wow-delay=".1s"><i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i></span>
        <div className="api_buttun_hover">
                  <button onClick={() => addItem(items)}>Book</button>
        </div>
      </div>
    </div>
    </div>
      ))}
          </div>
      {/* /////////////////////////////////api of room////////////////////////////// */}

        <div class="row ">
          <div className="col-md-12">
          <h1  className="api_titel">Room</h1>
          </div>
      {Room.map((p) => (
        <div key={p.id}>
        <div className="col-md-4 mt-5 api_cart" >
        <div className="Place_cart wow fadeInDown" data-wow-delay=".5s">
        <img src={p.image}></img>
        <div className="place_back">
          <a href={p.image}><i className="fa-solid fa-up-right-and-down-left-from-center"></i></a>
          <h5>{p.price}</h5>
        </div>
      </div>
      <div className="place_artcil api_cart_articl">
        <h6>1 night</h6>
        <h4 className="Hotel_darck_h4_1">{p.name}</h4>
         <span className="  wow fadeInLeft" data-wow-delay=".1s"><i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i></span>
        <div className="api_buttun_hover">
                  <button onClick={() => addItem(p)}>Book</button>
        </div>
      </div>
    </div>
    </div>
      ))}
          </div>
      {/* /////////////////////////////////api of restaurant////////////////////////////// */}

       <div class="row ">
          <div className="col-md-12 mt-5">
          <h1  className="api_titel">Restaurant</h1>
          </div>
      {Resto.map((p) => (
        <div key={p.id}>
        <div className="col-md-4 mt-5 api_cart" >
        <div className="Place_cart wow fadeInDown" data-wow-delay=".5s">
        <img src={p.image}></img>
        <div className="place_back">
          <a href={p.image}><i className="fa-solid fa-up-right-and-down-left-from-center"></i></a>
          <h5>{p.price}</h5>
        </div>
      </div>
      <div className="place_artcil api_cart_articl">
        <h6>1 night</h6>
        <h4 className="Hotel_darck_h4_1">{p.name}</h4>
         <span className="  wow fadeInLeft" data-wow-delay=".1s"><i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i>  <i className="fa-solid fa-star"></i></span>
        <div className="api_buttun_hover">
                  <button onClick={() => addItem(p)}>Book</button>
        </div>
      </div>
    </div>
    </div>
      ))}
          </div>
            </div>
  );
}


function Offiress() {
  return (
    <CartProvider>
      <Page />
    </CartProvider>
  );
}
export default Offiress