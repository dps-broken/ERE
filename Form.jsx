import './Form.css';

export default function Form({ onRegister }) {
    return (
        <>
            <div className="formMainContainer">
                {/* <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244363.jpg?w=826&t=st=1725431531~exp=1725432131~hmac=ea1ffe53c4fc5a259cfb5ac001462a96750fe02741d7416fe339e597a98973b2" alt="" /> */}
                <h1>Login</h1>
                <p className='para'>How do I get started blazein dolor at?</p>

                <form>
                    <label htmlFor="email">Email</label><br />
                    <input className='inpt' type="email" required placeholder="example@gmail.com" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input className='inpt' type="Password" /><br />
                    <button className='btr'>q4T5fwd</button>
                    <input type="text"  className='inpt' placeholder='Enter Captcha'/><br />
                    <input type="checkbox" />
                    <label htmlFor="">Remember me</label>
                    <label htmlFor="" className='inpt2'>Forget Password?</label><br />
                    <button className='sub'>Submit</button>
                    <button type="button" className='reg' onClick={onRegister}>Register</button>
                    <p className='para2'>or sign in with Google</p>
                    <button>Sign in with Google</button>
                    <button>Sign in with Facebook</button>
                </form>
            </div>
        </>
    );
}
