// https://nextjs-mpesa.codewithriz.com/server-setup

"use server";

import axios from "axios";

export const stkPush =  async() => {
    const mpesaEnv = process.env.MPESA_ENVIRONMENT;
    const MPESA_BASE_URL =
      mpesaEnv === "live"
        ? "https://api.safaricom.co.ke"
        : "https://sandbox.safaricom.co.ke";

        const {mpesa_number: phoneNumber, amount, name} = body;
    try {
        //generate authorization token
    const auth = Buffer.from(
      `${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`
    ).toString("base64");
 
    const resp = await axios.get(
      `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      });

      const token = resp.data.access_token;

      const cleanedNumber = phoneNumber.replace(/\D/g, ""); //remove non-digit characters

      const formattedPhone = `254${cleanedNumber.slice(-9)}`; //format phone number to 2547xxxxxxxx

      const date =new Date();
      
     const timestamp =
       date.getFullYear() +
       ("0" + (date.getMonth() + 1)).slice(-2) +
       ("0" + date.getDate()).slice(-2) +
       ("0" + date.getHours()).slice(-2) +
       ("0" + date.getMinutes()).slice(-2) +
       ("0" + date.getSeconds()).slice(-2);  //format timestamp to YYYYMMDDHHmmss

       const password = Buffer.from(
        process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp
       ).toString("base64");

       const response = await axios.post(
         `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
         {
           BusinessShortCode: process.env.MPESA_SHORTCODE,
           Password: password,
           Timestamp: timestamp,
           TransactionType: "CustomerPayBillOnline", //CustomerBuyGoodsOnline - for till
           Amount: amount,
           PartyA: formattedPhone,
           PartyB: process.env.MPESA_SHORTCODE, //till number for tills
           PhoneNumber: formattedPhone,
           CallBackURL: "https://mydomain.com/callback-url-path",
           AccountReference: phoneNumber,
           TransactionDesc: "anything here",
         },
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );

       return {data: response.data};

    } catch (error) {
        if (error.response) {
            return error.response.data;
        }
        return { error: "An error occurred. Please try again" };
        
    }
}