

import { useState } from "react";
import PurchaseFlow from "../pages/purchase-flow";
import PurchaseOrdersPage from "../pages/purchase-orders-page";
import PurchaseSettingsPage from "@/pages/purchase-setting-page";
export function C2BButerApp() {
  const [page,setPage]=useState("purchase")


  if(page==='purchase'){
    return <PurchaseFlow setPage={setPage}/>
  }
  if(page==='setting'){
    return <PurchaseSettingsPage setPage={setPage}/>
  }

  return (
    <PurchaseOrdersPage setPage={setPage}/>
  );
}

export default C2BButerApp;