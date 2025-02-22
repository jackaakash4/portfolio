import { Link } from "@remix-run/react";

export default function Nav(){
    return(
        <>
    <nav className="flex justify-around  ml-[26rem] mt-[1rem] mr-[26rem] gap-1 bg-[#312959] rounded-full">
      <Link to="/"><div className="home">HOME</div></Link>
      <Link to="/about"><div className="aboutMe">ABOUT</div></Link>
      <Link to="/work"><div className="work">WORK</div></Link>       
      <Link to="/contactme"><div className="contactMe">CONTACT ME</div></Link> 
    </nav>
        </>
    );
}