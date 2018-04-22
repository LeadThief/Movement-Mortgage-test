import React from 'react';

const Signup = (props) => {
    return (
      <div id="MMPage__Signup">
        <div className="Signup__item item1">
          <p className="Signup__p">Sometimes you need to receive these things in your inbox for free!</p>
        </div>
        <div className="Signup__item item2">
          <p className="Signup__pbanner">Sign up to receive the latest updates</p>
          <svg className="Signup__svg" width="65" height="13">
            <rect className="Signup__rect" width="65" height="13"></rect>
          </svg>
          <div className="Signup__form">
            <input type="text" name="Email address" placeholder="Email address"/>
            <a className="Signup__btn" href="#MMPage__Signup">SIGN UP</a>
          </div>
        </div>
      </div>
    )
}

export default Signup;