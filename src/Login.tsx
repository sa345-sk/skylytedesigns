import {Link} from 'react-router-dom';
const Login = () => {
  return (
    <div className="login">
        <div className="lf">
            <form className="login-form">
                <h2>Login</h2>
                <label>Email:</label>
                <input type="email" required/>
                <label>Password:</label>
                <input type="password" required/>
                <button>Log In</button>
               <div className="acc" style={{ marginTop: '10px' }}>Don't have an account? <Link to='/signup'>Sign up</Link></div>
            </form>
            <div className="or">
                OR
               <button>Log in With Google</button>    
            </div>
        </div>
    </div>
  );
}
export default Login