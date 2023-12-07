import React from "react";
import Image from "next/image";
import klaytnImg from '../../../public/klaytn.svg';
import proverImg from '../../../public/provers.svg';
import someSingImg from '../../../public/somesing.svg';
import { LoginColumn } from "./RecentLogin.styles";

const RecentLogin = () => {
  return (
    <LoginColumn>
      <ul className="login-list">
        <li>
          <div className="img-box">
            <Image src={klaytnImg} alt="klaytn" />
            <span className="name">Klaytn</span>
          </div>
          <span className="text">Recently login 3 hours ago</span>
        </li>
        <li>
          <div className="img-box">
            <Image src={proverImg} alt="provers" />
            <span className="name">Provers</span>
          </div>
          <span className="text">Recently login 4 hours ago</span>
        </li>
        <li>
          <div className="img-box">
            <Image src={someSingImg} alt="somesign" />
            <span className="name">SomeSing</span>
          </div>
          <span className="text">Recently login 5 hours ago</span>
        </li>
        <li>
          <div className="img-box">
            <Image src={someSingImg} alt="somesign" />
            <span className="name">SomeSing</span>
          </div>
          <span className="text">Recently login 5 hours ago</span>
        </li>
      </ul>
    </LoginColumn>
  );
};

export default RecentLogin;
