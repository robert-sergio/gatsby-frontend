import React from 'react'
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink,
    Col
} from 'reactstrap';


export default function MeuCard({props}) {
  return (
<Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
        {props.title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
        {props.subtitle}
    </CardSubtitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
  />
  <CardBody>
    <CardText>
    {props.cardtext}
    </CardText>
    <CardLink href={props.link1}>
    {props.link_desc1}    
    </CardLink>
    <CardLink href={props.link2}>
    {props.link_desc2}
    </CardLink>
  </CardBody>
</Card>
  )
  }
