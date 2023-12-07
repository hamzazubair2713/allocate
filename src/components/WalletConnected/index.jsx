import React from "react";
import Image from "next/image";
import walletImg from "../../../public/wallet-logo.svg";
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
        <strong className="title">Klaytn Wallet</strong>
        <p>
          <Link href="/">Don’t have an Klaytn wallet? Download here</Link>
        </p>
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
