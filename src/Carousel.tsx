import { Component, MouseEvent } from "react";
import { Animal } from "./APIResponsesTypes";

interface IProps {
  images: string[];
  animal: Animal;
  name: string;
}

const HERO_IMG = "http://pets-images.dev-apis.com/pets/none.jpg";
class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: [HERO_IMG],
  };

  handleIndexClick = (e: MouseEvent<HTMLElement>) => {
    if (!(e.target instanceof HTMLElement)) {
      return;
    }
    if (e.target.dataset.index) {
      this.setState({
        active: +e.target.dataset.index,
      });
    }
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
