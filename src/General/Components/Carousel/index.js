import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import { Embla, EmblaViewport, EmblaContainer, EmblaSlide, EmblaSlideInner, EmblaSlideImage, EmblaDots } from './CarouselElements'

import one from '../../Images/one.webp'
import two from '../../Images/two.webp'
import three from '../../Images/three.webp'
import four from '../../Images/four.webp'
const media = [one, two, three, four];

const DotButton = ({ selected, onClick }) => (
    <button
      type="button"
      onClick={onClick}
    />
);

const Carousel = () => {
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);
  
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
      embla
    ]);
  
    const onSelect = useCallback(() => {
      if (!embla) return;
      setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);
  
    useEffect(() => {
      if (!embla) return;
      onSelect();
      setScrollSnaps(embla.scrollSnapList());
      embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);

  const mediaByIndex = index => media[index % media.length];
  const slides = Array.from(Array(media.length).keys())

  return (
    <>
      <Embla>
        {/* <Embla ref={emblaRef}> */}
        <EmblaViewport ref={viewportRef}>
          <EmblaContainer>
            {slides.map((index) => (
              <EmblaSlide key={index}>
                <EmblaSlideInner>
                  <EmblaSlideImage src={mediaByIndex(index)} />
                </EmblaSlideInner>
              </EmblaSlide>
            ))}
          </EmblaContainer>
        </EmblaViewport>
      </Embla>

      <EmblaDots>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </EmblaDots>
    </>
  )
}

export default Carousel;