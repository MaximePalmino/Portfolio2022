import react, {useEffect} from 'react';
// import './App.css';
import image from "../assets/img/DSC02459-6.jpg"
import image2 from "../assets/img/DSC02459-6.jpg"
import overlay from '../assets/img/overlay.png'
  /* @ts-ignore */


interface IndividualWork {
  title: string,
}
  const Work: React.FC<IndividualWork> = ({title}) => {

    return (
      <h2>{title}</h2>
  );
  }

export default Work;


