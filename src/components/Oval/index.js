import React from 'react'
import styled from 'styled-components'
import {OVAL_WIDTH,OVAL_FIRST_ZOOM_WIDTH,OVAL_SECOND_ZOOM_WIDTH} from '../../utils/Constants'

const Container = styled.div`
  border: solid 3px #1976d2;
  border-radius: 100%;
  background-color: rgba(25, 118, 210, 0.27);
  box-shadow: 0px 0px 1px 1px white inset;
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`

function Oval (props) {
  const { geometry,data } = props.annotation
  if (!geometry) return null

  return (
    <Container
      className={props.className}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        height: `${geometry.height}%`,
        width: `${geometry.width}%`,
        boxShadow: props.active && '0 0 1px 1px yellow inset',
        borderWidth:`${props.zoomScale>=2 && props.zoomScale<=3.5?OVAL_FIRST_ZOOM_WIDTH+"px":
        props.zoomScale>3.5 && props.zoomScale<=8?OVAL_SECOND_ZOOM_WIDTH+"px":OVAL_WIDTH+"px"}`,
        ...props.style
      }}
    >
     <div
        style={{
          border: "solid 3px #00bfa5",
          backgroundColor: "#00bfa5",
          borderRadius: "50%",
          boxSizing: "border-box",
          //boxShadow: "0 0 0 1px rgba(0,0,0,0.3)",
          height: "25px",
          position: "absolute",
          transform: "translate3d(-50%, -50%, 0)",
          width: "25px",
          left: `${geometry.x + geometry.width / 2 }%`,
          top: `${geometry.y + geometry.height / 2}%`
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight:"bold",
            //paddingTop:"6px"
          }}
        >
          {data.id}
        </p>
      </div>
    </Container>
  )
}

Oval.defaultProps = {
  className: '',
  style: {}
}

export default Oval
