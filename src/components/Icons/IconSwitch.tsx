import { FC } from "react";
import {
  MdCheckCircleOutline,
  MdAddCircleOutline,
  MdBlock,
} from "react-icons/md";
import { IconSwitchProps } from "../../interface/components.types";

const IconSwitch: FC<IconSwitchProps> = ({ type }) => {
  switch (type) {
    case "watchlist":
      return <MdAddCircleOutline />;
    case "watched":
      return <MdCheckCircleOutline />;
    case "ignore":
      return <MdBlock />;
    default:
      return null;
  }
};

export default IconSwitch;
