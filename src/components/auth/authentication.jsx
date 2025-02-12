import { useState } from 'react'
import backgroundPicture from "../../assets/pictures/bg-img2.jpg"
import { Link } from 'react-router'
import { Icon } from '@iconify/react'
import FrameContainer from '../../UI/FrameContainer'

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <main
      dir="ltr"
      className="w-full h-screen bg-gradient-to-br from-clrLightBrown/30 to-clrMilk dark:from-clrCoal dark:to-clrDarkGray grid place-items-center relative overflow-hidden"
    >
      <FrameContainer
        backgroundColor={1}
        preferredStyles="w-2/3 h-[85vh] rounded-[8px]"
      >
        {/* Ambient light effect */}
        {/* <div
        className={`absolute w-1/2 h-1/2 blur-[120px] transition-all duration-1000 animate-pulse ${
          isLogin
            ? "bg-clrGreen/20 top-0 -left-24"
            : "bg-clrDarkBrown/20 top-1/2 -left-24"
        }`}
      />
      <div
        className={`absolute w-3/4 h-1/2 blur-[120px] transition-all duration-1000 -right-24 animate-pulse ${
          isLogin ? "bg-clrDarkBrown/20 bottom-0" : "bg-clrGreen/30 bottom-1/2"
        }`}
      /> */}

        <div
          className={`w-full rounded-[8px] flex bg-clrMilk dark:bg-clrDarkGray backdrop-blur-sm shadow-2xl relative overflow-hidden`}
        >
          <div
            className={`w-1/2 h-full absolute z-10 duration-500 transition-all ${
              isLogin ? "right-0" : "right-1/2"
            }`}
          >
            <img
              src={backgroundPicture}
              alt="a group of friends camping"
              className="h-full"
            />
          </div>
          {/* Login Form */}
          <div className="w-1/2 flex flex-col items-center justify-between  p-3 transition-transform duration-700">
            <div className="flex text-clrDarkBrown font-bold mt-5 text-xl tracking-wider mb-4">
              <span>Trip</span>
              <Icon
                icon="bxs:tree"
                className="w-6 h-6 text-clrLightGreen dark:drop-shadow-[0_0_3px_#41914e]"
              />
              <span>Therapy</span>
            </div>

            <div className="w-full flex flex-col items-center justify-around flex-1">
              <div className="w-full flex flex-col items-center gap-3">
                <form className="flex flex-col items-center gap-4 w-full mt-8">
                  <div className="w-8/12 group">
                    <input
                      type="email"
                      id="login-email"
                      className="w-full bg-clrMilk dark:bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border dark:border-clrGreen border-clrDarkBrown/40 dark:border-clrLightBrown/20 
                    focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
                      focus:dark:shadow-[0_0_15px_#41914e40] focus:shadow-[0_0_15px_rgba(221,161,94,0.2)] backdrop-blur-sm caret-clrLightBrown text-sm"
                      placeholder="ایمیل"
                      dir="rtl"
                    />
                  </div>

                  <div className="w-8/12 group relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="login-password"
                      className="w-full bg-clrMilk dark:bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border dark:border-clrGreen border-clrDarkBrown/40 dark:border-clrLightBrown/20 
                    focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
                      focus:dark:shadow-[0_0_15px_#41914e40] focus:shadow-[0_0_15px_rgba(221,161,94,0.2)] backdrop-blur-sm caret-clrLightBrown text-sm"
                      placeholder="رمز عبور"
                      dir="rtl"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 dark:text-clrLightGreen/50 hover:dark:text-clrLightGreen text-clrLightBrown/60 hover:text-clrLightBrown 
                  transition-colors duration-300"
                    >
                      {showPassword ? (
                        <Icon icon="solar:eye-bold" className="w-5 h-5 mt-1" />
                      ) : (
                        <Icon
                          icon="solar:eye-closed-bold"
                          className="w-5 h-5 mt-2"
                        />
                      )}
                    </button>
                  </div>

                  <Link
                    to="/dashboard"
                    type="submit"
                    className="w-8/12 p-2 rounded-lg text-clrWhite bg-clrGreen text-center
                      active:scale-95 transition-all duration-300 font-medium tracking-wide
                      dark:shadow-[0_0_10px_#41914e30] hover:dark:shadow-[0_0_15px_#41914e50] hover:brightness-125 mt-4"
                  >
                    ورود
                  </Link>
                </form>
                <div className="flex justify-between w-8/12">
                  <a
                    href="#"
                    className="text-clrLightBrown text-end text-xs cursor-pointer"
                  >
                    فراموشی رمز عبور
                  </a>
                  <div
                    onClick={toggleForm}
                    className="flex items-center gap-1 text-xs"
                  >
                    <button className="text-clrDarkBrown">ثبت نام</button>
                    <p className="text-clrLightGreen">
                      تاکنون ثبت نام نکرده‌اید؟
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Login Section */}
              <div className="w-full flex flex-col items-center gap-5">
                <div className="flex items-center gap-2 w-8/12">
                  <hr className="w-full border-clrLightBrown/30" />
                  <div className="w-6 h-3 border border-clrGreen rotate-45 animate-pulse" />
                  <hr className="w-full border-clrLightBrown/30" />
                </div>

                <div className="flex items-center gap-6">
                  {/* Social Icons */}
                  <div className="flex items-center gap-6">
                    {/* Github */}
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(221,161,94,0.2)] cursor-pointer">
                      <Icon
                        icon="mdi:github"
                        className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* LinkedIn */}
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(221,161,94,0.2)] cursor-pointer">
                      <Icon
                        icon="mdi:linkedin"
                        className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Google */}
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(221,161,94,0.2)] cursor-pointer">
                      <Icon
                        icon="mdi:google"
                        className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signup Form */}
          <div
            className={`w-1/2 flex flex-col items-center justify-between p-3 transition-transform duration-700 `}
          >
            <div className="flex items-center gap-1 text-clrLightGreen font-bold mt-5 text-xl tracking-wider mb-4">
              <span>Trip</span>
              <Icon
                icon="game-icons:campfire"
                className="w-6 h-6 drop-shadow-[0_0_2px_orange] text-orange-400"
              />
              <span>Therapy</span>
            </div>

            <div className="w-full flex flex-col items-center justify-around flex-1 gap-10">
              <div className="w-full flex flex-col gap-3 items-center">
                <form className="flex flex-col items-center gap-4 w-full mt-8">
                  <div className="w-8/12 group">
                    <input
                      type="text"
                      id="signup-name"
                      className="w-full bg-clrMilk dark:bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightGreen/40 
                  focus:border-clrLightGreen transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightGreen/40
                  focus:shadow-[0_0_15px_rgba(126,145,65,0.2)] backdrop-blur-sm caret-clrLightGreen text-sm"
                      placeholder="نام و نام خانوادگی"
                      dir="rtl"
                    />
                  </div>

                  <div className="w-8/12 group">
                    <input
                      type="email"
                      id="signup-email"
                      className="w-full bg-clrMilk dark:bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightGreen/40 
                  focus:border-clrLightGreen transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightGreen/40
                  focus:shadow-[0_0_15px_rgba(126,145,65,0.2)] backdrop-blur-sm caret-clrLightGreen text-sm"
                      placeholder="ایمیل"
                      dir="rtl"
                    />
                  </div>

                  <div className="w-8/12 group relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="login-password"
                      className="w-full bg-clrMilk dark:bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightGreen/40 focus:border-clrLightGreen dark:border-clrLightBrown/20 
                    dark:focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
                    focus:shadow-[0_0_15px_rgba(221,161,94,0.2)] backdrop-blur-sm caret-clrLightBrown text-sm"
                      placeholder="رمز عبور"
                      dir="rtl"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-clrLightBrown/40 hover:text-clrLightBrown 
                  transition-colors duration-300"
                    >
                      {showPassword ? (
                        <Icon icon="solar:eye-bold" className="w-5 h-5" />
                      ) : (
                        <Icon
                          icon="solar:eye-closed-bold"
                          className="w-5 h-5 mt-1"
                        />
                      )}
                    </button>
                  </div>

                  <Link
                    to="/dashboard"
                    type="submit"
                    className="w-8/12 p-2 rounded-lg text-clrWhite bg-clrDarkBrown text-center
                active:scale-95 transition-all duration-300 font-medium tracking-wide
                shadow-[0_0_15px_rgba(221,161,94,0.2)] hover:shadow-[0_0_20px_rgba(221,161,94,0.3)] mt-4"
                  >
                    ثبت نام
                  </Link>
                </form>

                <div className="flex items-center justify-between w-8/12">
                  <div class="flex items-center justify-end gap-1 cursor-pointer">
                    <label
                      htmlFor="rememberMe"
                      className="text-clrLightBrown text-xs"
                    >
                      مرا به خاطر بسپار
                    </label>
                    <div class="relative">
                      <input
                        type="checkbox"
                        id="rememberMe"
                        class="peer hidden"
                      />
                      <div class="w-3 h-3 border border-clrLightGreen rounded peer-checked:bg-clrGreen peer-checked:border-clrGreen transition-all"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <button onClick={toggleForm} className="text-clrLightGreen">
                      ورود
                    </button>
                    <p className="text-clrDarkBrown">از پیش حساب دارید؟</p>
                  </div>
                </div>
              </div>

              {/* Social Login Section */}
              <div className="w-full flex flex-col items-center gap-5">
                <div className="flex items-center gap-2 w-8/12">
                  <hr className="w-full border-clrLightGreen/30" />
                  <div className="w-6 h-3 border border-clrDarkBrown rotate-45 animate-pulse" />
                  <hr className="w-full border-clrLightGreen/30" />
                </div>

                <div className="flex items-center gap-6">
                  {/* Social Icons */}
                  <div className="flex items-center gap-6">
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_#41914e50] cursor-pointer">
                      <Icon
                        icon="mdi:github"
                        className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* LinkedIn */}
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_#41914e50] cursor-pointer">
                      <Icon
                        icon="mdi:linkedin"
                        className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Google */}
                    <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_#41914e50] cursor-pointer">
                      <Icon
                        icon="mdi:google"
                        className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FrameContainer>
    </main>
  );
}

export default Authentication