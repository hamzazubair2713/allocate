import React, { useState } from "react";
import Button from "../Button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { GeneralTabHolder } from "./EmissaryRolesTab.styles";
import AssetsDropDown from "../InputFields/AssetsDropDown";
import RoleDropDown from "../InputFields/RoleDropDown";

function EmissaryRolesTab() {
  const [assetsValue, setAssetsValue] = useState("Select an asset");
  const [assetsValue1, setAssetsValue1] = useState("Select an asset");
  const [assetsValue2, setAssetsValue2] = useState("Select an asset");

  return (
    <GeneralTabHolder>
      <form>
        <div className="content-holder">
          <div className="box">
            <strong className="subtitle">Controllers</strong>
            <p>
              Wallet address that being assigned as a controller will able to
              access to transfer request, safes, programs tabs. However,
              controllers have no access to the emissary settings, only you as
              an admin have the rights to change the settings.
            </p>
          </div>
          <div className="box">
            <div className="roles-holder">
              <div className="flex">
                <div className="col-wrap">
                  <div className="text">
                    0x9C728A1C7ECeAa681d3330D74D8c2593A...
                  </div>
                  <div className="dropdown-wrap">
                    <RoleDropDown
                      onChange={(value) => console.log(value)}
                      selectedValue={assetsValue}
                      setSelectedValue={setAssetsValue}
                    />
                  </div>
                </div>
                <ul className="action-btn">
                  <li>
                    <button type="button">
                      <FiPlusCircle size="20" />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <RiDeleteBin6Line size="21" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div className="col-wrap">
                  <div className="text">
                    0x9C728A1C7ECeAa681d3330D74D8c2593A...
                  </div>
                  <div className="dropdown-wrap">
                    <RoleDropDown
                      onChange={(value) => console.log(value)}
                      selectedValue={assetsValue1}
                      setSelectedValue={setAssetsValue1}
                    />
                  </div>
                </div>
                <ul className="action-btn">
                  <li>
                    <button type="button">
                      <FiPlusCircle size="20" />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <RiDeleteBin6Line size="21" />
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex">
                <div className="col-wrap">
                  <div className="text">
                    0x9C728A1C7ECeAa681d3330D74D8c2593A...
                  </div>
                  <div className="dropdown-wrap">
                    <RoleDropDown
                      onChange={(value) => console.log(value)}
                      selectedValue={assetsValue2}
                      setSelectedValue={setAssetsValue2}
                    />
                  </div>
                </div>
                <ul className="action-btn">
                  <li>
                    <button type="button">
                      <FiPlusCircle size="20" />
                    </button>
                  </li>
                  <li>
                    <button type="button">
                      <RiDeleteBin6Line size="21" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-holder">
          <Button variant="primary">Save Changes</Button>
        </div>
      </form>
    </GeneralTabHolder>
  );
}

export default EmissaryRolesTab;
