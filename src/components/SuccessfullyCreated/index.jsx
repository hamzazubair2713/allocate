import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/emissary-logo.svg";
import WalletConnected from "../WalletConnected";
import WelcomeEmissary from "../WelcomeEmissary";
import { FluidContent } from "./SuccessfullyCreated.styles";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const SuccessfullyCreated = () => {
  return (
    <FluidContent>
      <div className="container">
        <div className="holder">
          <div className="leftCol">
            <div className="logo">
              <Link href="/">
                <Image src={logoImg} alt="img description" />
              </Link>
            </div>
            <div className="text-box">
              <h1>
                A better way to manage payouts & treasury on{" "}
                <span>Injective</span> Network.{" "}
              </h1>
            </div>
            <div className="connected-box">
              <div className="user-info">
                <FaRegUserCircle size="26" />
                <span className="text">5D25...oePo</span>
              </div>
              <strong className="heading">
                Wallet connected successfully!
              </strong>
              <Link href="/" className="btn-back">
                <IoArrowBackCircleOutline size="24" /> Back to emissary.global
              </Link>
            </div>
          </div>
          <div className="rightCol">
            <WalletConnected />
            <WelcomeEmissary />
          </div>
        </div>
      </div>
    </FluidContent>
  );
};

export default SuccessfullyCreated;
