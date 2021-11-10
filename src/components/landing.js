import React from 'react';
import { Header, Footer } from './header'

const LandingPage = ()=>{
    return (
        <div className="landing-container">
            <Header/>
            I am the landing page!

            {/* <Header/>
      <img src="../grassblock.png" className="App-logo" alt="logo" />
        <p>
          This is the beginning of Overworld Academy!
        </p>
        <p>Don't let the name fool you--not only will you learn the tricks and techniques to staying alive in the Overworld, we also offer lessons on the Nether, including the biomes and creatures you'll find there, how to trade with the gold-loving piglins, the trick to finding the End portal when you return to the Overworld, and even defeating the Ender Dragon solo!</p>

        <p>Check out our course catalog!</p>
        <a
          className="app-link"
          href="https://www.minecraft.net/en-us/store/minecraft-java-edition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to download Minecraft: Java Edition and get started today!
        </a>
      <Footer/> */}
        {/* PAGE CONTAINER ENDS HERE */}
        <Footer/>
        </div>
    )
}

export { LandingPage }