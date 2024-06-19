import { FC, useMemo } from "react";
import { IconContext } from "react-icons/lib";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";
import { StarRow } from "./style";
import { StarRatingProps } from "../../interface/components.types";

const StarRating: FC<StarRatingProps> = ({ value, maxValue = 10 }) => {
  let starValue: number = value === null || value === undefined ? 0 : value;

  const stars = useMemo(() => {
    const score = (starValue * 10) / maxValue;
    const integer = Math.trunc(score);
    const decimal = score - integer;

    let fill = integer;
    let half = false;
    let outline = 10 - fill; // Adjust the total number of stars if necessary

    if (decimal >= 0.75) fill++;
    else if (decimal >= 0.25) half = true;

    outline = 10 - fill - (half ? 1 : 0); // Calculate outline after adjusting fill and half

    return {
      keyPrefix: `starRating ${score}`,
      fill: Math.max(0, Math.min(fill, 10)), // Ensure fill is within 0-10
      half,
      outline: Math.max(0, Math.min(outline, 10)), // Ensure outline is within 0-10
    };
  }, [starValue, maxValue]);

  return (
    <IconContext.Provider value={{ color: "gold", size: "16px" }}>
      <StarRow title={`Rating: ${starValue.toFixed(1)}/10`}>
        {[...Array(stars.fill)].map((_, index) => (
          <IoStar key={`${stars.keyPrefix} fill ${index}`} />
        ))}
        {stars.half && <IoStarHalf key={`${stars.keyPrefix} half`} />}
        {[...Array(stars.outline)].map((_, index) => (
          <IoStarOutline key={`${stars.keyPrefix} outline ${index}`} />
        ))}
      </StarRow>
    </IconContext.Provider>
  );
};

export default StarRating;
