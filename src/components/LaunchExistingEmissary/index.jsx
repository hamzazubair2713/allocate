import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import Image from "next/image";
import keyImg from "../../../public/icon-key.svg";
import { LaunchColumn } from "./LaunchExistingEmissary.styles";
import Link from "next/link";

const LaunchExistingEmissary = () => {
  return (
    <LaunchColumn>
      <div className="wrap">
        <div className="icon-box">
          <Image src={keyImg} alt="img description" />
        </div>
        <strong className="title">Launch existing emissary</strong>
        <p>
          Already have a emissary for your community? Enter the unique code and
          direct to your emissary.
        </p>
        <form className="form">
          <input type="text" placeholder="Enter Code..." />
          <Link href="/created-emissary">
            <button type="submit">
              <FiArrowRightCircle size="24" />
            </button>
          </Link>
        </form>
      </div>
    </LaunchColumn>
  );
};

export default LaunchExistingEmissary;
