import './NewUser.css';
export default function NewUser({ onSignIn }) {
    return (
        <>
            <div className="formMainContainer2">
                {/* <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244363.jpg?w=826&t=st=1725431531~exp=1725432131~hmac=ea1ffe53c4fc5a259cfb5ac001462a96750fe02741d7416fe339e597a98973b2" alt="" /> */}
                <h1>Sign Up</h1>
                <p className='para'>How do I get started blazein dolor at?</p>

                <form>
                    <label htmlFor="firstName">First Name</label><br />
                    <input className='inpt' type="text" required /><br />
                    <label htmlFor="lastName">Last Name</label><br />
                    <input className='inpt' type="text" /><br />
                    <label htmlFor="email">Email</label><br />
                    <input className='inpt' type="email" required placeholder="example@gmail.com" /><br />
                    <label htmlFor="password">Password</label><br />
                    <input className='inpt' type="Password"  placeholder='PASSWORD'/><br />
                    <input type="checkbox"/>
                    <label htmlFor="">Remember me</label><br />
                    <button className='sub'>Submit</button>
                    <button type="button" className='reg' onClick={onSignIn}>Sign In</button>
                    <p className='para2'>or sign up with Google</p>
                    <button>Sign up with Google</button>
                    <button>Sign up with Facebook</button>
                </form>


            </div>
        </>
    );
}