import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0px 0px 1px 1px white inset;
  border: solid 3px #1976d2;
  background-color: rgba(25, 118, 210, 0.27);
  box-sizing: border-box;
  transition: box-shadow 0.21s ease-in-out;
`

function Rectangle (props) {
  const { geometry } = props.annotation
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
        borderWidth:`${props.zoomScale>=2 && props.zoomScale<=3.5?"2px":
        props.zoomScale>3.5 && props.zoomScale<=8?"1px":"3px"}`,
        ...props.style
      }}
    />
  )
}

Rectangle.defaultProps = {
  className: '',
  style: {}
}

export default Rectangle
