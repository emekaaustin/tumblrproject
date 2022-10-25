import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import tumblricon from "./images/tumblricon2.png";
import loginbackgroundimage from "./images/loginbackgrounidmage.jpg"
import googleicon from "./images/googleicon.png"
import appleicon from "./images/appleicon.png"
import axios from 'axios'
// import {useDispatch} from 'react-redux'
// import { useNavigate } from 'react-router-dom';


function Login(){
    const [data, setData] = useState({ email: "", password: "" });
    const [isPending] = useState("")
    const navigate = useNavigate();



	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:5023/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			// window.location = "/homepage";
            navigate("/homepage")
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				console.log(error.response.data.message);
			}
		}
	};

    
return (
<div style={{backgroundImage: `url(${loginbackgroundimage})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", height:'100vh', width:'auto', backgroundPosition: 'center'}}>
        <div className="loginnavdiv" >
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="/" classname="navit"><img src={tumblricon} alt='tumblricon'/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px'}}
                                navbarScroll
                                >
                                <form class="loginnosubmit">
                                    <input class="loginnosubmit" type="search" placeholder="Search Tumblr" />
                                </form>
                            </Nav>
                        <div className="loginnavi">
                            <div classname="loginnaviright">
                                <Link to='/Signup'>
                                    <button className="loginnavibuttonsignup">Signup</button>
                                </Link>
                            </div>
                        </div>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    <div>
        <form className="loginbody" onSubmit={handleSubmit}>
                <h1>tumblr</h1>
                <div class="form-group">
                <input
					type="email"
                    class="form-control" 
						placeholder="Email"
						name="email"
						onChange={handleChange}
						value={data.email}
						required
						/>
                </div>
                <div class="form-group" style={{paddingTop:'10px'}}>
                    <input 
                     	type="password"
                         class="form-control" 
                         placeholder="Password"
                         name="password"
                         onChange={handleChange}
                         value={data.password}
                         required
                    />
                </div>
                <div style={{padding:'10px', color:'white', fontSize:'12px'}}>
                    By clicking sign up, or continuing with the other options below, you agree to Tumblr’s <u>Terms of Service</u> and have read the <u>Privacy Policy</u>
                </div>
                { !isPending && <button type="submit" class="btn btn-block mb-4" style={{margin:'4px 0 0 0 ', color:'black', padding:'8px', width:'100%', backgroundColor:'#00b8ff',  textTransform:'none', fontWeight:'bolder'}}>Login</button>}
                { isPending && <button disabled>Authenicating . . . </button> }
                <p style={{textAlign:'center', color:'white', padding:'0', margin:'-14px 0 0 0'}}>Forgot your pasword?</p>
                <span style={{display:'flex', color:'white' }}><hr style={{width:'45%', height:'2px', color:'white'}}/>
                <p style={{padding:'0 10px'}}>or</p>
                <hr style={{width:'45%', height:'2px', color:'white'}}/></span>
                <button type="button" class="btn btn-light btn-block mb-4" style={{color:'black', width:'100%' , padding:'8px', textTransform:'none', fontWeight:'bolder', margin:'-10px 0 0 0'}}><img src={googleicon} alt='googleicon'/> Continue with Google</button>
                <button type="button" class="btn btn-light btn-block mb-4" style={{ color:'black', width:'100%' ,padding:'8px', textTransform:'none', fontWeight:'bolder', margin:'-13px 0 0 0'}}> <img src={appleicon} alt='appleicon'/>Continue with Apple</button>
                <p style={{color:'white', fontSize:'15px', textAlign:'center', fontWeight:'bolder'}}> New to Tumblr? <u>Sign up!</u> </p>

        </form>
        <div className="loginfooter">
            <ul className="loginfooterul">
                <li>Terms </li>
                <li>Privacy</li>
                <li>Jobs</li>
                <li>Support</li>
            </ul>
            <div className="loginfooterpost">
                <li style={{listStyleType: 'none', color:'white'}}>Posted by <bold>turnipoddity</bold></li>
            </div>
        </div>

    </div>
</div>
);
}

export default Login;