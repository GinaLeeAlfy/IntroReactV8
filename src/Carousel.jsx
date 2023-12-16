import { Component } from "react";
const HERO_IMG = "http://pets-images.dev-apis.com/pets/none.jpg";
class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: [HERO_IMG],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images, animal, name } = this.props;

    return (
      <div className="carousel">
        <img
          src={images[active]}
          alt={
            images[active] === HERO_IMG
              ? "Default animal logo"
              : `Large image of ${name} the ${animal}`
          }
        />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt={`Thumbnail ${index + 1} of ${name} the ${animal} `}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
