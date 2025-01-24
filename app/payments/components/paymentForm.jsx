"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiUser, FiPhone, FiDollarSign } from "react-icons/fi";
import { sendStkPush } from "@/app/actions/stkPush";
import { stkPushQuery } from "@/app/actions/stkPushQuery";
import Loading from "./loading";
import Success from "./success";

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Too short"),
  mpesa_number: yup
    .string()
    .required("Mpesa number is required")
    .matches(/^07\d{8}$/, "Invalid Mpesa number"),
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Must be greater than zero")
    .required("Amount is required"),
});

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [stkQueryLoading, setStkQueryLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let reqcount = 0;

  const stkPushQueryWithIntervals = (CheckoutRequestID) => {
    const timer = setInterval(async () => {
      reqcount += 1;
      if (reqcount === 15) {
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        setErrorMessage("You took too long to pay");
      }

      const { data, error } = await stkPushQuery(CheckoutRequestID);

      if (error) {
        if (error.response?.data?.errorCode !== "500.001.1001") {
          clearInterval(timer);
          setStkQueryLoading(false);
          setLoading(false);
          setErrorMessage(
            error?.response?.data?.errorMessage || "Payment failed"
          );
        }
      }

      if (data?.ResultCode === "0") {
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        setSuccess(true);
      } else if (data) {
        clearInterval(timer);
        setStkQueryLoading(false);
        setLoading(false);
        setErrorMessage(data?.ResultDesc || "Payment unsuccessful");
      }
    }, 2000);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setStkQueryLoading(true);
    setErrorMessage("");

    const { mpesa_number, name, amount } = data;
    const formData = {
      mpesa_number: mpesa_number.trim(),
      name: name.trim(),
      amount,
    };

    const phoneRegex =
      /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/;
    if (!phoneRegex.test(formData.mpesa_number)) {
      setLoading(false);
      setStkQueryLoading(false);
      return alert("Invalid Mpesa number");
    }

    const { data: stkData, error: stkError } = await sendStkPush(formData);
    if (stkError) {
      setLoading(false);
      setStkQueryLoading(false);
      return alert(stkError);
    }

    stkPushQueryWithIntervals(stkData.CheckoutRequestID);
    alert("STK push sent successfully");
  };

  return (
    <>
      {stkQueryLoading ? (
        <Loading number={register.mpesa_number} />
      ) : success ? (
        <Success />
      ) : (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          id="payment"
          className="w-full max-w-xl mx-auto  px-6 lg:pt-32 pt-48 scroll-mt-20 font-bold">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center text-4xl font-Ovo text-gray-900 dark:text-white">
            Channel your Sponsorship 🎉
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-10 text-center max-w-xl mx-auto mt-4 text-gray-600 dark:text-gray-300">
            Provide your name, Mpesa number, and amount to process your gift.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="bg-white dark:bg-darkTheme shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-6">
            <form
              action="#"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="text-base font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <div className="relative mt-2">
                  <FiUser className="absolute left-4 top-5 text-gray-400" />
                  <input
                    {...register("name")}
                    type="text"
                    required
                    placeholder="Name"
                    className={`block w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-900 dark:text-white dark:bg-gray-800
                 border-gray-200 dark:border-gray-700
                  ring-2
                  transition-all duration-200 focus:border-green-500 focus:outline-none focus:ring-green-500
                  ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  />
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name?.message}
                  </p>
                </div>
              </div>

              {/* Mpesa Number Input */}
              <div>
                <label className="text-base font-medium text-gray-900 dark:text-white">
                  Mpesa Number
                </label>
                <div className="relative mt-2">
                  <FiPhone className="absolute left-4 top-5 text-gray-400" />
                  <input
                    {...register("mpesa_number")}
                    type="text"
                    placeholder="07xxxxxxxx"
                    className={`block w-full pl-12 pr-4 py-3 border-2 rounded-md text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800
                  border-gray-200 dark:border-gray-700
                  ring-2 
                  transition-all duration-200 focus:border-green-500 focus:outline-none focus:ring-green-500
                  ${
                    errors.mpesa_number ? "border-red-500" : "border-gray-300"
                  }`}
                  />
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mpesa_number?.message}
                  </p>
                </div>
              </div>

              {/* Amount Input */}
              <div>
                <label className="text-base font-medium text-gray-900 dark:text-white">
                  Amount
                </label>
                <div className="relative mt-2">
                  <FiDollarSign className="absolute left-4 top-5 text-gray-400" />
                  <input
                    {...register("amount")}
                    type="number"
                    placeholder="Enter Amount in Ksh"
                    min="10"
                    max="100000000"
                    className={`block w-full pl-12 pr-4 py-3  rounded-md text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 
                  border-2
                  ring-2
                     border-gray-200 dark:border-gray-700
                  out-of-range:border-red-500
                  caret-green-500
                  transition-all duration-200 focus:border-green-500 focus:outline-none focus:ring-green-500
                  ${errors.amount ? "border-red-500" : "border-gray-300"}`}
                  />
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amount?.message}
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  type="submit"
                  disabled={loading}
                  onClick={handleSubmit}
                  className="px-8 py-3 border border-transparent bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all dark:bg-transparent dark:border-white/50 hover:bg-black/60 focus:outline-none">
                  {loading ? "Processing..." : "Proceed With Tipping"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.section>
      )}
    </>
  );
};

export default PaymentForm;
