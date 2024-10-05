import React from 'react';
import '../styles/home.css';
import item1 from '../assets/carousel/biriyani.png';
import item2 from '../assets/carousel/item3.png';
import item3 from '../assets/carousel/pizza.png';
import item4 from '../assets/carousel/noodles.png';
import item5 from '../assets/carousel/rice.png';

function CarouselSection() {
  const items = [
    { src: item1, alt: 'Biriyani', title: 'Biriyani' },
    { src: item2, alt: 'Chilli', title: 'Chilli' },
    { src: item3, alt: 'Pizza', title: 'Pizza' },
    { src: item4, alt: 'Noodles', title: 'Noodles' },
    { src: item5, alt: 'Meals', title: 'Meals' },
  ];

  return (
    <section className="carousel-section d-flex justify-content-between mx-5">
      {items.map((item, index) => (
        <div key={index} className="text-center items">
          <img src={item.src} alt={item.alt} className="img-fluid carousel-img" />
          <h4 className="mt-2">{item.title}</h4>
        </div>
      ))}
    </section>
  );
}

export default CarouselSection;
