import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../components/Heading';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';

const SplashScreen = () => {
  return (
    <section className="min-h-[70vh]">
      <div className="mt-24 mb-32 flex flex-col justify-center text-center">
        <div className="mb-[56px]">
          <Heading heading="Nordstone" />
        </div>
        <div>
          <h3 className="mb-[16px] tracking-wide font-bold text-[24px]">
            Hello!
          </h3>
          <p className="mx-auto max-w-[250px] tracking-wide font-light text-sm">
            My name is Zain and I build this as a part of Nordstone Technical
            Test.
          </p>
        </div>
      </div>
      <div className="text-center">
        <div className="p-2">
          <Link to="/login">
            <PrimaryButton text="Login" type="submit" />
          </Link>
        </div>
        <div className="p-2">
          <Link to="/signup">
            <SecondaryButton text="Sign Up" type="submit" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SplashScreen;
