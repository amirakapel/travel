import { useRef, useState } from "react";
import { CartProvider } from "react-use-cart";
import { useNavigate } from "react-router-dom";

function Login() {
  var moveRef = useRef();
  var hideeRef = useRef();
  var hidee2Ref = useRef();
  var nameRef = useRef();
  var pargRef = useRef();
  var buttonRef = useRef();
  var button2Ref = useRef();
  var navigate = useNavigate();

  var formMove = () => {
    moveRef.current.classList.add("active");
    hideeRef.current.classList.add("hidennn");
    hidee2Ref.current.classList.add("showw");
    moveRef.current.style.transform = "translateX(100px)";
    moveRef.current.style.transition = "transform 0.5s ease";
    nameRef.current.innerHTML = "Hello Friend!";
    pargRef.current.innerHTML =
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.";
    buttonRef.current.style.opacity = "0";
    button2Ref.current.style.opacity = "1";
  };

  var formMoveleft = () => {
    moveRef.current.classList.remove("active");
    hideeRef.current.classList.remove("hidennn");
    hidee2Ref.current.classList.remove("showw");
    moveRef.current.style.transform = "translateX(0px)";
    moveRef.current.style.transition = "transform 0.5s ease";
    nameRef.current.innerHTML = "Welcome To Travel Website";
    pargRef.current.innerHTML =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
    buttonRef.current.style.opacity = "1";
    button2Ref.current.style.opacity = "0";
  };


var [localStorage , setlocalStorage ] = useState(null); 

////////////////// Signup validate/////////////////////////
  var [nameSign, setNameSign] = useState("");
  var [nameMessageSign, setNameMessageSign] = useState("");
  var [emailSign, setEmailSign] = useState("");
  var [emailMessageSign, setEmailMessageSign] = useState("");
  var [passwordSign, setPasswordSign] = useState("");
  var [passwordMessageSign, setPasswordMessageSign] = useState("");

  var validateSign = (e) => {
  e.preventDefault();

  let valid_done = true;
  setNameMessageSign('');
  setEmailMessageSign('');
  setPasswordMessageSign('');

  if (nameSign === '') {
    setNameMessageSign('Please enter your name');
    valid_done = false;
  } else if (nameSign.length < 5 || nameSign.length > 15) {
    setNameMessageSign("Name must be 5–15 characters");
    valid_done = false;
  }

  if (emailSign === '') {
    setEmailMessageSign('Please enter E-mail');
    valid_done = false;
  }

  if (passwordSign === '') {
    setPasswordMessageSign('Please enter Password');
    valid_done = false;
  } else if (passwordSign.length < 8) {
    setPasswordMessageSign('Password must be at least 8 characters');
    valid_done = false;
  }

  if (valid_done) {
    var user = {
      name: nameSign,
      email: emailSign,
      password: passwordSign,
    };
    setlocalStorage (user);
    formMove(); 
  }
};

  ////////////////// login validate/////////////////////////
  var [email, setEmail] = useState("");
  var [emailMessage, setEmailMessage] = useState("");
  var [password, setPassword] = useState("");
  var [passwordMessage, setPasswordMessage] = useState("");

var validateLogin = (e) => {
  e.preventDefault();

  setEmailMessage('');
  setPasswordMessage('');

  if (email === '') {
    setEmailMessage('Please enter E-mail');
    return;
  }

  if (password === '') {
    setPasswordMessage('Please enter Password');
    return;
  }

  if (password.length < 8) {
    setPasswordMessage('Password must be at least 8 characters');
    return;
  }

  if (localStorage  && email === localStorage.email && password === localStorage.password) {
    navigate("/Home");
  } else if (email !== localStorage.email) {
    setEmailMessage("Uncorect E-mail");
  }else if (password !== localStorage.password) {
    setPasswordMessage("Uncorect Password");
  }
};


  return (
    <CartProvider>
      <div className="container">
        <div className="row">
          {/* Welcome Section */}
          <div className="col-md-6">
            <div className="welcom_cart" ref={moveRef}>
              <h2 ref={nameRef}>Welcome To Travel Website</h2>
              <p ref={pargRef}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <button ref={buttonRef} onClick={formMove}>Log in</button>
              <br />
              <button ref={button2Ref} style={{ opacity: 0 }} onClick={formMoveleft}>Sign Up </button>
            </div>

            {/* Login Form */}
            <div className="form_2_body" ref={hidee2Ref}>
              <h2>Log in</h2>
              <form className="form_2" onSubmit={validateLogin}>
                <input type="email" placeholder="E-mail"
                  onChange={(e) => {
                    var value = e.target.value; setEmail(value);
                    if (value === "") {
                      setEmailMessage("Please enter E-mail");
                    } else {setEmailMessage("");

                    }
                    }}/>

 {emailMessage && <div style={{ color: "red" }}>{emailMessage}</div>}

                <input type="password" placeholder="Password"
                  onChange={(e) => {
                    var value = e.target.value;
                    setPassword(value);
                    if (value === "") {
                      setPasswordMessage("Please enter Password");
                    } else if (value.length < 8) {
                      setPasswordMessage("Password must be at least 8 characters");
                    } else {
                      setPasswordMessage("");
                    }
                  }}/>

{passwordMessage && (<div style={{ color: "red" }}>{passwordMessage}</div>)}
                <br />
                <a href="#">Forget password</a>
                <br />
                <button type="submit">Log In</button>
              </form>
            </div>
          </div>

          {/* ///////////Sign Up Form//////////// */}
        <div className="col-md-6">
            <div className="form_1_body" ref={hideeRef}>
              <h2>Create Account</h2>
              <form className="form_1" onSubmit={validateSign}>
                <input type="text"placeholder="Full Name"
                  onChange={(e) => {
                    var value = e.target.value;
                    setNameSign(value);
                    if (value === "") {
                      setNameMessageSign("Please enter your name");
                    } else if (value.length < 5 || value.length > 15) {
                      setNameMessageSign("Name must be 5–15 characters");
                    } else {
                      setNameMessageSign("");
                    }
                  }}
                />
                {nameMessageSign && (<div style={{ color: "red" }}>{nameMessageSign}</div>)}

                <input type="email"placeholder="E-mail"
                  onChange={(e) => {
                    var value = e.target.value;
                    setEmailSign(value);
                    if (value === "") {
                      setEmailMessageSign("Please enter E-mail");
                    } else {
                      setEmailMessageSign("");
                    }
                  }}
                />

                {emailMessageSign && (<div style={{ color: "red" }}>{emailMessageSign}</div> )}

                <input type="password" placeholder="Password"
                  onChange={(e) => {
                    var value = e.target.value;
                    setPasswordSign(value);
                    if (value === "") {
                      setPasswordMessageSign("Please enter Password");
                    } else if (value.length < 8) {
                      setPasswordMessageSign(
                        "Password must be at least 8 characters"
                      );
                    } else {
                      setPasswordMessageSign("");
                    }
                  }}
                />
                {passwordMessageSign && (<div style={{ color: "red" }}>{passwordMessageSign}</div> )}

                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CartProvider>
  );
}

export default Login;
