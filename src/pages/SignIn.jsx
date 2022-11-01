import React, { useState, useRef } from 'react';
import Description from '../components/Description';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import PrimaryButton from '../components/PrimaryButton';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { signInUser, forgotPassword } = useUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) forgotPassword(email);
  };

  return (
    <section className="min-h-[70vh]">
      <div>
        <div className="mt-16 text-center">
          <div className="mb-1">
            <Title title="Sign in" />
          </div>
          <Description desc="Sign in to continue" />
        </div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start">
            <label className="mb-[4px] font-medium text-md">
              Email <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="mb-[32px] text-[#333] text-md font-bold w-80 h-10 px-2 rounded-md"
              type="email"
              ref={emailRef}
              required
            />
          </div>
          <div className="flex flex-col justify-start">
            <label className="mb-[4px] font-medium text-md">
              Password <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="mb-[32px] text-[#333] text-md font-bold w-80 h-10 px-2 rounded-md"
              type="password"
              ref={passwordRef}
              required
            />
          </div>
          <PrimaryButton buttonType="submit" text="Login" />
          <div className="mt-4 flex flex-col">
            <button
              className="bg-transparent border-none text-xs text-center font-medium"
              onClick={forgotPasswordHandler}
            >
              Forgot Password?
            </button>
            <p className="text-xs text-center font-medium">
              Don't have an account?{' '}
              <span className="underline underline-offset-4">
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
