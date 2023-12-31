import React, { useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import Link from "next/link";
import { FormHolder } from "./CreatEmissary.styles";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import DigestingInfo from "../DigestingInfo";
import plusIcon from "../../../public/plusIcon.png";
import Image from "next/image";
import AssetsDropDownSelect from "../InputFields/AssetsDropDownSelect";

const CreatEmissary = () => {
  const [value, setValue] = useState([]);
  const [uploadedNft, setUploadedNft] = useState("");

  const [steps, setSteps] = useState(0);

  return (
    <>
      {steps !== 4 && (
        <FormHolder>
          <form className="wrap">
            <Link href="/" className="btn-back">
              <IoArrowBackCircleOutline size="24" /> Back to emissary.global
            </Link>
            <div className="user-info">
              <FaRegUserCircle size="26" />
              <span className="text">5D25...oePo</span>
            </div>

            {steps == 0 && (
              <div className="input-content">
                <CombineInput label="Provide a name for your emissary..." />
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => setSteps(0)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => setSteps(1)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {steps == 1 && (
              <div className="input-content">
                <CombineInput label="Provide a URL slug for your emissary..." />
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => setSteps(0)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => setSteps(2)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}

            {steps == 2 && (
              <div className="input-content">
                <strong className="title">
                  Upload a logo for your emissary...
                </strong>
                <p>
                  Recommend an image with a ratio of 4:1 and transparent
                  background for the perfect effect.
                </p>
                <div className="upload-file">
                  <label htmlFor="upload" className="labelButton">
                    {!uploadedNft && <Image src={plusIcon} alt="icon" />}
                    {uploadedNft && (
                      <Image
                        src={URL.createObjectURL(uploadedNft)}
                        alt="img"
                        width={uploadedNft && 280}
                        height={uploadedNft && 280}
                      />
                    )}
                  </label>
                  <input
                    type="file"
                    id="upload"
                    accept=".pnd , .jpg"
                    onChange={(e) => setUploadedNft(e.target.files[0])}
                  />
                </div>
                <div className="btn-holder">
                  <Button
                    type="button"
                    variant="primary"
                    className="back"
                    onClick={() => setSteps(1)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      setSteps(3);
                    }}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
            {steps == 3 && (
              <div className="input-content">
                <strong className="title">
                  What asset(s) your emissary utilizing?
                </strong>
                <div className="inner-wrap">
                  <AssetsDropDownSelect
                    selectedValue={value}
                    setSelectedValue={setValue}
                    onChange={() => console.log(value)}
                  />
                  {/* <button className="btn-add" type="button">
                    <FiPlusCircle size="30" />
                  </button> */}
                </div>
                <div className="btn-holder">
                  <Button
                    variant="primary"
                    className="back"
                    type="button"
                    onClick={() => setSteps(2)}
                  >
                    <FiArrowLeftCircle size="24" />
                  </Button>
                  <Button
                    type="button"
                    variant="primary"
                    onClick={() => setSteps(4)}
                  >
                    Proceed
                  </Button>
                </div>
              </div>
            )}
          </form>
        </FormHolder>
      )}
      {steps == 4 && <DigestingInfo />}
    </>
  );
};

export default CreatEmissary;
