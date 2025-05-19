import React, { useState } from "react";

const FormComponent = () => {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  // أخطاء التحقق للحفاظ على البساطة
  const [loginErrors, setLoginErrors] = useState({});
  const [signupErrors, setSignupErrors] = useState({});

  // عرض الفورم
  const showLogin = () => setIsLoginVisible(true);
  const showSignup = () => setIsLoginVisible(false);

  // تحقق تسجيل الدخول
  const validateLogin = (e) => {
    e.preventDefault();
    const email = e.target.login_email.value.trim();
    const password = e.target.login_Password.value.trim();

    let errors = {};
    if (!email) errors.email = "Please enter E-mail";
    if (!password) errors.password = "Please enter Password";
    else if (password.length < 8) errors.password = "Password must be at least 8 characters";

    setLoginErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Login Successful!");
      // هنا تقدر تضيف منطق تسجيل الدخول
    }
  };

  // تحقق تسجيل حساب جديد
  const validateSignup = (e) => {
    e.preventDefault();
    const fullName = e.target.full_name.value.trim();
    const email = e.target.sigin_email.value.trim();
    const password = e.target.sigin_pass.value.trim();

    let errors = {};
    if (!fullName) errors.fullName = "Please enter Full Name";
    else if (fullName.length < 5 || fullName.length > 15)
      errors.fullName = "Full Name must be 5-15 characters";
    if (!email) errors.email = "Please enter E-mail";
    if (!password) errors.password = "Please enter Password";
    else if (password.length < 8) errors.password = "Password must be at least 8 characters";

    setSignupErrors(errors);

    if (Object.keys(errors).length === 0) {
      alert("Sign Up Successful!");
      // هنا تقدر تضيف منطق التسجيل
    }
  };

  return (
    <div className="container">
      <div className="row">

        {/* اللوحة الترحيبية */}
        <div className="col-md-6">
          <div
            className="welcom_cart"
            style={{
              transform: isLoginVisible ? "translateX(100px)" : "translateX(0)",
              transition: "transform 0.5s ease",
            }}
          >
            <h2>{isLoginVisible ? "Hello Friend!" : "Welcome To Travel Website"}</h2>
            <p>
              {isLoginVisible
                ? "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo enim magni eligendi eum deserunt?"}
            </p>
            {!isLoginVisible && (
              <button onClick={showLogin}>Log In</button>
            )}
            {isLoginVisible && (
              <button onClick={showSignup}>Sign Up</button>
            )}
          </div>
        </div>

        {/* الفورمات */}
        <div className="col-md-6">

          {/* فورم التسجيل */}
          {!isLoginVisible && (
            <div className="form_1_body">
              <h2>Create Account</h2>
              <form onSubmit={validateSignup} noValidate>
                <input type="text" name="full_name" placeholder="Full Name" />
                <div style={{ color: "red", minHeight: "18px" }}>
                  {signupErrors.fullName}
                </div>

                <input type="email" name="sigin_email" placeholder="E-mail" />
                <div style={{ color: "red", minHeight: "18px" }}>
                  {signupErrors.email}
                </div>

                <input type="password" name="sigin_pass" placeholder="Password" />
                <div style={{ color: "red", minHeight: "18px" }}>
                  {signupErrors.password}
                </div>

                <button type="submit">Sign Up</button>
              </form>
            </div>
          )}

          {/* فورم تسجيل الدخول */}
          {isLoginVisible && (
            <div className="form_2_body">
              <h2>Log In</h2>
              <form onSubmit={validateLogin} noValidate>
                <input type="email" name="login_email" placeholder="E-mail" />
                <div style={{ color: "red", minHeight: "18px" }}>
                  {loginErrors.email}
                </div>

                <input type="password" name="login_Password" placeholder="Password" />
                <div style={{ color: "red", minHeight: "18px" }}>
                  {loginErrors.password}
                </div>

                <br />
                <a href="#">Forget password</a>
                <br />
                <button type="submit">Log In</button>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default FormComponent;
