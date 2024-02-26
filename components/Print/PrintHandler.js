"use client";

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from 'react-bootstrap/Button';


import  Printme  from './PrintMe';

const Print = ({data1, data2, total}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${data1.invoice_id}`
  });


  return (
    <div style={{width: '80%'}}>
      <div style={{display :'none'}}>
      <Printme data1 ={data1} data2={data2} total={total} ref={componentRef} />
      </div>
      <div className='d-flex justify-content-end '>
        <Button onClick={handlePrint} variant="primary">Print Invoice</Button> 
      </div>
     
    </div>
  );
};

export default Print;