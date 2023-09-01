import logo from './logo.svg';
import './App.css';
import Profile from "./images/Profile.jpg";
import email from "./images/email.png";
import pass from "./images/pass.jpg";

function App() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className='imgs'>
            <div className="container-image">
              <img src={Profile} alt="Profile" className="Profile"/>

            </div>

          </div>
          <div>
            <h1>Login Page</h1>
            <div> 
              <img src={email} alt="email" className="email"/>
              <input type="text" placeholder='user name'className="name"/>

            </div>
            <div className="second-input"> 
              <img src={pass} alt="pass" className="pass"/>
              <input type="text" placeholder='password'className="name"/>

            </div>
            <div className='login-button'> 
            <button>Login</button>
            </div>
            <div>
              <p className="link">
                <a href='a'>Forgot password?</a>Or<a href='#'>Sign Up</a>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default App;
