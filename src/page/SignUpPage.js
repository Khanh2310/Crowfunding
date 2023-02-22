import { Button } from "components/button";
import { CheckBox } from "components/checkbox";
import FormGroup from "components/common/FormGroup";
import { Input } from "components/input";
import { Label } from "components/lable";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import IconEyeToggle from "components/icons/IconEyeToggle";
import ButtonGoogle from "components/button/ButtonGoogle";
import useToggle from "hooks/useToggle";
import { useDispatch } from "react-redux";
import { authRegister } from "store/auth/auth-slice";

const schema = yup.object({
  name: yup.string().required("Please enter your username"),
  email: yup.string().email().required("Please enter your email"),
  password: yup.string(),
  // .min(8, "Contain at least 8 characters")
  // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
  //   message:
  //     " It must contain at least one uppercase, one lowercase and one numeric character, It must contain at least one special character, Length must be between 10 to 16 characters, Your password must be at least 8 characters",
  // }),
});
const SignUpPage = () => {
  const { value: showPassword, handleToggle: handleTogglePassword } =
    useToggle(false);
  const { value: acceptTerm, handleToggle: handleTerm } = useToggle(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const handlerSignUp = async (values) => {
    try {
      if (!isValid) return;
      return new Promise((resolve) => {
        setTimeout(() => {
          dispatch(authRegister({ ...values, permissions: [] }));
          reset({
            name: "",
            email: "",
            password: "",
          });
        }, 2000);
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const [acceptTerm, setAcceptTerm] = useState(false);
  // const handleTerm = () => {
  //   setAcceptTerm(!acceptTerm);
  // };

  return (
    <LayoutAuthentication heading="Sign Up">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-[30px] mb-6">
        Already have an account?{" "}
        <Link to="/login" className="text-primary font-medium underline">
          Sign In
        </Link>
      </p>
      {/* <button className="flex items-center gap-x-3 w-full py-4 border text-base font-semibold border-StrockColor justify-center rounded-xl text-text2 mb-5 dark:text-white dark:border-darkStroke">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span className="">Sign up with google</span>
      </button> */}
      <ButtonGoogle text="Sign up with google"></ButtonGoogle>
      <p className="text-center text-xs lg:text-sm font-normal mb-4 lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handlerSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            type="text"
            name="name"
            control={control}
            placeholder="Quoc Bao"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            type="email"
            name="email"
            control={control}
            placeholder="hoangquocbao@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            control={control}
            placeholder="***************"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start gap-x-5 mb-5 select-none">
          <CheckBox checked={acceptTerm} name="term" onClick={handleTerm}>
            <p className="text-xs lg:text-sm text-text2 flex-1 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Terms of Use </span>{" "}
              and have read and understand the{" "}
              <span className="underline text-secondary">
                and Privacy policy.
              </span>
            </p>
          </CheckBox>
        </div>
        <Button
          className="w-full"
          type="submit"
          kind="primary"
          isLoading={isSubmitting}
        >
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
