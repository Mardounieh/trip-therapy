import { useState } from 'react'
import backgroundPicture from "../../assets/pictures/bg-img2.jpg"
import { Link } from 'react-router'

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  return (
    <main className="w-full h-screen bg-gradient-to-br from-clrCoal to-clrDarkGray grid place-items-center relative overflow-hidden">
      {/* Ambient light effect */}
      <div
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
      />

      <div
        className={`w-2/3 h-[85vh] rounded-[8px] flex bg-clrDarkGray/30 backdrop-blur-sm border shadow-2xl relative overflow-hidden ${
          isLogin ? "border-clrLightBrown/20" : "border-clrGreen/20"
        }`}
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
          <div className="flex text-clrLightBrown font-bold mt-5 text-xl tracking-wider mb-4">
            <span>Trip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className="mx-2 drop-shadow-[0_0_4px_#606c38]"
            >
              <path
                fill="#606c38"
                d="m20 18l-4-5h3l-4-5h2l-5-6l-5 6h2l-4 5h3l-4 5h7v4h2v-4z"
              />
            </svg>
            <span>Therapy</span>
          </div>

          <div className="w-full flex flex-col items-center justify-around flex-1">
            <div className="w-full flex flex-col items-center gap-3">
              <form className="flex flex-col items-center gap-4 w-full mt-8">
                <div className="w-8/12 group">
                  <input
                    type="email"
                    id="login-email"
                    className="w-full bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightBrown/20 
                  focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
                  focus:shadow-[0_0_15px_rgba(221,161,94,0.2)] backdrop-blur-sm caret-clrLightBrown text-sm"
                    placeholder="ایمیل"
                    dir="rtl"
                  />
                </div>

                <div className="w-8/12 group relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    className="w-full bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightBrown/20 
                    focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#606c38"
                          d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <circle cx="256" cy="256" r="64" fill="#606c38" />
                        <path
                          fill="#606c38"
                          d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <Link to="/dashboard"
                  type="submit"
                  className="w-8/12 p-2 rounded-lg text-clrWhite bg-clrGreen text-center
                active:scale-95 transition-all duration-300 font-medium tracking-wide
                shadow-[0_0_15px_rgba(96,108,56,0.3)] hover:shadow-[0_0_20px_rgba(96,108,56,0.5)] mt-4"
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
                  <p className="text-clrLightGreen">تاکنون ثبت نام نکرده‌اید؟</p>
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
                    <svg
                      className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
                    </svg>
                  </div>

                  {/* LinkedIn */}
                  <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(221,161,94,0.2)] cursor-pointer">
                    <svg
                      className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                    </svg>
                  </div>

                  {/* Google */}
                  <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(221,161,94,0.2)] cursor-pointer">
                    <svg
                      className="w-6 h-6 text-clrLightBrown hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12" />
                    </svg>
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
          <div className="flex items-center gap-2 text-clrGreen font-bold mt-5 text-xl tracking-wider mb-4">
            <span>Trip</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="drop-shadow-[0_0_2px_orange]"
            >
              <path
                fill="orange"
                d="m15.9 18.5l6 1.6l-.4 1.9l-9.4-2.5L2.7 22l-.5-1.9l6-1.6l-6.1-1.6l.5-1.9l9.4 2.5l9.4-2.5l.5 1.9zm.17-10.58c-.16-.22-.36-.42-.57-.59c-.45-.43-1-.74-1.44-1.2C13 5.08 12.79 3.34 13.44 2c-.65.17-1.26.54-1.77.95C9.84 4.46 9.11 7.1 10 9.38c0 .07.04.15.04.24c0 .16-.11.3-.25.38a.51.51 0 0 1-.57-.23c-.8-1.03-.93-2.51-.38-3.7c-1.19.99-1.84 2.65-1.73 4.22c.02.36.07.71.19 1.07c.11.44.29.87.52 1.25c.75 1.25 2.08 2.15 3.5 2.33c1.52.2 3.14-.09 4.31-1.15c1.3-1.2 1.77-3.12 1.08-4.79l-.1-.17q-.21-.495-.57-.9zm-2.24 4.55c-.2.18-.52.36-.78.44c-.79.28-1.59-.12-2.05-.6c.84-.2 1.34-.84 1.5-1.48c.11-.58-.11-1.05-.21-1.61c-.08-.53-.07-.99.13-1.49c.13.27.27.55.44.77c.55.72 1.41 1.04 1.59 2c.02.13.05.22.05.33c0 .6-.24 1.24-.68 1.64"
              />
            </svg>
            <span>Therapy</span>
          </div>

          <div className="w-full flex flex-col items-center justify-around flex-1 gap-10">
            <div className='w-full flex flex-col gap-3 items-center'>
              <form className="flex flex-col items-center gap-4 w-full mt-8">
                <div className="w-8/12 group">
                  <input
                    type="text"
                    id="signup-name"
                    className="w-full bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightGreen/40 
                  focus:border-clrGreen/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightGreen/40
                  focus:shadow-[0_0_15px_rgba(126,145,65,0.2)] backdrop-blur-sm caret-clrGreen text-sm"
                    placeholder="نام و نام خانوادگی"
                    dir="rtl"
                  />
                </div>

                <div className="w-8/12 group">
                  <input
                    type="email"
                    id="signup-email"
                    className="w-full bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightGreen/40 
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
                    className="w-full bg-clrDarkGray/40 rounded-lg py-2 px-4 outline-none border border-clrLightBrown/20 
                    focus:border-clrLightBrown/60 transition-all duration-300 text-clrWhite placeholder:text-sm placeholder:text-clrLightBrown/40
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#606c38"
                          d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                      >
                        <circle cx="256" cy="256" r="64" fill="#606c38" />
                        <path
                          fill="#606c38"
                          d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82M256 352a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                <Link to="/dashboard"
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
                  {/* Github */}
                  <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,145,65,0.2)] cursor-pointer">
                    <svg
                      className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10" />
                    </svg>
                  </div>

                  {/* LinkedIn */}
                  <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,145,65,0.2)] cursor-pointer">
                    <svg
                      className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                    </svg>
                  </div>

                  {/* Google */}
                  <div className="p-2 rounded-full hover:bg-clrDarkGray/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(126,145,65,0.2)] cursor-pointer">
                    <svg
                      className="w-6 h-6 text-clrLightGreen hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 12a6 6 0 0 0 11.659 2H12v-4h9.805v4H21.8c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10S6.477 2 12 2a9.99 9.99 0 0 1 8.282 4.393l-3.278 2.295A6 6 0 0 0 6 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Authentication