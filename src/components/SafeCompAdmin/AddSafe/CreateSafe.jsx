import React, { useState } from "react";
import { AddSafeStyles, ApprovalDropdown } from "./AddSafe.styles";
import CombineInput from "@/components/InputFields/CombineInput";
import AssetsDropDown from "@/components/InputFields/AssetsDropDown";
import ApprovalDropDown from "@/components/InputFields/ApprovalDropDown";

const CreateSafe = () => {
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [signatureValue, setSignatureValue] = useState(
    "Select Approval Signature"
  );
  return (
    <AddSafeStyles>
      <span className="strog">Create a safe</span>
      <form action="">
        <CombineInput
          label="Name of your safe"
          placeholder="Example: Developing NFT minting DApp "
        />
        <div className="textArea">
          <label className="label" htmlFor="textarea">
            Description
          </label>
          <textarea
            id="textarea"
            placeholder="Briefly describe what is this safe uses for?"
            rows={11}
          />
          <span className="float">0/2000</span>
        </div>
        <span className="label">Choose your asset</span>
        <AssetsDropDown
          onChange={(value) => console.log(value)}
          selectedValue={assetsValue}
          setSelectedValue={setAssetsValue}
        />
        <CombineInput
          label="Recipient Wallet Address"
          placeholder="Example: 5D25X4qhiqpv8ELXMQH5pejGGsoePoo3RFiZiq4N5RHLJKAF"
        />
        <ApprovalDropdown>
          <span className="approvalheading">Approval Signatures</span>
          <p>
            Assets stored inside the safe need to approve by certain amount of
            signatures in order to be payout to the recipient. Add the the
            approvers from your list of emissary controllers and they will need
            to use their wallet to approve any transactions to the recipient.
          </p>
          <ApprovalDropDown
            onChange={(value) => console.log(value)}
            selectedValue={signatureValue}
            setSelectedValue={setSignatureValue}
          />
        </ApprovalDropdown>
      </form>
    </AddSafeStyles>
  );
};

export default CreateSafe;
