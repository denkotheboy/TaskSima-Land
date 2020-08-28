import React, { Component } from "react";
import { connect } from "react-redux";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      images: []
    };
  }

  addImage = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then(
        (img) => {
          this.setState({
            images: [...this.state.images, URL.createObjectURL(img)],
            isLoaded: true
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  };

  componentDidMount() {
    this.addImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    );
    this.addImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    );
    this.addImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    );
    this.addImage(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
    );
  }

  render() {
    const { error, isLoaded, images } = this.state;
    if (error) {
      return (
        <div className="row mt-3 justify-content-center">
          Ошибка: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return <div className="row mt-3 justify-content-center">Загрузка...</div>;
    } else if (isLoaded && images.length !== 0) {
      return (
        <>
          <div className="row mt-3 justify-content-center">
            {images.map((img) => (
              <img src={img} key={img} className="img-thumbnail" alt="name" />
            ))}
          </div>
        </>
      );
    }
  }
}
export default connect(
  (state) => ({
    auth: state
  }),
  (dispatch) => ({
    AddImage: (src, className = null) => {
      dispatch({ type: "AddImage", src: src, className: className });
    }
  })
)(Gallery);
