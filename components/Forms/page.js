"use client";

import React, { useEffect, useState } from "react";
import { MenuItem, Stack, TextField, Box, Typography } from "@mui/material";
import Table from "react-bootstrap/Table";
import Print from "../Print/PrintHandler";
import { FaPlusCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
const id = uuidv4().slice(0, 5);
let currentYear = new Date().getFullYear();

function Forms() {
  const [purchaseDetails, setPurchaseDetails] = useState({
    invoice_id: "",
    name: "",
    address: "",
    phone: "",
    sales_type: "",
    date: "",
    payment_type: "",
    customer_type: "",
    reference_no: "",
    tin_no: "",
    gstn_no: "",
    dlr_gstn: "",
    registration_no: "",
    vehicle: ""
  });
  const [partsDetails, setPartDetails] = useState([
    {
      parts_name: "",
      parts_no: "",
      quantity: "",
      price: "",
    },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let grandTotal = 0;

    //using inside useEffect to prevent error while rendering
    setPurchaseDetails((prev) => {
      return {
        ...prev,
        invoice_id: `${currentYear}m${id}`,
      };
    });

    //calculating total Value
    let result = partsDetails.map((data) => data.price);

    const clean = result.filter((i) => i);

    if (clean.length > 0) {
      for (let i = 0; i < clean.length; i++) {
        grandTotal = parseInt(clean[i], 0) + grandTotal;
      }
    } else {
      return;
    }

    setTotal(grandTotal);
  }, [partsDetails, total]);

  //binds input fields for purchase details
  const onchangeInputHandler = (e) => {
    const { name } = e.target;
    const { value } = e.target;

    setPurchaseDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  //binds input fields for parts details
  const partsInputHandler = (e, index) => {
    const { name, value } = e.target;

    const newPartsList = [...partsDetails];
    newPartsList[index][name] = value;

    setPartDetails(newPartsList);
  };

  //counter for adding more input fields in purchasing car parts
  const addField = () => {
    setPartDetails([
      ...partsDetails,
      { parts_name: "", parts_no: "", quantity: "", price: "" },
    ]);
  };



  //remove unwanted field
  const removeField = (index) => {
     let data = [...partsDetails]
     data.splice(index, 1)
     setPartDetails(data)
  };

  //-------------------------------------JSX-----------------------------------//

  return (
    <main style={{ width: "100%", marginTop: "5px", marginBottom: "10px" }}>
      <Stack alignItems="center" justifyContent="center">
        <Image
          priority
          src="/images/logo.png"
          alt="logo"
          height={150}
          width={200}
        />
      </Stack>
      <Stack spacing={4}>
        {/*First Stack */}
        <Stack
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box style={{ cursor: "none" }} width={250}>
            <TextField
              name="invoice_no"
              value={purchaseDetails.invoice_id}
              disabled
              label="Invoice No"
              fullWidth
            />
          </Box>
          <Box width={250}>
            <TextField
              name="name"
              value={purchaseDetails.name}
              onChange={onchangeInputHandler}
              label="Name"
              fullWidth
            />
          </Box>

          <Box width={250}>
            <TextField
              name="address"
              value={purchaseDetails.address}
              onChange={onchangeInputHandler}
              label="Address"
              fullWidth
            />
          </Box>
          <Box width={250}>
            <TextField
              onWheel={(e) => e.target.blur()}
              type="number"
              name="phone"
              value={purchaseDetails.phone}
              onChange={onchangeInputHandler}
              label="Phone No."
              fullWidth
            />
          </Box>
        </Stack>

        {/*Second Stack */}
        <Stack
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box width="250px">
            <TextField
              name="sales_type"
              value={purchaseDetails.sales_type}
              onChange={onchangeInputHandler}
              fullWidth
              label="Sales Type"
              defaultValue={"counter sale"}
              select
            >
              <MenuItem value="counter sale">Counter Sale</MenuItem>
              <MenuItem value="walk in">Walk In</MenuItem>
            </TextField>
          </Box>

          <Box width="250px">
            <label style={{ display: "flex", alignItems: "center" }}>
              Date:{" "}
              <TextField
                name="date"
                value={purchaseDetails.date}
                onChange={onchangeInputHandler}
                fullWidth
                type="date"
              />
            </label>
          </Box>

          <Box width="250px">
            <TextField
              name="payment_type"
              value={purchaseDetails.payment_type}
              onChange={onchangeInputHandler}
              fullWidth
              label="Payment Type"
              defaultValue={"Cash"}
              select
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="online">Online</MenuItem>
            </TextField>
          </Box>

          <Box width="250px">
            <TextField
              name="customer_type"
              value={purchaseDetails.customer_type}
              onChange={onchangeInputHandler}
              fullWidth
              label="Customer Type"
              defaultValue={"individual"}
              select
            >
              <MenuItem value="individual">Individual</MenuItem>
              <MenuItem value="reference">Reference</MenuItem>
            </TextField>
          </Box>
        </Stack>

        {/*Fourth Stack */}
        <Stack
          alignItems="center"
          justifyContent="center"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Box width="250px">
            <TextField
              name="reference_no"
              value={purchaseDetails.reference_no}
              onChange={onchangeInputHandler}
              label="Reference No."
              fullWidth
            />
          </Box>

          <Box width="250px">
            <TextField
              name="tin_no"
              value={purchaseDetails.tin_no}
              onChange={onchangeInputHandler}
              label="TIN No."
              fullWidth
            />
          </Box>

          <Box width="250px">
            <TextField
              name="gstn_no"
              value={purchaseDetails.gstn_no}
              onChange={onchangeInputHandler}
              label="GSTN No."
              fullWidth
            />
          </Box>

          <Box width="250px">
            <TextField
              name="dlr_gstn"
              value={purchaseDetails.dlr_gstn}
              onChange={onchangeInputHandler}
              label="DLR GSTN No."
              fullWidth
            />
          </Box>
        </Stack>

        {/*Fifth Stack */}
        <Stack 
           alignItems="center"
           justifyContent="center"
           direction={{ xs: "column", sm: "row" }}
           spacing={{ xs: 1, sm: 2, md: 4 }}
        >
        <Box width="250px">
            <TextField
              name="registration_no"
              value={purchaseDetails.registration_no}
              onChange={onchangeInputHandler}
              label="Registration No."
              fullWidth
            />
          </Box>

          <Box width="250px">
          <TextField
              name="vehicle"
              value={purchaseDetails.vehicle}
              onChange={onchangeInputHandler}
              label="Vehicle"
              fullWidth
            />
          </Box>   
        </Stack>
      </Stack>
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ width: "80%" }}>
          <Table borderless>
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
              {partsDetails.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <TextField
                        name="parts_name"
                        value={item.parts_name}
                        onChange={(e) => partsInputHandler(e, index)}
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        size="small"
                        fullWidth
                      />
                    </td>
                    <td>
                      <TextField
                        name="parts_no"
                        value={item.parts_no}
                        onChange={(e) => partsInputHandler(e, index)}
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        size="small"
                        fullWidth
                      />
                    </td>
                    <td>
                      <TextField
                        onWheel={(e) => e.target.blur()}
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => partsInputHandler(e, index)}
                        type="number"
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        size="small"
                        fullWidth
                      />
                    </td>
                    <td>
                      <TextField
                        onWheel={(e) => e.target.blur()}
                        name="price"
                        value={item.price}
                        onChange={(e) => partsInputHandler(e, index)}
                        type="number"
                        inputProps={{ min: 0, style: { textAlign: "center" } }}
                        size="small"
                        fullWidth
                      />
                    </td>
                    {partsDetails.length == index + 1 && index !== 0 && (
                      <td>
                        <a style={{ cursor: "pointer" }} onClick={() => removeField(index)}>
                          <IoMdCloseCircle size={35} color="red" />
                        </a>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <a style={{ cursor: "pointer", float: "right" }} onClick={addField}>
            <FaPlusCircle size={30} color="green" />
          </a>
          <div className="d-flex justify-content-center">
            <Typography component="div">
              <Box sx={{ m: 1 }} >
                Grand Total: Rs. <span>{total}.00</span>
              </Box>
            </Typography>
          </div>
        </div>
      </div>
      <Print data1={purchaseDetails} total={total} data2={partsDetails} />
    </main>
  );
}

export default Forms;
