import logImg from "../../assets/others/authentication1.png";
import logBg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

const Login = () => {

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const captchaRef = useRef(null);

  const handleValidate = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
    console.log(user_captcha_value);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.table(email, password);
  };

  return (
    <div className="p-20">
      <div
        className={`bg-[url('../../assets/others/authentication.png')] bg-no-repeat bg-cover bg-center h-screen flex items-center justify-around gap-x-10 px-14 border-2 border-[#D1A054] rounded-2xl`}
      >
        <div className="lg:w-1/2">
          <img src={logImg} alt="" />
        </div>

        <div className="lg:w-1/3 ">
          <form action="" onSubmit={handleLogIn}>
            <label className="form-control w-full  mt-5">
              <div className="label">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                name="email"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control w-full mt-5 ">
              <div className="label">
                <span className="label-text font-bold">Password</span>
              </div>
              <input
                type="password"
                placeholder="Type here"
                name="password"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control w-full mt-5 ">
              <div className="label">
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                ref={captchaRef}
                placeholder="Type the text above"
                name="recaptcha"
                className="input input-bordered w-full "
              />
              <button
                className="btn btn-sm my-3 btn-success text-white"
                onClick={handleValidate}
              >
                Validate
              </button>
            </label>

            <input
              type="submit"
              disabled={disabled}
              value={"Sign In"}
              className="btn bg-[#D1A054] w-full mt-7 text-white"
            />

            <p className="text-[#D1A054] text-center mt-5">
              New here?{" "}
              <Link to={`/register`} className="font-semibold">
                Create a new account
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
