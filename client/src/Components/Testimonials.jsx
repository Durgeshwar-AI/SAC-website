import React from "react";
import image1 from '../assets/pic1.jpg'
import image2 from '../assets/pic2.jpg'

const testimonials = [
  {
    id: 1,
    quote: "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image1,
    name: "James Bond",
    company: "License to Drink Inc",
  },
  {
    id: 2,
    quote: "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image2,
    name: "James Bond",
    company: "License to Drink Inc",
  },
  {
    id: 3,
    quote: "Contrary to popular belief, Lorem Ipsuis no simply random text. It has roots in a piece of classical Layears old. belief, Lorem Ipsuis not simply",
    imgSrc: image1,
    name: "James Bond",
    company: "License to Drink Inc",
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-area" id="testimonial">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center wow fadeInDown">Testimonial</h2>
          <p className="text-center wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa
            <br /> semper aliquam quis mattis quam.
          </p>
        </div>
        <div className="row">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4">
              <div className="single-testimonial animate_fade_in" style={{ opacity: 1, right: "0px" }}>
                <div className="row">
                  <div className="col-xs-12">
                    <blockquote>{testimonial.quote}</blockquote>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-3">
                    <img src={testimonial.imgSrc} alt={testimonial.name} />
                  </div>
                  <div className="col-xs-9 half-gutter">
                    <h5>{testimonial.name}</h5>
                    <h6>{testimonial.company}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
