import React, { useState } from "react";
import {
  AddSafeStyles,
  ApprovalDropdown,
  ConfirmationStyle,
  TransferMode,
} from "./AddSafe.styles";
import CombineInput from "@/components/InputFields/CombineInput";
import AssetsDropDown from "@/components/InputFields/AssetsDropDown";
import ApprovalDropDown from "@/components/InputFields/ApprovalDropDown";
import CheckBox from "@/components/CheckBox";
import Button from "@/components/Button/Button";
import TotalApprovalDropDown from "@/components/InputFields/TotalApprovalDropDown";
import PaymentDropDown from "@/components/InputFields/PaymentDropDown";
import { FiPlusCircle } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
const NumberOfApprove = ["1"];
const CreateSafe = () => {
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [signatureValue, setSignatureValue] = useState("Choose a controller");
  const [checkBoxVal, setCheckBoxVal] = useState(false);
  const [checkBoxValOne, setCheckBoxValOne] = useState(false);
  const [confirm, setConfirm] = useState(1);
  const [value, setValue] = useState(NumberOfApprove);
  const [add, setAdd] = useState("");

  function handelAdd(elem) {
    setAdd(elem);
    setValue((prev) => [...prev, add]);
  }
  function handelRemove(id) {
    setValue((prev) => prev.filter((elem, ind) => ind !== id));
  }
  console.log(confirm);
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
          {value.map((elem, ind) => (
            <div className="wrapperApprovalDrop" key={ind}>
              <ApprovalDropDown
                key={ind}
                onChange={(value) => console.log(value)}
                selectedValue={signatureValue}
                setSelectedValue={setSignatureValue}
              />
              {ind == 0 ? (
                <FiPlusCircle size={30} onClick={() => handelAdd(elem)} />
              ) : (
                <RiDeleteBin6Line size={30} onClick={() => handelRemove(ind)} />
              )}
            </div>
          ))}
        </ApprovalDropdown>
        <ConfirmationStyle>
          <div className="approval">
            Any transaction to the recipient requires the confirmation of:
          </div>
          <div className="count-wrapp">
            <TotalApprovalDropDown
              className="total-number-approval"
              onChange={(params) => setConfirm(params)}
              setSelectedValue={setConfirm}
              selectedValue={confirm}
            />
            <span>
              out of <span className="strong">{value ? value.length : 1}</span>{" "}
              approver(s)
            </span>
          </div>
        </ConfirmationStyle>
        <TransferMode>
          <span>Asset transfer mode</span>
          <CheckBox
            type="checkbox"
            id="release"
            For="release"
            label="Lump sum release to the recipient"
            onChange={(e) => setCheckBoxVal(e.target.checked)}
          />
          {checkBoxVal && (
            <div className="broderInputWrapper">
              <div className="amountDrop">
                <CombineInput label="Release amount" />
                <PaymentDropDown
                  label=""
                  onChange={(param) => console.log(param)}
                  className="amount"
                />
              </div>
            </div>
          )}
          <CheckBox
            type="checkbox"
            id="Milestones"
            For="Milestones"
            label="Milestones-based release to the recipient"
            onChange={(e) => setCheckBoxValOne(e.target.checked)}
          />
          {checkBoxValOne && (
            <div className="broderInputWrapper">
              <div className="amountDrop">
                <CombineInput label="Release amount" />
                <PaymentDropDown
                  label=""
                  onChange={(param) => console.log(param)}
                  className="amount"
                />
              </div>
            </div>
          )}
        </TransferMode>
        <div className="submission">
          <div className="buttonWrap">
            <Button variant="outline" type="button">
              Clear
            </Button>
            <Button variant="primary">Create</Button>
          </div>
          <div className="totalAmount">
            <p>Initial asset in safe</p>
            <span className="span">120 KLAY</span>
          </div>
        </div>
      </form>
    </AddSafeStyles>
  );
};

export default CreateSafe;
