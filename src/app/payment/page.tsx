"use client"
import Header from '@/components/layout/Header';
import { useState } from 'react';

export default function PaymentForm() {

  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add payment processing logic here
    alert('Payment details submitted');
  };

  return (
    <div>
        <Header text='Payment' title='Payment'/>
         <div className="text-center mt-10 mb-10">
    </div>
            <div className="max-w-lg mx-auto p-8  mb-10 shadow-2xl">
      <form onSubmit={handleSubmit}>
        {/* name */}
        <label className="block mb-2 text-sm font-semibold text-myverydarkpink">Name</label>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded border text-myverydarkpink border-bordercoloryello focus:border-bordercoloryello"
          placeholder="Enter Your Name"
          required
        />
        <label className="block mb-2 text-sm font-semibold text-myverydarkpink">Eamil</label>
        <input
          type="email"
          className="w-full p-2 mb-4 rounded border text-myverydarkpink border-bordercoloryello focus:border-bordercoloryello"
          placeholder="Enter Your Email Address"
          required
        />
        {/* Payment Method */}
        <label className="block mb-2 text-sm font-semibold text-myverydarkpink">Payment Method</label>
        <select
          className="w-full p-2 mb-4 rounded border border-bordercoloryello focus:border-bordercoloryello text-myverydarkpink"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value="" disabled>Select Payment Method</option>
          <option value="credit">Credit Card</option>
          <option value="debit">Debit Card</option>
        </select>

        {/* Card Number */}
        <label className="block mb-2 text-sm font-semibold text-myverydarkpink">Card Number</label>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded border text-myverydarkpink border-bordercoloryello focus:border-bordercoloryello"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />


        {/* CVV */}
        <label className="block mb-2 text-sm font-semibold text-myverydarkpink">CVV</label>
        <input
          type="text"
          className="w-full p-2 mb-4 rounded border text-myverydarkpink border-bordercoloryello focus:border-bordercoloryello "
          placeholder="123"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        
        <div className="p-2 w-full">
           <div className="relative">
             <label
               htmlFor="message"
               className="leading-7 font-semibold text-sm text-myverydarkpink"
             >
               Message
             </label>
             <textarea
               id="message"
               name="message" 
               className="w-full rounded border  border-bordercoloryello focus:border-bordercoloryello text-myverydarkpink h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
               defaultValue={""}
             />
           </div>
         </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-bordercoloryello text-white p-2 rounded hover:bg-bordercoloryello"
        >
          Submit Payment
        </button>
      </form>
    </div>
    </div>
    
  );
}
