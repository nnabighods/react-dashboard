import React from "react";
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-feather';

function Panels(props) {
 
  return (
    <main className="col-md-9 ms-sm-auto px-4 pb-4">
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-4 pb-2 mb-3 border-bottom">
      <h1 className="h2">Products</h1>
      <Button className="d-flex gap-2 btn-sm pe-3 align-items-center"><Icon.Plus/>Add Product</Button>
    </div>
    </main>
  );
}

export default Panels;

 
 