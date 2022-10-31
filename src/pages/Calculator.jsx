import React, { useState } from 'react';
import Description from '../components/Description';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import axios from 'axios';

const Calculator = () => {
  const [form, setForm] = useState({ firstValue: '', secondValue: '' });
  const [operation, setOperation] = useState();

  const operations = ['N/A', 'Add', 'Subtract', 'Multiply'];

  const handleInput = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleOperation = (e) => {
    setOperation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      'https://nordstone-calculator-api.herokuapp.com/calculator',
      {
        firstValue: form.firstValue,
        secondValue: form.secondValue,
        operation,
      }
    );
    alert(`Result: ${response.data.output}`);
  };

  return (
    <section className="min-h-[70vh]">
      <div className="mt-12 text-center">
        <div className="mb-1">
          <Title title="Calculator" />
        </div>
        <div className="mx-auto text-center max-w-[300px]">
          <Description desc="Try to apply, Sum, Subtract and Multiplication Operations" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-16 flex flex-col items-center"
      >
        <div className="mb-[40px] flex flex-col justify-start">
          <label className="mb-[4px] font-medium text-md">
            First Value <span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="bg-transparent text-md font-bold w-80 h-10 px-2 rounded-md border"
            type="number"
            name="firstValue"
            value={form.firstValue}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-[40px] flex flex-col justify-start">
          <label className="mb-[4px] font-medium text-md">
            Second Value <span className="text-[#ff0000]">*</span>
          </label>
          <input
            className="bg-transparent text-md font-bold w-80 h-10 px-2 rounded-md border"
            type="number"
            name="secondValue"
            value={form.secondValue}
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-[40px] flex flex-col justify-start">
          <label className="mb-[4px] font-medium text-md">
            Operation <span className="text-[#ff0000]">*</span>
          </label>
          <select
            className="bg-transparent border mb-[32px] text-md font-bold w-80 h-10 px-2 rounded-md"
            id="operationOptions"
            onChange={handleOperation}
          >
            {operations.map((operation, index) => {
              return (
                <option key={index} value={operation}>
                  {operation}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <PrimaryButton text="Calculate" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Calculator;
