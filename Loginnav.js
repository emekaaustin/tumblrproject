import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import tumblricon from "./images/tumblricon2.png";
import homeicon from "./images/homeicon.png";
import compassicon from "./images/compassicon.png";
import lettericon from "./images/lettericon.png";
import speechbubble from "./images/speechbubble.png";
import thundericon from "./images/thundericon.png";
import pencilicon from "./images/pencilicon.png";
import personicon from "./images/personicon.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import texticon from "./images/texticon.png";
import cameraicon from "./images/cameraicon.png";
import quoteicon from "./images/quoteicon.png";
import linkicon from "./images/linkicon.png";
import chaticon from "./images/chaticon.png";
import audioicon from "./images/audioicon.png";
import videoicon from "./images/videoicon.png";



function MyVerticallyCenteredModal(props) {

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered className='modalmodal my-modal'>
      <div className="newmodal" style={{display:'flex', textAlign:'center'}}>
           <Link to='/newtext'>    
           {/* <Link onclick={setmodalShow11(true)} to=''>     */}
                <div>
                    <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#ffffff'}}>
                        <img src={texticon} alt='texticon' />
                    </div>
                    <p>Text</p>
                </div>
            </Link>

            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
            <div>
                <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#ff4930'}}>
                    <img src={cameraicon} alt='cameraicon' />
                </div>
                <p>Photo</p>
            </div>
            </Link>
            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
            <div>
                <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#ff8a00'}}>
                    <img src={quoteicon} alt='quoteicon' />
                </div>
                <p>Quote</p>
            </div>
            </Link>
            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
                <div>
                    <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#00cf35'}}>
                        <img src={linkicon} alt='linkicon' />
                    </div>
                    <p>Link</p>
                </div>
            </Link>
            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
                <div>
                    <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#00b8ff'}}>
                        <img src={chaticon} alt='chaticon' />
                    </div>
                    <p>Chat</p>
                </div>
            </Link>
            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
                <div>
                    <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#7c5cff'}}>
                        <img src={audioicon} alt='audioicon' />
                    </div>
                    <p>Audio</p>
                </div>
            </Link>
            <Link to='' style={{ textDecoration: 'none', color:'black' }}>
                <div>
                    <div className='mx-2' style={{borderRadius:'50%', padding:'30px', backgroundColor:'#ff62ce'}}>
                        <img src={videoicon} alt='videoicon' />
                    </div>
                    <p>Video</p>
                </div>
            </Link>
      </div>
    </Modal>
  );
}

function NavScrollExample() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="navdiv">
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
              <form class="nosubmit">
                <input class="nosubmit" type="search" placeholder="Search Tumblr" />
              </form>
            </Nav>
            <div className="navi">
                <div classname="naviright">
                  <Link to='/dashboard'>
                    <button className="navibuttonlogin" style={{backgroundColor:'gray'}}><img src={homeicon} alt='homeicon'/></button>
                  </Link>
                  <Link to='/explore'>
                       <button className="navibuttonsignup" style={{backgroundColor:'gray'}}><img src={compassicon} alt='compassicon'/></button>
                  </Link>
                  <Link to='/inbox'>
                  <button className="navibuttonsignup" style={{backgroundColor:'gray'}}><img src={lettericon} alt='lettericon'/></button>
                  </Link>
                  <Link to='/customerservice'>
                  <button className="navibuttonsignup" style={{backgroundColor:'gray'}}><img src={speechbubble} alt='speechbubble'/></button>
                  </Link>
                  <Link to='/amrr'>
                  <button className="navibuttonsignup" style={{backgroundColor:'gray'}}><img src={thundericon} alt='thundericon'/></button>
                  </Link>
                  <Link to='/account'>
                  <button className="navibuttonsignup" style={{backgroundColor:'gray'}}><img src={personicon} alt='personicon'/></button>
                  </Link>
                  {/* <Link to='/new'> */}
                    {/* <button className="navibuttonsignup" style={{padding:'1px', backgroundColor:'#00b8ff'}}><img src={pencilicon} alt='pencilicon'/></button> */}
                    <Button onClick={() => setModalShow(true)} className="navibuttonsignup" style={{padding:'1px', backgroundColor:'#00b8ff'}}><img src={pencilicon} alt='pencilicon'/></Button>
                    <MyVerticallyCenteredModal
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      />
                </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default NavScrollExample;

