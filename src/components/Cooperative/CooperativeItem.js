import React from 'react';
import { Link } from 'react-router-dom'
import { Div } from './cooperativeStyle'

const CooperativeItem = (props) => {
  return (
    <Div>
      <img src={props.icon} alt={props.alt} />
      <h1><Link to={`${props.url}`}>{props.title}</Link></h1>
      <p>{props.content}</p>
    </Div>
  )
}

export default CooperativeItem;

