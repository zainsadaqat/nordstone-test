import React from 'react';
import Description from '../components/Description';
import Title from '../components/Title';
import InputField from '../components/InputField';
import SmallText from '../components/SmallText';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <section className="min-h-[70vh]">
      <div>
        <div className="mt-16 text-center">
          <div className="mb-1">
            <Title title="Sign in" />
          </div>
          <Description desc="Sign in to continue" />
        </div>
        <form className="mt-24 flex flex-col items-center">
          <div className="mb-[40px]">
            <InputField label="Email" inputType="email" />
          </div>
          <div className="mb-[56px]">
            <div className="mb-[4px]">
              <InputField label="Password" inputType="password" />
            </div>
            <SmallText text="Forgot Password?" />
          </div>
          <div>
            <PrimaryButton text="Login" type="submit" />
            <div className="mt-[4px] flex items-center justify-center">
              <SmallText text="Don't have an account?" />
              <span className="ml-1 underline underline-offset-4">
                <Link to="/signup">
                  <SmallText text=" Sign Up" />
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
