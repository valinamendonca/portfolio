import React from 'react';
import PropTypes from 'prop-types';

function ImageGrid({ images }) {
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-12 g-3">
        {images.map((image, index) => (
          <div key={index} className="col">
          <div className="d-flex flex-column align-items-center">
            <img src={image.src} className="img-fluid mb-2" style={{maxHeight: "10rem", width: "auto"}} alt={image.alt} />
            <div className="text-center">{image.title}</div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGrid;
