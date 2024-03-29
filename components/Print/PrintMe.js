"use client";
import React from "react";
import { numberToWords } from "amount-to-words";
import Table from "react-bootstrap/Table";
import classes from "./printme.module.css";


// eslint-disable-next-line react/display-name
  const Printme = React.forwardRef((props, ref) => {
  let date = []
  date.push(props.data1.date.slice(8,10))
  date.push(props.data1.date.slice(5,7))
  date.push(props.data1.date.slice(0,4))
  
  return (
      <div className={classes.main} ref={ref}>
        <div className={classes.header}>
          <h1>TAX INVOICE</h1>
        </div>

        <hr />

        <div className="container-fluid ">
          <div className="row ms-1 mt-3">
            <div className="col-4">
              <ul>
                <li>Invoice No.: {props.data1.invoice_id}</li>
                <li> Customer Type: {props.data1.customer_type}</li>
                <li> Reference No.: {props.data1.reference_no}</li>
              </ul>
            </div>
            {/*break */}
            <div className="col-4">
              <ul>
                <li> Payment: {props.data1.payment_type}</li>
                {date.length > 2 &&  <li> Date: {`${date[0]}-${date[1]}-${date[2]}`}</li>}
               
                <li>Tin No.: {props.data1.tin_no}</li>
              </ul>
            </div>
            {/*break */}
            <div className="col-4">
              <ul>
                <li>Sales Type: {props.data1.sales_type}</li>
                <li>GSTN No.: {props.data1.gstn_no}</li>
                <li> DLR_GSTN No.: {props.data1.dlr_gstn}</li>
              </ul>
            </div>
          </div>
        </div>

        {/*2nd column */}
        <div className="container-fluid ">
          <div className="row ms-1 mt-1">
            <div className="col-4">
              <ul>
                <li>Name: <span className="text-capitalize">{props.data1.name}</span> </li>
                <li>Address: <span className="text-capitalize">{props.data1.address}</span></li>
              </ul>
            </div>

            <div className="col-4">
              <ul>
                <li>Phone No.: {props.data1.phone}</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />

        {/*Customer details ends here */}

        {/*Start purchase details and material cost here */}
        <div className={classes.table}>
          <Table style={{ width: "80%" }} borderless>
            <thead>
              <tr>
                <th>SL. No.</th>
                <th className="text-center">Parts Name</th>
                <th className="text-center">Parts No.</th>
                <th className="text-center">Quantity</th>
                <th className="text-center"> Price</th>
              </tr>
            </thead>
            <tbody>
              {props.data2.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-center text-capitalize">{data.parts_name}</td>
                    <td className="text-center">{data.parts_no}</td>
                    <td className="text-center">{data.quantity}</td>
                    <td className="text-center">{data.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {/*GRAND TOTAL */}
        <div className={classes.total}>
          <div className={classes.totalNumber}>
            <p>GRAND TOTAL (ROUNDED)</p>
            <p>Rs. {props.total}.00</p>
          </div>

          <div className={classes.numToWords}>
            <p className={classes.words}>
              Rupees {numberToWords(props.total)} only
            </p>
          </div>
        </div>
      </div>
  );
});

export default Printme;
