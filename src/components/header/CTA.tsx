import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="cta">
      <a href="/cv.pdf" download className="btn">
        Baixar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Vamos conversar
      </a>
    </div>
  );
};

export default CTA;