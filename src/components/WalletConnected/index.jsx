import React from "react";
import Image from "next/image";
import walletImg from "../../../public/walletIcon.png";
import Button from "../Button/Button";
import { WalletColumn } from "./WalletConnected.styles";
import Link from "next/link";

const WalletConnected = () => {
  return (
    <WalletColumn>
      <div className="wrap">
        <div className="icon-box">
          <Image src={walletImg} alt="img description" />
        </div>
        <strong className="title">Keplr Wallet</strong>
 
        <div className="btn-holder">
          <Link href="/user/transfer-request">
            <Button variant="primary" width="200">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </WalletColumn>
  );
};

export default WalletConnected;
