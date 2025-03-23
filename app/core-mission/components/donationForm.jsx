// app/core-mission/components/DonationForm.js
"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";

export default function DonationForm({ onDonate }) {
  const [amount, setAmount] = useState(500);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDonationComplete, setIsDonationComplete] = useState(false);

  const predefinedAmounts = [200, 500, 1000];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Handle successful donation
    onDonate(Number(amount));
    setIsDonationComplete(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsDonationComplete(false);
      setName("");
      setEmail("");
      setAmount(500);
      setIsAnonymous(false);
    }, 3000);
  };

  if (isDonationComplete) {
    return (
      <div className="text-center py-6">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 mb-4">
          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Your donation of KSh {amount} has been received.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* Predefined amounts */}
      <div className="grid grid-cols-3 gap-3">
        {predefinedAmounts.map((amt) => (
          <button
            key={amt}
            type="button"
            className={`py-2 rounded-lg font-medium transition-colors ${
              amount === amt
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            }`}
            onClick={() => setAmount(amt)}>
            KSh {amt}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div>
        <label
          htmlFor="custom-amount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Custom Amount (KSh)
        </label>
        <input
          type="number"
          id="custom-amount"
          min="50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
        />
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required={!isAnonymous}
          disabled={isAnonymous}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          required
        />
      </div>

      {/* Anonymous donation */}
      <div className="flex items-center">
        <input
          id="anonymous"
          type="checkbox"
          checked={isAnonymous}
          onChange={(e) => setIsAnonymous(e.target.checked)}
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label
          htmlFor="anonymous"
          className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
          Make donation anonymous
        </label>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-70">
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Processing...
          </>
        ) : (
          "Donate Now"
        )}
      </button>

      <p className="text-xs text-center text-gray-500 dark:text-gray-400">
        Payment processed securely through JKUAT Christian Union. Donations may
        be tax-deductible.
      </p>
    </form>
  );
}
