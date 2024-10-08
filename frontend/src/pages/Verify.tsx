import { useRef, useState } from "react";
import { Quote } from "../components/Quote"
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const numberOfDigits = 6;
  const [otp, setOtp] = useState<string[]>(new Array(numberOfDigits).fill(""));
  const otpBoxReference = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  function handleChange(value:string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if(value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1]?.focus()
    }
  }

  function handleBackspaceAndEnter(e:any, index:number) {
    if(e.key === "Backspace" && !e.target.value && index > 0){
      otpBoxReference.current[index - 1]?.focus()
    }
    if(e.key === "Enter" && e.target.value && index < numberOfDigits-1){
      otpBoxReference.current[index + 1]?.focus()
    }
  }

  async function sendRequest() {
    try {  
      let otpStr = "";
      for(let i=0; i<6; i++){
        otpStr += otp[i];
      }

      if(otpStr.length !== 6){
        return;
      }

      // api call

      navigate("/resetpassword")

      
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
                Enter OTP
                <div className="text-gray-500 font-medium text-lg mt-1">
                  Enter OTP to reset your password
                </div>
              
              </div>

              <div className="max-w-md mt-2">

                <article className="">
                    
                    <div className='flex items-center justify-evenly mt-4 '>
                        {otp.map((digit, index)=>(
                          <input key={index} value={digit} maxLength={1}  
                          onChange={(e)=> handleChange(e.target.value, index)}
                          onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
                          ref={(reference) => (otpBoxReference.current[index] = reference)}
                          className={`border w-10 h-10 aspect-square text-white p-3 block bg-gray-500 rounded-lg focus:border-2 focus:outline-none appearance-none`}
                          />
                        ))}

                    </div>

                </article>

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

export default Verify