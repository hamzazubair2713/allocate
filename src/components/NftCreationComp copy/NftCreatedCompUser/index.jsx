import React, { useState } from "react";
import Image from "next/image";
import ApprovedImg from "../../../../public/approved.gif";
import Button from "../../Button/Button";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { ProcessBlock } from "./TransferPayoutCompleted.styles";

const NftCreatedUser = () => {
  return (
    <ProcessBlock>
      <div className="holder">
        <div className="img-box">
          <Image src={ApprovedImg} alt="img description" />
        </div>
        <strong className="title">NFT collection has been minted!</strong>
        <p>
          Your NFT collection had successfully minted.
          <br /> Any info can be checked using the address below.
        </p>
        <div className="info-text">
          0x0f7ac266c8e003a3ef71ca56222bbff48d5e97c166ad4d5ef54e05288d86fa0a
        </div>
        <div className="btn-holder">
          <Button variant="primary">
            Redirect <MdOutlineArrowCircleRight size="24" /> Programs
          </Button>
        </div>
      </div>
    </ProcessBlock>
  );
};

export default NftCreatedUser;
