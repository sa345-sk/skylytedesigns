import {Link} from'react-router-dom';
const Signup = () => {
    return (
        <div className="signup">
            <form className="login-form signup-form">
                <h2>Sign Up</h2>
                <label>First Name:</label>
                <input type="text" required />
                <label>Last Name:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required  />
                <label>Password:</label>
                <input type="password" required />
                <label>Confirm Password:</label>
                <input type="password" required />
                <button>Sign up</button>
                <div className="acc" style={{marginTop: '10px'}}>Already have an account. <Link to='/login'>Log in</Link></div>
            </form>
            <div className="or">
                OR
                <button>Sign up With Google</button>
            </div>
        </div>
    );
}
export default Signup