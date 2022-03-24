import Image from "next/image";
import { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imagesArray = [
    '/images/pai.png',
    '/images/nutricionista.png',
    '/images/personal.png',
    '/images/psicologa.png'
  ]


  return (
    <Carousel  activeIndex={index} onSelect={handleSelect} indicators={false} controls={true} fade >
      {
        imagesArray.map((path, i) => {
          return (
            <Carousel.Item  key={i} className='text-center' id="carousel-item"
              style={{ width: '100%', height: '90vh'}}
            >
              <Image src={path}
                layout='fill'
                objectFit='contain'
              />
            </Carousel.Item>
          )
        }
        )
      }
    </Carousel>
  );
}
