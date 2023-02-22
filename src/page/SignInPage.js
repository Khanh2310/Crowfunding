import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import ButtonGoogle from "components/button/ButtonGoogle";
import FormGroup from "components/common/FormGroup";
import { IconEyeToggle } from "components/icons";
import { Input } from "components/input";
import { Label } from "components/lable";
import useToggle from "hooks/useToggle";
import LayoutAuthentication from "layout/LayoutAuthentication";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authLogin } from "store/auth/auth-slice";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email("").required("Please enter Ayour email"),
  password: yup
    .string()
    .min(8, "Contain at least 8 characters")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
      message:
        " It must contain at least one uppercase, one lowercase and one numeric character, It must contain at least one special character, Length must be between 10 to 16 characters, Your password must be at least 8 characters",
    }),
});

const SignInPage = () => {
  const { value: showPassword, handleToggle: handleTogglePassword } =
    useToggle(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const handlerSignIn = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(authLogin({ ...values, permissions: [] }));
      }, 2000);
    });
  };

  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="text-center lg:text-sm  text-xs font-normal text-text3 lg:mb-[30px] mb-6">
        Don't have an account?{" "}
        <Link to="/sign-up" className="text-primary font-medium underline">
          Sign Up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handlerSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
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
        <FormGroup>
          <div className="text-right">
            <span className="cursor-pointer text-sm text-primary font-medium inline-block">
              Forgot password
            </span>
          </div>
        </FormGroup>
        <Button
          className="w-full"
          kind="primary"
          type="submit"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
