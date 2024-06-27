import { PiHandsClapping } from "react-icons/pi";
import AuthForm from "../molecules/auth-form";
import Footer from "../organisms/footer";

export default function AuthTemplate({ type }: { type: string }) {
  return (
    <main className="w-full h-[100vh] text-white" id="main">
      <div className="w-full lg:w-max h-max p-3 fixed top-0 left-0 right-0 m-auto z-20 flex gap-2 items-center">
        <PiHandsClapping size={25} fill="white" />
        <h1 className="text-white font-bold  capitalize text-[1.3rem]">
          Heloes
        </h1>
      </div>
      <div className="w-[90%] lg:w-[45%] h-[100vh] flex justify-center items-center fixed z-10  left-0 right-0 m-auto">
        <AuthForm formType={type} />
      </div>
      <Footer />
    </main>
  );
}
