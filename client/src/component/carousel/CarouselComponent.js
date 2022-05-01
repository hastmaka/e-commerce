import {Carousel} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import classes from './CarouselComponent.module.css';

const carouselItems = [{
    id: 1,
    src: 'full_1.jpg',
    alt: 'Test Title',
    title: 'First slide label',
    subtitle: 'This is for test purposes',
  },{
    id: 2,
    src: 'full_2.jpg',
    alt: 'Test Title',
    title: 'First slide label',
    subtitle: 'This is for test purposes',
  },{
    id: 3,
    src: 'full_3.jpg',
    alt: 'Test Title',
    title: 'First slide label',
    subtitle: 'This is for test purposes',
  }
]

const CarouselComponent = () => {
  return (
      <Carousel className={classes['carousel-general-container']} interval={null}>
        {carouselItems.map(item =>
          <Carousel.Item key={item.id}>
            <div className={classes['carousel-offers']}>
              <h1>Offers</h1>
            </div>
            <img
              className="d-block w-100 "
              src={require(`../../images/others/${item.src}`)}
              alt={item.alt}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
      </Carousel>
  )
}

export default CarouselComponent;