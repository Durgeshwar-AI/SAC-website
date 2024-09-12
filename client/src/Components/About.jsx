import React from 'react';
import aboutImage from '../assets/about.png';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center wow fadeInDown">About Us</h2>
          <p className="text-center wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6 wow fadeInLeft">
            <img className="img-responsive" src={aboutImage} alt="About Us" />
          </div>

          <div className="col-sm-6 wow fadeInRight">
            <h3 className="column-title">Our Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              eget risus vitae massa semper aliquam quis mattis quam. Morbi
              vitae tortor tempus, placerat leo et, suscipit lectus. Phasellus
              ut euismod massa, eu eleifend ipsum.
            </p>

            <p>
              Nulla eu neque commodo, dapibus dolor eget, dictum arcu. In nec
              purus eu tellus consequat ultricies. Donec feugiat tempor turpis,
              rutrum sagittis mi venenatis at. Sed molestie lorem a blandit
              congue. Ut pellentesque odio quis leo volutpat, vitae vulputate
              felis condimentum.
            </p>

            <p>
              Praesent vulputate fermentum lorem, id rhoncus sem vehicula eu.
              Quisque ullamcorper, orci adipiscing auctor viverra, velit arcu
              malesuada metus, in volutpat tellus sem at justo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
