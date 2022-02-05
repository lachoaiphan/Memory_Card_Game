import React from 'react';

import { FaAngular, FaAws, FaCss3Alt, FaElementor, FaFigma, FaGithub, FaHtml5, FaJava, FaJsSquare, FaLaravel, FaLinux } from 'react-icons/fa';

interface Props {
  changeFn: () => void,
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  name: string;
  state: boolean;
}

const icons: { [key: string]: any } = {
  angular: <FaAngular 
  />,
  aws: <FaAws />,
  css: <FaCss3Alt />,
  elementor: <FaElementor />,
  figma: <FaFigma />,
  github: <FaGithub />,
  html: <FaHtml5 />,
  java: <FaJava />,
  javascript: <FaJsSquare />,
  laravel: <FaLaravel />,
  linux: <FaLinux />
}

const Card: React.FC<Props> = (props) => {

  return (
    <div
      className='card'
      onClick={() => {props.changeFn();}}
    >
      {icons[props.name]}
    </div>
  )
}

export default Card;