const React = require("react");
const Navbar = require('../components/Navbar')

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Create an Account!</h1>
        <form action='/user/signup' method="post">
         <fieldset>
          <legend>Create a new account</legend>
         <label htmlFor="">Username</label>
          <br />
          <input type="text" name='username' required/>
          <br />

          <label htmlFor="">Email</label>
          <br />
          <input type="text" name='email'required/>
          <br />

          <label htmlFor="">Password</label>
          <br />
          <input type="text" name='password' required/>
          <br />

          <input type="submit" value="Register" />
         </fieldset>
        </form>

        <div>
          <p>
            Already have an account? <a href="/user/signin">Signin</a>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = SignUp;
