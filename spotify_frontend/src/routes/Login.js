import {Icon} from "@iconify/react";
import TextInput from "../components/shared/TextInput.js";
import PasswordInput from "../components/shared/PasswordInput.js";

const LoginComponent = () => {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
                <Icon icon="logos:spotify" width="150"/>
            </div>
            <div className="font-bold mb-12 mt-4">
                To continue, login to your spotify
            </div>
            <div className="inputRegion w-1/3">
                <div className="mb-4">
                    <TextInput label="Email address or username" placeholder="Email address or Username"/>
                </div>
                <PasswordInput label="Password" placeholder="Password"/>
                <div className="w-full mt-7">
                    <button className="bg-green-500 p-4 w-full rounded-full">LOG IN</button>
                </div>
                <div className="w-full border border-solid border-gray-300 mt-7"></div>
                <div className="font-semibold text-xl mt-5 text-center">
                    Don't have an account?
                </div>
                <div className="mt-6 py-4 text-center rounded-full border border-solid border-gray-500 text-gray-500 font-bold">
                    <button>SIGN UP FOR SPOTIFY</button>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;