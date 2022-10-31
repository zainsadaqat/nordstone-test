import React from 'react';
import Description from '../components/Description';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import SmallText from '../components/SmallText';
import Title from '../components/Title';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <section className="min-h-[70vh]">
      <div>
        <div className="mt-12 text-center">
          <div className="mb-1">
            <Title title="Sign Up" />
          </div>
          <Description desc="Sign up to continue" />
        </div>
        <form className="mt-16 flex flex-col items-center">
          <div className="mb-[40px]">
            <InputField label="Full Name" inputType="text" />
          </div>
          <div className="mb-[40px]">
            <InputField label="Email" inputType="email" />
          </div>
          <div className="mb-[56px]">
            <div className="mb-[4px]">
              <InputField label="Password" inputType="password" />
            </div>
            <SmallText text="Forgot Password?" />
            <ul>
              <li>
                <span className="text-[#ff0000]">*</span>{' '}
                <SmallText text="Password Length" />
              </li>
            </ul>
          </div>
          <div>
            <PrimaryButton text="Sign Up" type="submit" />
            <div className="mt-[4px] flex items-center justify-center">
              <SmallText text="Already have an account? " />
              <span className="ml-1 underline underline-offset-4">
                <Link to="/login">
                  <SmallText text=" Sign In" />
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
