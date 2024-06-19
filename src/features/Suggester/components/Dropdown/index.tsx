import { FC } from "react";
import {
  SelectContainer,
  Label,
  Select,
  Option,
} from "../../../../style/style";
import { DropdownProps } from "../../suggester.types";

const Dropdown: FC<DropdownProps> = ({
  label,
  placeholder,
  name,
  options,
  onChange,
}) => {
  return (
    <SelectContainer>
      <Label>{label}</Label>
      <Select placeholder={placeholder} name={name} onChange={onChange}>
        <Option value="all">all</Option>
        {options.map((item, index) => (
          <Option key={index} value={item.id}>
            {item.name}
          </Option>
        ))}
      </Select>
    </SelectContainer>
  );
};

export default Dropdown;
