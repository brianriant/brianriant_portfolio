import { NextRequest, NextResponse } from "next/server";
 
export async function POST(request) {

  const clientIp =
    request.headers.get("x-forwarded-for") ||
    request.headers.get("remote-addr");
  const whitelist = [
    "196.201.214.200",
    "196.201.214.206",
    "196.201.213.114",
    "196.201.214.207",
    "196.201.214.208",
    "196.201.213.44",
    "196.201.212.127",
    "196.201.212.138",
    "196.201.212.129",
    "196.201.212.136",
    "196.201.212.74",
    "196.201.212.69",
  ];

  if (!whitelist.includes(clientIp)) {
    return NextResponse.json({ error: "IP not whitelisted" }, { status: 403 });
  }

  const data = await request.json();

  const { securityKey } = request.params;

  if (securityKey !== process.env.MPESA_CALLBACK_SECRET_KEY) {
    // ignore the requets
    return NextResponse.json("ok saf");
  }
 
  if (!data.Body.stkCallback.CallbackMetadata) {
    //for failed transactions
    console.log(data.Body.stkCallback.ResultDesc);
    return NextResponse.json("ok saf");
  }
 
  //lets extract the values from the callback metadata
 
  const body = data.Body.stkCallback.CallbackMetadata
  const amountObj = body.Item.find((obj) => obj.Name === "Amount");
  const amount = amountObj.Value;
 
  //mpesa code
  const codeObj = body.Item.find(
    (obj) => obj.Name === "MpesaReceiptNumber"
  );
  const mpesaCode = codeObj.Value;
 
  //phone number - in recent implimentations, it is hashed.
  const phoneNumberObj = body.Item.find(
    (obj) => obj.Name === "PhoneNumber"
  );
  const phoneNumber = phoneNumberObj.Value.toString();
 
  try {
    //complete your logic - Eg saving transaction to db
 
    console.log({amount, mpesaCode, phoneNumber})
    
    return NextResponse.json("ok", { status: 200 });
  } catch (error) {
    return NextResponse.json("ok");
  }
}