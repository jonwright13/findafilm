import { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import useHover from "./utils/useHover";
import useElementSize from "./utils/useElementSize";
import {
  Wrapper,
  ArrowLeft,
  ArrowRight,
  ScrollableArea,
  ArrowButton,
} from "./style";
import { HorizontalScrollProps } from "../../preferences.types";

const HorizontalScroll = ({ children, setPage }: HorizontalScrollProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(wrapperRef);
  const size = useElementSize(wrapperRef);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setAtStart] = useState(false);
  const [isAtEnd, setAtEnd] = useState(false);

  const updatePosition = () => {
    const { current } = scrollRef;
    if (!current) return;

    const { scrollWidth, clientWidth, scrollLeft } = current;
    setAtStart(scrollLeft === 0);
    setAtEnd(scrollLeft + clientWidth + clientWidth / 2 >= scrollWidth);
  };

  useEffect(() => {
    updatePosition();
  }, [children, size.width]);

  const scroll = (direction: "left" | "right") => {
    const { current } = scrollRef;
    if (!current) return;

    const { clientWidth, scrollLeft, scrollWidth } = current;
    const amount = clientWidth * 0.65;

    if (direction === "left") {
      if (!isAtStart) setPage((prev: number) => Math.max(prev - 1, 1));
    } else {
      if (!isAtEnd)
        setPage((prev: number) =>
          Math.min(prev + 1, Math.ceil(scrollWidth / amount))
        );
    }

    current.scrollTo({
      left: direction === "left" ? scrollLeft - amount : scrollLeft + amount,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper ref={wrapperRef}>
      {
        <ArrowLeft $isVisible={!isAtStart && isHover}>
          <ArrowButton onClick={() => scroll("left")}>
            <BsChevronLeft />
          </ArrowButton>
        </ArrowLeft>
      }

      <ScrollableArea ref={scrollRef} onScroll={updatePosition}>
        {children}
      </ScrollableArea>

      {
        <ArrowRight $isVisible={!isAtEnd && isHover}>
          <ArrowButton onClick={() => scroll("right")}>
            <BsChevronRight />
          </ArrowButton>
        </ArrowRight>
      }
    </Wrapper>
  );
};

export default HorizontalScroll;
