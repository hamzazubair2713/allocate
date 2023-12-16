import React, { useEffect, useState } from "react";
import {
  DropDownAssetsItem,
  DropDownItem,
  DropDownListWrapper,
  DropDownListWrapperSelect,
  ProgramDrop,
} from "./Input.styles";
import klayLogo from "../../../public/klayLogo.png";
import Planets from "../../../public/Planets.png";
import USDC from "../../../public/USDC.png";
import USDT from "../../../public/USDT.png";
import XET from "../../../public/XET.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { FiPlusCircle } from "react-icons/fi";

const AssetsDropDownSelect = ({
  onChange,
  selectedValue,
  setSelectedValue,
}) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(
  //   "  Select name of the program"
  // );
  const ProgramArray = [
    {
      id: 1,
      program: "USDC",
      img: USDC,
    },
    {
      id: 2,
      program: "XET",
      img: XET,
    },
    {
      id: 3,
      program: "KLAY",
      img: klayLogo,
    },
    {
      id: 4,
      program: "USDT",
      img: USDT,
    },
    {
      id: 5,
      program: "Planets",
      img: Planets,
    },
  ];
  function handelChange(e, elem) {
    e.stopPropagation();
    setSelectedValue((selectedValue) => [elem, ...selectedValue]);
    setOpenDropDown(false);
  }
  useEffect(() => {
    onChange(selectedValue);
  }, [onChange, selectedValue]);
  function handelDelete(item) {
    setSelectedValue((prev) =>
      prev.filter((elem) => elem.program !== item.program)
    );
  }
  return (
    <ProgramDrop>
      {/* <label htmlFor="">Program</label> */}
      <DropDownListWrapperSelect>
        {selectedValue.length ? (
          <div className="selectWrapper">
            {selectedValue.map((elem, ind) => (
              <div
                className="itemWrapper"
                key={ind}
                onClick={() => setOpenDropDown(false)}
              >
                <p>{elem.program}</p>
                <Image src={elem.img} alt="img" width={20} height={20} />
                <span className="cross" onClick={() => handelDelete(elem)}>
                  <RxCross2 />
                </span>
              </div>
            ))}
          </div>
        ) : (
          "Select an asset"
        )}{" "}
        <span
          className="dropDownAddIcon"
          onClick={() => setOpenDropDown(!openDropDown)}
        >
          <FiPlusCircle size="30" />
        </span>
        <DropDownAssetsItem display={openDropDown ? "block" : "none"}>
          {ProgramArray.map((elem, ind) => (
            <li key={ind} onClick={(e) => handelChange(e, elem)}>
              {elem.program}{" "}
              {elem.img && <Image src={elem?.img} alt="coinImage" />}
            </li>
          ))}
        </DropDownAssetsItem>
      </DropDownListWrapperSelect>
    </ProgramDrop>
  );
};

export default AssetsDropDownSelect;
