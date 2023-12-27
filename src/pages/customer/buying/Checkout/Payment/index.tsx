// import { useState } from "react";
import styled from "@emotion/styled";
// import { Typography, Tabs, Tab, TextField, Radio } from "@mui/material";
// import { Form, Formik } from "formik";
// import { PaymentMethodsType } from "../../../../../assets/data/GlobalVariables";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

// const TabPanel = ({ children, value, index }: TabPanelProps) => {
//   return (
//     <div hidden={value !== index}>
//       {value === index && <Typography>{children}</Typography>}
//     </div>
//   );
// };

const Payment = () => {
//   const [value, setValue] = useState(0);
//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };

//   const initialValues:PaymentMethodsType = "";
//   const validationSchema = "";
//   const onSubmit = "";

  return (
     <Holder>
       {/* <Typography variant="h4" component={"h1"}>
         choose payment method
       </Typography>
       <Typography variant="h5" component={"h2"}>
         Payment Information
       </Typography>

       <div>
         <Tabs value={value} onChange={handleChange}>
           <Tab label="Credit Card" />
           <Tab label="PayPal" />
           <Tab label="MasterCard" />
         </Tabs>
       </div>

       <Formik
         initialValues={initialValues}
         onSubmit={onSubmit}
         validationSchema={validationSchema}
       >
         <Form>
           <TabPanel value={value} index={0}>
             <div>
               <span>Credit Card Number</span>
               <TextField />
             </div>
             <div>
               <span>Security Code</span>
               <TextField />
             </div>
             <div>
               <span>Expiration Date</span>
               <Radio />
             </div>
           </TabPanel>

           <TabPanel value={value} index={1}>
             Item Two
           </TabPanel>
           <TabPanel value={value} index={2}>
             Item Three
           </TabPanel>
         </Form>
       </Formik> */}
    </Holder>
  );
};
export default Payment;

const Holder = styled.div``;
