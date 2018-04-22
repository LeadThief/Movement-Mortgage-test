import React from 'react';

const Footer = (props) => {
    return (
      <div id="MMPage__Footer">
        <div className="Footer__nav">
          <div className="nav__item1">
            <img src="/images/footer-logo.svg" alt="Logo"/>
          </div>
          <div className="nav__item2">
            <h2>Sign up</h2>
            <p>To receive the<br/> latest updates</p>
          </div>
          <div className="nav__item3">
            <h2>Our Process</h2>
            <p>Answers to<br/> your questions</p>
          </div>
          <div className="nav__item4">
            <h2>Gallery</h2>
            <p>View photos and<br/> videos</p>
          </div>
        </div>
        <div className="Footer__info">
          <p className="Footer__p">There are advances being made in science and technology everyday, and a good example of this is the LCD monitor. LCD monitors have several benefits over the old chunky
          computer monitors that most users are familiar with. Old computer monitors, take up quite a bit of desktop space, put out a ton of heat, drain a ton of energy, and most often
          have low picture quality and resolution. Modern advances with the LCD computer monitors have changed a lot of that. The screen itself is flat, and very thin, needing very little
          desktop space, therefore giving you more room while working at your PC. A big advantage in my opinion is that LCD monitors don’t put off all the heat that the old monitors do.</p>
        </div>
      </div>
    )
}

export default Footer;