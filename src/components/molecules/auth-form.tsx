"use client";

import Link from "next/link";
import Button from "../atoms/button";
import Input from "../atoms/input";
import useHandleInput from "@/hooks/useHandleInput";
import { loginUser, registerUser } from "@/lib/supabase/auth";
import Alert from "../organisms/alert";
import useHandleAlert from "@/hooks/useHandleAlert";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loading from "../organisms/loading";
import { signIn } from "next-auth/react";

const AuthForm = ({ formType }: { formType: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { alertStatus, alertData, handleAlert } = useHandleAlert();
  const {
    data: input,
    handleChange,
    clearInput,
  } = useHandleInput({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    if (formType == "register") {
      const res = await registerUser(input);
      if (!res.status) {
        setIsLoading(false);
        return handleAlert("error", res.message);
      }

      handleAlert("success", "Register berhasil, silahkan login");
      router.push("/");
      setIsLoading(false);
      clearInput();
      return;
    }

    const res = await signIn("credentials", {
      email: input.email,
      password: input.password,
      redirect: false,
    });

    if (!res?.ok) {
      setIsLoading(false);
      return handleAlert(
        "error",
        "Harap periksa kembali email dan password anda"
      );
    }
    handleAlert("success", "Login berhasil");
    router.push("/dashboard");
    clearInput();
    setIsLoading(false);
  };

  return (
    <>
      <Alert
        status={alertStatus}
        type={alertData.type}
        message={alertData.message}
      />
      {isLoading && <Loading />}
      <div className="w-full h-max">
        <h1 className="font-bold text-[1.5rem]">
          {formType == "login" ? "Sign in" : "Sign up"}
        </h1>
        <form className="mt-2 mb-4" onSubmit={handleSubmit}>
          {formType == "register" && (
            <div className="w-full h-max flex flex-col gap-3 mb-4">
              <label htmlFor="name" className="text-gray-300">
                Masukkan Nama
              </label>
              <Input
                name="name"
                type="text"
                color="transparent"
                size="medium"
                value={input.name}
                setValue={handleChange}
              />
            </div>
          )}
          <div className="w-full h-max flex flex-col gap-3">
            <label htmlFor="email" className="text-gray-300">
              Masukkan email
            </label>
            <Input
              name="email"
              type="email"
              color="transparent"
              size="medium"
              value={input.email}
              setValue={handleChange}
            />
          </div>
          <div className="w-full h-max flex flex-col gap-3 mt-4">
            <label htmlFor="password" className="text-gray-300">
              Masukkan password
            </label>
            <Input
              name="password"
              type="password"
              color="transparent"
              size="medium"
              value={input.password}
              setValue={handleChange}
            />
          </div>
          <Button teks="Sign in" type="submit" color="purple" size="medium" />
        </form>
        <div className="flex items-center gap-2  text-[.9rem]">
          <p className="text-gray-300">
            {formType == "login" ? "Belum punya akun?" : "Sudah punya akun?"}
          </p>
          {formType == "login" ? (
            <Link href={"/register"}>Sign up</Link>
          ) : (
            <Link href={"/"}>Sign in</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
