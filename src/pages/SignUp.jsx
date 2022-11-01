import React, { useState, useRef } from 'react';
import Description from '../components/Description';
import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailFlag, setEmailFlag] = useState(false);

  const [passwordFlag, setPasswordFlag] = useState({
    upperCase: false,
    lowerCase: false,
    special: false,
    numeric: false,
    length: false,
  });

  const [validPassword, setValidPassword] = useState(false);

  const { registerUser } = useUserContext();

  const handleEmail = () => {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const emailValue = emailRef.current.value;
    if (emailValue.match(pattern)) {
      setEmailFlag(true);
    } else {
      setEmailFlag(false);
    }
  };

  const handlePassword = () => {
    const password = passwordRef.current.value;
    if (password.match(/[A-Z]/) != null) {
      setPasswordFlag((prevState) => ({ ...prevState, upperCase: true }));
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    if (password.match(/[a-z]/) != null) {
      setPasswordFlag((prevState) => ({ ...prevState, lowerCase: true }));
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    if (password.match(/[0-9]/) !== null) {
      setPasswordFlag((prevState) => ({ ...prevState, numeric: true }));
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    if (password.match(/[!@#$%^&*(){}|//";:,~`]/) !== null) {
      setPasswordFlag((prevState) => ({ ...prevState, special: true }));
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    if (password.length > 8) {
      setPasswordFlag((prevState) => ({ ...prevState, length: true }));
      setValidPassword(true);
    } else {
      setValidPassword(false);
    }

    if (!password.length)
      setPasswordFlag({
        upperCase: false,
        lowerCase: false,
        special: false,
        numeric: false,
        length: false,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (name && emailFlag && validPassword) {
      registerUser(name, email, password);
    } else {
      alert('Please fulfill the requirements!');
    }
  };

  return (
    <section className="min-h-[70vh]">
      <div>
        <div className="mt-12 text-center">
          <div className="mb-1">
            <Title title="Sign Up" />
          </div>
          <Description desc="Sign up to continue" />
        </div>
        <form
          className="mt-16 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="mb-[32px] flex flex-col justify-start">
            <label className="mb-[4px] font-medium text-md">
              Full Name <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="text-[#333] text-md font-bold w-80 h-10 px-2 rounded-md"
              type="text"
              ref={nameRef}
              autoComplete="off"
              required
            />
          </div>
          <div className="mb-[32px] flex flex-col justify-start">
            <label className="mb-[4px] font-medium text-md">
              Email <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="text-md text-[#333] font-bold w-80 h-10 px-2 rounded-md"
              type="email"
              ref={emailRef}
              onChange={handleEmail}
              autoComplete="off"
              required
            />
            {emailFlag ? (
              <p className="mt-1 text-[10px] font-medium text-[#15e315]">
                Email is valid
              </p>
            ) : (
              <p className="mt-1 text-[10px] font-medium text-[#ff0000]">
                Email is not valid yet
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <label className="mb-[4px] font-medium text-md">
              Password <span className="text-[#ff0000]">*</span>
            </label>
            <input
              className="text-[#333] text-md font-bold w-80 h-10 px-2 rounded-md"
              type="password"
              onChange={handlePassword}
              ref={passwordRef}
              required
            />
          </div>
          <ul className="mt-1 mb-8 text-[10px] font-medium">
            <li>
              <span className="text-[#ff0000]">*</span>{' '}
              <span
                className={
                  passwordFlag.upperCase ? 'text-[#15e315]' : 'text-[#ff0000]'
                }
              >
                Password should contain at least a UpperCase Character
              </span>
            </li>
            <li>
              <span className="text-[#ff0000]">*</span>{' '}
              <span
                className={
                  passwordFlag.lowerCase ? 'text-[#15e315]' : 'text-[#ff0000]'
                }
              >
                Password should contain at least a LowerCase Character
              </span>
            </li>
            <li>
              <span className="text-[#ff0000]">*</span>{' '}
              <span
                className={
                  passwordFlag.numeric ? 'text-[#15e315]' : 'text-[#ff0000]'
                }
              >
                Password should contain at least one Numeric Character
              </span>
            </li>
            <li>
              <span className="text-[#ff0000]">*</span>{' '}
              <span
                className={
                  passwordFlag.special ? 'text-[#15e315]' : 'text-[#ff0000]'
                }
              >
                Password should contain at least one Special Character
              </span>
            </li>
            <li>
              <span className="text-[#ff0000]">*</span>{' '}
              <span
                className={
                  passwordFlag.length ? 'text-[#15e315]' : 'text-[#ff0000]'
                }
              >
                Password length should be more than 8 characters
              </span>
            </li>
          </ul>
          <PrimaryButton buttonType="submit" text="Register" />
        </form>
        <p className="mt-[4px] bg-transparent border-none text-[12px] text-center font-medium">
          Already have an account?{' '}
          <Link className="underline underline-offset-4" to="/login">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
