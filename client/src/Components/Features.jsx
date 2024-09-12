import React from 'react';

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center wow fadeInDown">
            Awesome Features
          </h2>
          <p className="text-center wow fadeInDown">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            eget risus vitae massa <br />
            semper aliquam quis mattis quam.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="media service-box wow fadeInRight">
              <div className="pull-left">
                <i className="fa fa-rss"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">User Research</h4>
                <p>
                  Fusce non fermentum mi. Praesent vel lobortis elit. Nulla
                  sodales, risus quis sollicitudin iaculis, felis dolor aliquet
                  purus, eget elementum velit nunc eu dolor.
                </p>
              </div>
            </div>

            <div className="media service-box wow fadeInRight">
              <div className="pull-left">
                <i className="fa fa-cogs"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Visual Designing</h4>
                <p>
                  Fusce non fermentum mi. Praesent vel lobortis elit. Nulla
                  sodales, risus quis sollicitudin iaculis, felis dolor aliquet
                  purus, eget elementum velit nunc eu dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="media service-box wow fadeInRight">
              <div className="pull-left">
                <i className="fa fa-line-chart"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">UI Development</h4>
                <p>
                  Fusce non fermentum mi. Praesent vel lobortis elit. Nulla
                  sodales, risus quis sollicitudin iaculis, felis dolor aliquet
                  purus, eget elementum velit nunc eu dolor.
                </p>
              </div>
            </div>

            <div className="media service-box wow fadeInRight">
              <div className="pull-left">
                <i className="fa fa-cloud-upload"></i>
              </div>
              <div className="media-body">
                <h4 className="media-heading">Quality Test</h4>
                <p>
                  Fusce non fermentum mi. Praesent vel lobortis elit. Nulla
                  sodales, risus quis sollicitudin iaculis, felis dolor aliquet
                  purus, eget elementum velit nunc eu dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
