import React, { Component } from 'react';

class Transportes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <section id="intro" className="intro-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1>
                  <img src="images/logo.png" alt="Logo" />
                </h1>
                <p className="slogan">
                  Nunca mais esqueça uma série que você assistiu ou que alguém
                  lhe indicou.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container" />
        </section>
      </div>
    );
  }
}

export default Transportes;
