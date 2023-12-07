import React, { useState } from "react";
import CombineInput from "../InputFields/CombineInput";
import Button from "../Button/Button";
import { GeneralTabHolder } from "./EmissaryRolesTab.styles";

function EmissaryRolesTab() {

  return (
    <GeneralTabHolder>
      <form>
        <div className="content-holder">
          <div className="box">
            <strong className="subtitle">Controllers</strong>
            <p>Wallet address that being assigned as a controller will able to access to transfer request, safes, programs tabs. However, controllers have no access to the emissary settings, only you as an admin have the rights to change the settings.</p>
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
