import { forwardRef } from "react";

// import arrow from "@/assets/icons/select-arrow.svg";
import { Option, StyledSelect, StyledSelectContainer } from "./styled";
import { TSelectProps } from "./types";

const Select = forwardRef<HTMLSelectElement, TSelectProps>(
  ({ options = [], placeholder = "", width = "100%" }, ref) => {
    //   const [isListOpen, setIsListOpen] = useState(false);

    //   const openList = () => {
    //     setIsListOpen(true);
    //   };

    //   const closeList = () => {
    //     setIsListOpen(false);
    //   };

    //   const toggleIsOpen = () => {
    //     setIsListOpen((prev) => !prev);
    //   };

    return (
      <StyledSelectContainer $width={width}>
        <StyledSelect ref={ref}>
          <Option value="" disabled selected>
            {placeholder}
          </Option>
          {options.map((month) => (
            <Option value={month} key={month}>
              {month}
            </Option>
          ))}
        </StyledSelect>
        {/* <Arrow src={arrow} /> */}
      </StyledSelectContainer>
    );
  },
);

Select.displayName = "Select";

export default Select;
