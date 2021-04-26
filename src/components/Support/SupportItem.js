import React from 'react';
import { Div } from '../Cooperative/cooperativeStyle';
import { Link } from 'react-router-dom';

const SupportItem = (props) => {
  return (
    <Div>
      <img src={props.icon} alt={props.alt} />
      <h1><Link to={`${props.url}`}>{props.title}</Link></h1>
      <p>{props.content}</p>
    </Div>
  )
}

export default SupportItem;

