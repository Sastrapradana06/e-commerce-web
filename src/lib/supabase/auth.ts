// import { hashPassword } from "@/utils";
import { supabase } from "../supabaseConfig";
import crypto from "crypto";

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const hashPw = crypto
      .pbkdf2Sync(password, "fixedSalt", 1000, 64, "sha512")
      .toString("hex");

    const { error } = await supabase
      .from("user")
      .insert({ name, email, password: hashPw });

    if (error) {
      if (error.code == "23505")
        return { status: false, message: "email sudah terdaftar" };
      return { status: false, message: "terjadi kesalahan" };
    }

    return { status: true, message: "success" };
  } catch (error) {
    return { status: false, message: error };
  }
};

export const loginUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await supabase
      .from("user")
      .select()
      .eq("email", email);

    console.log({ data, error });

    if (error) {
      return { status: false, message: '"terjadi kesalahan' };
    }

    if (data.length == 0) {
      return { status: false, message: "email tidak terdaftar" };
    }

    const users = data[0];
    const hashVerify = crypto
      .pbkdf2Sync(password, "fixedSalt", 1000, 64, "sha512")
      .toString("hex");

    if (users.password != hashVerify) {
      return { status: false, message: "password salah" };
    }

    return {
      status: true,
      message: "Login berhasil",
      data: { id: users.id, email: users.email, name: users.name },
    };
  } catch (error) {
    return { status: false, message: error };
  }
};
