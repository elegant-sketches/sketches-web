import React from 'react';
import Image from 'next/image';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface ICarouselItem {
  id: string;
  src: string;
  alt: string;
}

const DEFAULT_RESPONSIVE = {
  desktop: {
    breakpoint: { min: 1024, max: 3000 },
    items: 3
  },
  tablet: {
    breakpoint: { min: 768, max: 1023 },
    items: 2
  },
  mobile: {
    breakpoint: { min: 0, max: 767 },
    items: 1
  }
};

export const Carousel = ({
  items,
  responsive = DEFAULT_RESPONSIVE
}: {
  items: ICarouselItem[];
  responsive?: any;
}) => {
  return (
    <MultiCarousel
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={3000}
      showDots={false}
      arrows={false}
      ssr
      className='w-full h-100'
    >
      {items.map((item) => (
        <div
          key={item.id}
          className='w-100 h-[320px] mx-2 mb-4 mt-2 bg-white rounded-lg shadow-lg p-4'
        >
          <img
            height={250}
            width={250}
            src={item.src}
            alt={item.alt}
            className='w-full h-full'
          />
        </div>
      ))}
    </MultiCarousel>
  );
};
