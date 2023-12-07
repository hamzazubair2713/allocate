import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  ProgramDrop,
} from "./Input.styles";


const ApprovalDropDown = ({ onChange, selectedValue, setSelectedValue }) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(
  //   "  Select name of the program"
  // );
  const ProgramArray = [
    {
      id: 1,
      signature: "0x9C728A1C7ECeAa681d3330D74D8c2593A6C16b258",
    },
    {
      id: 2,
      signature: "0x9C728A1C7ECeAa681d3330D74D8c2593A6C16b453654",
    },
    {
      id: 3,
      signature: "0x9C728A1C7ECeAa681d3330D74D8c2593A6C16b452564",
    },
    {
      id: 4,
      signature: "0x9C728A1C7ECeAa681d3330D74D8c2593A6C16b452326",
    },
  ];
  function handelChange(e, selectedValue) {
    e.stopPropagation();
    setSelectedValue(selectedValue);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);

  return (
    <ProgramDrop>
      <DropDownListWrapper onClick={() => setOpenDropDown(!openDropDown)}>
        {selectedValue?.signature ? (
          <>{selectedValue.signature}</>
        ) : (
          "Select Approval Signature"
        )}{" "}
        <span
          className="dropDownIcon"
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
          >
            <path d="M7 10L13.9282 0.25H0.0717969L7 10Z" fill="#E1E1E1" />
          </svg>
        </span>
        <DropDownAssetsItem display={openDropDown ? "block" : "none"}>
          {ProgramArray.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.signature}{" "}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapper>
    </ProgramDrop>
  );
};

export default ApprovalDropDown;
