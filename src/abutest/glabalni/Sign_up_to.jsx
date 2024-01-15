
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";
// import { BsEyeSlash } from "react-icons/bs";

// const SignUp = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     phone: "",
//     avatar: null,
//     first_name: "",
//     last_name: "",
//     middle_name: "",
//     birthday: "",
//     gender: "",
//     region: "",
//     password: "",
//     code: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData({ ...formData, [name]: files[0] });
//   };

//   const handleNextStep = () => {
//     setStep(step + 1);
//   };

//   const handlePreviousStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., API call)
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div>
//       {/* Render different steps based on the current step state */}
//       {step === 1 && (
//         {/* Render Step 1 form */}
//         <form className="form1">
//           {/* ... */}
//           <button type="button" onClick={handleNextStep}>
//             Davom ettirish
//           </button>
//         </form>
//       )}

//       {step === 2 && (
//         {/* Render Step 2 form */}
//         <form className="form2">
//           {/* ... */}
//           <button type="button" onClick={handlePreviousStep}>
//             Ortga
//           </button>
//           <button type="button" onClick={handleNextStep}>
//             Davom ettirish
//           </button>
//         </form>
//       )}

//       {step === 3 && (
//         {/* Render Step 3 form */}
//         <form className="form1">
//           {/* ... */}
//           <button type="button" onClick={handlePreviousStep}>
//             Ortga
//           </button>
//           <button type="button" onClick={handleNextStep}>
//             Davom ettirish
//           </button>
//         </form>
//       )}

//       {step === 4 && (
//         {/* Render Step 4 form */}
//         <form className="form1">
//           {/* ... */}
//           <button type="submit" onClick={handleSubmit}>
//             Jo'natish
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default SignUp;


















const submitReg = (e) => {
  e.preventDefault();

  let tt = true;
  let err = {};

  switch (currentStep) {
    case 1:
      if (!obj?.phone) {
        tt = false;
        err["phone"] = true;
      }
      break;
    case 2:
      if (!obj?.password) {
        tt = false;
        err["password"] = true;
      }
      if (!obj?.first_name) {
        tt = false;
        err["first_name"] = true;
      }
      if (!obj?.last_name) {
        tt = false;
        err["last_name"] = true;
      }
      if (!obj?.middle_name) {
        tt = false;
        err["middle_name"] = true;
      }
      if (!obj?.gender) {
        tt = false;
        err["gender"] = true;
      }
      if (!obj?.address) {
        tt = false;
        err["address"] = true;
      }
      if (!obj?.birthday) {
        tt = false;
        err["birthday"] = true;
      }
      break;
    default:
      break;
  }

  if (tt) {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      setLoading(true);
      axios
        .post("https://btest.gazon-tashkent.uz/api/v1/account/register/", obj)
        .then(() => {
          setRegistrationSuccess(true);
        })
        .catch((error) => {
          console.error("Error data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  } else {
    setErrors(err);
  }
};  