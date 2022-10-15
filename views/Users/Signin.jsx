const React = require("react");
const Navbar = require('../components/Navbar')

class Signin extends React.Component {
  passRef = React.createRef()
  showPass () {
    console.log('click');
    // console.log(this.passRef);
    // this.passRef.current.type = 'text'
  }
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Signin</h1>
        <form action='/user/signin' method="post">
        
         <fieldset>
          <legend>Access your account</legend>
         <label htmlFor="">Email</label>
          <br />
          <input type="text" name='email'/>
          <br />

          <label htmlFor="">Password</label>
          <br />
          <input type="password" name='password' ref={this.passRef}/>
          <input type='checkbox' onChange={this.showPass}/>
          <div onClick={this.showPass}>hey</div>
          <br />

          <input type="submit" value="Signin" />
         </fieldset>
        </form>

        <div>
          <p>
            Don't have an account? <a href="/user/signup">Signup</a>
          </p>
        </div>
      </div>
    );
  }
}

module.exports = Signin;
