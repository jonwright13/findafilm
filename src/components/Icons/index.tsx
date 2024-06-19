import { FC } from "react";
import { IconContainer } from "./style";
import { IconProps } from "../../interface/components.types";
import IconSwitch from "./IconSwitch";

export const Icon: FC<IconProps> = ({
  type,
  title,
  checked,
  onClick,
  card = true,
}) => {
  const handleClick = () => {
    onClick(type);
  };

  return (
    <IconContainer
      $checked={checked}
      onClick={handleClick}
      title={title}
      $card={card}
    >
      <IconSwitch type={type} />
    </IconContainer>
  );
};
