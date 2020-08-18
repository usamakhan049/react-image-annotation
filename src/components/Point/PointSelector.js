import React from 'react'
import styled from 'styled-components'
import {POINTS_WIDTH,POINTS_FIRST_ZOOM_WIDTH,POINTS_SECOND_ZOOM_WIDTH} from '../../utils/Constants'

const Container = styled.div`
  border: solid 3px #1976d2;
  background-color: #1976d2;
  border-radius: 50%;
  box-sizing: border-box;
  box-shadow:
    0 0 0 1px rgba(0,0,0,0.3),
    0 0 0 2px rgba(0,0,0,0.2),
    0 5px 4px rgba(0,0,0,0.4);
  height: 16px;
  position: absolute;
  transform: translate3d(-50%, -50%, 0);
  width: 16px;
` 

function PointSelector (props) {
  const { geometry } = props.annotation
  if (!geometry) return null

  return (
    <Container
      style={{
        top: `${geometry.y}%`,
        left: `${geometry.x}%`,
        height:`${props.zoomScale>=2 && props.zoomScale<=3.5? POINTS_FIRST_ZOOM_WIDTH+"px":
        props.zoomScale>3.5 && props.zoomScale<=8? POINTS_SECOND_ZOOM_WIDTH+"px":POINTS_WIDTH+"px"}`,
        width:`${props.zoomScale>=2 && props.zoomScale<=3.5? POINTS_FIRST_ZOOM_WIDTH+"px":
        props.zoomScale>3.5 && props.zoomScale<=8? POINTS_SECOND_ZOOM_WIDTH+"px":POINTS_WIDTH+"px"}`
      }}
    />
  )
}


export default PointSelector
