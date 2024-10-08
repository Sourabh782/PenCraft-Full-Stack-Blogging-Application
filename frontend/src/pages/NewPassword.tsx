
import { useState, ChangeEvent } from "react";
import { Quote } from "../components/Quote"
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [error, setError] = useState("");

    async function sendRequest() {
        try {
            if(password !== newPassword){
                setError("Passwords must be same")
                return;
            }
          navigate("/signin")
    
          
        }
        catch(e) {
          alert("Error on sending request")
        }
      }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="img ">

        <div className=" h-screen flex justify-center items-center flex-col ">
          <div className="flex justify-center ">
            <div>
              <div className="max-w-lg text-4xl font-bold px-10 text-center">
                Reset Password
                <div className="text-gray-500 font-medium text-lg mt-1">
                  Enter your new password
                </div>
              
              </div>

              <div className="max-w-md mt-2">
                
                <InputBox label="Password" placeholder="Enter your Password"  type="password" 
                    onChange={(e:any) => setPassword(e.target.value)} 
                />

                <InputBox label="Confirm Password" placeholder="Confirm Password"  type="password" 
                    onChange={(e:any) => setNewPassword(e.target.value)} 
                />

                {
                    error.length > 0 && <p className="text-red-500 text-lg">Password must be correct</p>
                }

                <button onClick={sendRequest} type="button" className="w-full mt-4 mx-auto text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                  Verify
                </button>

              </div>
            </div>
          </div>
        </div>
          
        </div>
        {/* Making it invisible in small screen size */}
        <div className="hidden lg:block"><Quote/></div>
    </div>
  )
}

export default NewPassword

interface InputBoxTypes {
    label :string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>) => void,
    type:string,
  }
const InputBox = ({label,placeholder,onChange,type} : InputBoxTypes) => {
    return (
      <div className="mt-3" >
              <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">{label}</label>
              <input type={type}  onChange={onChange} id="first_name" className="bg-gray-50 border  mt-2 border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
          </div>
    )
  }