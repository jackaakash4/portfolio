import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "Aakash", content: "Portfolio of Aakash Shrestha, a graduated computer science prodigy" },
  ];
};

export default function Index() {
  return (
    <>
    <nav className="flex justify-around  ml-[26rem] mt-[1rem] mr-[26rem] gap-1 bg-[#312959] rounded-full">
      <Link to="/"><div className="home">HOME</div></Link>
      <Link to="/about"><div className="aboutMe">ABOUT</div></Link>
      <Link to="/work"><div className="work">WORK</div></Link>       
      <Link to="/contactme"><div className="contactMe">CONTACT ME</div></Link> 
    </nav>
    <div className="description text-[#000] ml-[8.6rem] mt-[20rem] text-3xl font-poppins">I am your <span className="remix text-[#E3481F]">Remix.js</span>, <span className="golang text-[#E3481F]">Golang</span> and <span className="postgres text-[#E3481F]">PostgresSQL</span> developer</div>
    <div className="name text-[#E3481F] ml-[5.75rem] mt-[2rem] text-9xl font-poppins">JACK AAKASH</div>
    </>
    
   
  );
}

