import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function Documents() {
  const navigate=useNavigate()
  return (
    <div>
      Documents
      <button onClick={()=> navigate('/features')}>go to features</button>
      <Outlet />
    </div>
  );
}

export default Documents;
