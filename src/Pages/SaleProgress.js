import React from "react";
import FormSection from "../Components/Sale Progress/FormSection";
import UpperSection from "../Components/Sale Progress/UpperSection";
import DrawerComp from "../Components/Shared/DrawerComp";

const SaleProgress = () => {
  return (
    <>
      <DrawerComp>
        <div className="pb-5">
          <UpperSection />
          <FormSection />
        </div>
      </DrawerComp>
    </>
  );
};

export default SaleProgress;
