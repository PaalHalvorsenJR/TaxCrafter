"use client";

import * as React from "react";
import { useState } from "react";
import { taxCalculations } from "@/components/taxCalculations";
import { nettoSalary } from "@/components/nettoSalary";
import { stepTax } from "@/components/stepTax";
import { insuredTax } from "@/components/insuredTax";
import { jointTax } from "@/components/jointTax";
import PieChart from "@/components/pieChart"; // Import the PieChart component
export default function Home() {
  const [salary, setSalary] = useState("");
  const [tax, setTax] = useState("");
  const [steptax, setSteptax] = useState("");
  const [insuredtax, setInsuredtax] = useState("");
  const [jointtax, setJointtax] = useState("");
  const [netto, setNetto] = useState("");

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
  };

  const calculateTax = () => {
    const income = parseInt(salary);
    if (!isNaN(income)) {
      const calculatedTax = taxCalculations(income);
      setTax(calculatedTax.toFixed(0));
      const calculatedInsuredTax = insuredTax(income);
      setInsuredtax(calculatedInsuredTax.toFixed(0));
      const calculatedJointTax = jointTax(income);
      setJointtax(calculatedJointTax.toFixed(0));
      const calculatedStepTax = stepTax(income);
      setSteptax(calculatedStepTax.toFixed(2));
      const calculatedNetto = nettoSalary(income);
      setNetto(calculatedNetto.toFixed(0));
    } else {
      setSalary("500000");
    }
  };

  return (
    <div className="py-10">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-6xl font-bold text-center text-blue-500">
          Tax
          <span className="text-gray-900">Crafter</span>
        </h1>
        <h1 className="py-5 text-4xl font-bold text-center text-gray-900">
          Navigate Your Finances
          <span className=" text-blue-500"> with Ease</span>
        </h1>
        <div className="py-2 text-2xl font-bold text-center text-gray-900">
          <p>Find out how much your salary will be after taxes</p>
        </div>
        <div className="py-1">
          <input
            type="text"
            className="rounded-xl py-2 px-4 text-2xl font-bold text-center text-gray-900"
            placeholder="Enter your salary"
            value={salary}
            onChange={handleSalaryChange}
          />
          <button
            className=" rounded-xl py-2 px-4 text-2xl font-bold text-center text-gray-200 bg-blue-500"
            onClick={calculateTax}
          >
            Calculate
          </button>
        </div>
        <div className="py-2 w-full max-w-6xl mx-auto">
          <div className=" flex flex-col rounded-xl md:grid md:grid-cols-8 gap-4 bg-gray-200 py-2 text-2xl text-gray-900">
            {/* Salary and tax details */}
            <div className="col-span-5">
              <div className="grid grid-cols-5 items-center mb-4">
                <p className="col-span-1 text-left pl-4">Salary:</p>
                <p className="col-span-4 text-center">{salary}</p>
              </div>
              <div className="grid grid-cols-5 items-center mb-5">
                <p className="col-span-1 text-left pl-4">Insured Tax:</p>
                <p className="col-span-4 text-center">{insuredtax}</p>
              </div>
              <div className="grid grid-cols-5 items-center mb-4">
                <p className="col-span-1 text-left pl-4">Joint Tax:</p>
                <p className="col-span-4 text-center">{jointtax}</p>
              </div>
              <div className="grid grid-cols-5 items-center mb-4">
                <p className="col-span-1 text-left pl-4">Total tax:</p>
                <p className="col-span-4 text-center">{tax}</p>
              </div>
              <div className="grid grid-cols-5 items-center mb-4">
                <p className="col-span-1 text-left pl-4">Step Tax:</p>
                <p className="col-span-4 text-center border-b border-b-1 border-gray-400">
                  {steptax}%
                </p>
              </div>
              <div className="grid grid-cols-5 items-center mb-4">
                <p className="font-bold col-span-1 text-left pl-4">
                  Net salary:
                </p>
                <p className="col-span-4 text-center">{netto}</p>
              </div>
              <div className=" ml-7 grid grid-cols-2 w-full items-center mb-2">
                <p className="text-sm col-span-4 text-left">
                  Bagging {salary} kr in Norway&lsquo; Thats a juicy stack! But
                  pump the brakes, hotshot—here comes the taxman, tiptoeing like
                  a ninja on snowshoes, ready to snatch {tax} kr—thats {steptax}
                  % of your dough! Whats left for your piggy bank? Just {netto}{" "}
                  kr. Its like gearing up for an all-you-can-eat Viking feast
                  and ending up with just the pickles. Seriously, trying to
                  dodge the Norwegian taxman is like trying to find flip-flops
                  in a blizzard. Time to cough up the cash, pal!
                </p>
              </div>
            </div>
            {/* PieChart */}
            <div className="col-span-3">
              {salary && !isNaN(parseFloat(salary)) && (
                <PieChart salary={salary} tax={netto} />
              )}
            </div>
          </div>
        </div>
        <div className="text-1xl font-bold text-center text-gray-900">
          <p>
            TaxCrafter is a <span className="text-blue-500">simple</span>,
            easy-to-use tool that helps you manage your{" "}
            <span className="text-blue-500">taxes</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
