"use client";

import Brand from "@/components/Brand";
import "../styles/main.scss";
import React, { useState } from 'react';

export default function Home() {

  const [isBtnHovered, setBtnIsHovered] = useState(false);

  const handleMouseEnterBtn = () => {
    setBtnIsHovered(true);
  }

  const handleMouseLeaveBtn = () => {
    setBtnIsHovered(false);
  }

  const buttonStyles = {
    color: isBtnHovered ? 'white' : 'red',
    backgroundColor: isBtnHovered ? '#52f026' : 'transparent',
    padding: '.5rem 1.5rem',
    fontSize:'1.5rem',
    borderStyle: 'none',
    border: isBtnHovered ? '1px solid white' : '1px solid red',
    borderRadius: 5
  }

  const textStyles = {
    color: '#fff',
    fontSize: '5rem',
    fontWeight: 'bold',
    letterSpacing: '-0.3rem',
    transition: 'transform 2',
  }

  return (
    <>
      <main className="hero">
        <div style={{position: 'relative', zIndex: 1, top: -220, left: -600 }}>
          <h2 style={{ color: '#e37a02', fontSize: '2.2rem', fontStyle: 'italic', letterSpacing: -2, lineHeight: .5}}>PlayGround</h2>
          <div style={{ display: 'flex', flexDirection: 'row', rotate: '11deg' }}>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', letterSpacing: -1, writingMode: "vertical-rl" }}>poke around</h3>
            <h3 style={{ color: '#fff', fontSize: '1.1rem', letterSpacing: -1, writingMode: "vertical-rl", rotate: '-90deg' }}>be curious</h3>
          </div>
        </div>
        <div className="animation" style={{display: 'flex', flexDirection: 'column', position: 'absolute', textAlign: 'center', alignItems: 'center', justifyContent: 'center', width: 600, height: 600, border: '1px solid black', borderRadius: 300 }}>
          <h1 style={textStyles}>JOIN THE NAVY</h1>
          <button style={buttonStyles} onMouseEnter={handleMouseEnterBtn} onMouseLeave={handleMouseLeaveBtn}>disclaimer</button>
        </div>
      </main>
      <main className="main">
        
      </main>
    </>
    
  );
}
