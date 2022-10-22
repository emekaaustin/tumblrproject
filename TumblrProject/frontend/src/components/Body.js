import React from "react";
import tumblrrocketicon from "./images/tumblrrocketicon.png";
import staffpicksstaricon from "./images/staffpicksstaricon.webp";
import dropdownicon from "./images/dropdownicon.png";
import firstcubeicon from "./images/firstcubeicon.png";
import secondcubeicon from "./images/secondcubeicon.png";
import homebody4cubeone1 from "./images/homebody4cubeone1.png";
import homebody4cubeone2 from "./images/homebody4cubeone2.png";
import homebody4cubeone3 from "./images/homebody4cubeone3.jpg";
import homebody4cubeone4 from "./images/homebody4cubeone4.jpeg";

function Body() {
    return (
    <div className="homebody">
        <div className="homebodyone">
            <div className="homebodyleft">
                    <ul>
                         <li style={{color:'#00b8ff'}}>Trending<img src={tumblrrocketicon} alt='tumblrrocketicon'/></li>
                        <li>Staff Picks<img src={staffpicksstaricon} alt='staffpicksstaricon'/></li>
                        <li>More<img src={dropdownicon} alt='dropdownicon'/></li>
                    </ul>
                <div className="twomenuicons">
                    {/* <span className="firstcubeicon"><a href="#"><img src={firstcubeicon} alt='firstcubeicon'/></a></span>
                    <span className="secondcubeicon"><a href="#"><img src={secondcubeicon} alt='secondcubeicon'/></a></span> */}
                    <span className="firstcubeicon"><img src={firstcubeicon} alt='firstcubeicon'/></span>
                    <span className="secondcubeicon"><img src={secondcubeicon} alt='secondcubeicon'/></span>
                </div>
            </div>
            <div className="fourcardmenu">
                <div className="homebody4cube">
                    <div className="row">
                        <div className="col homebody4cubeone" style={{backgroundColor:'#3a4936'}}>
                            <h4 style={{backgroundColor:'#e8d738'}} >1</h4>
                                    <div className="homebody4cubeoneh5p">
                                        <h5>mean girls</h5>
                                        <p>#october #lindsey lohan</p>
                                    </div>
                                    <div className="homebody4cubeoneimg">
                                            <img src={homebody4cubeone1} alt='homebody4cubeone1'/>
                                    </div>
                        </div>
                        <div className=" col homebody4cubeone" style={{backgroundColor:'#403628'}}>
                            <h4 style={{backgroundColor:'#ff8a00'}}>2</h4>
                                <div className="homebody4cubeoneh5p">
                                    <h5>house of the dragon </h5>
                                    <p>#matt smith #game of thrones</p>
                                </div>
                                <div className="homebody4cubeoneimg">
                                    <img src={homebody4cubeone2} alt='homebody4cubeone2'/>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col homebody4cubeone" style={{backgroundColor:'#402534'}}>
                            <h4 style={{backgroundColor:'#ff4930'}}>3</h4>
                                <div className="homebody4cubeoneh5p">
                                    <h5>october 3rd </h5>
                                    <p>#autumn #fall #lindsay lohan</p>
                                </div>
                                <div className="homebody4cubeoneimg">
                                    <img src={homebody4cubeone3} alt='homebody4cubeone3'/>
                                </div>
                        </div>
                        <div className="col homebody4cubeone" style={{backgroundColor:'#402c5c'}}>
                            <h4 style={{backgroundColor:'#ff62ce'}}>4</h4>
                                <div className="homebody4cubeoneh5p">
                                    <h5>Halloween</h5>
                                </div>
                                <div className="homebody4cubeoneimg">
                                    <img src={homebody4cubeone4} alt='homebody4cubeone4'/>
                                    <p></p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="homebodyright">
                <span style={{fontWeight:'bolder', fontSize:'20px', borderBottom:'2px solid #1e344d'}}>Trending Blogs</span>
                
            </div>
    </div>
                    
    );
}
export default Body;
