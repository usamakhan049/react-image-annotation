import React from 'react'
import styled, { keyframes } from 'styled-components'
import 'antd/dist/antd.css';
import { Popover, Button, Row, Col, Input } from "antd";
const { TextArea } = Input;

const Inner = styled.div`
  padding: 8px 16px;

  textarea {
    border: 0;
    font-size: 14px;
    margin: 6px 0;
    min-height: 60px;
    outline: 0;
  }
`

// const Button = styled.div`
//   background: whitesmoke;
//   border: 0;
//   box-sizing: border-box;
//   color: #363636;
//   cursor: pointer;
//   font-size: 1rem;
//   margin: 0;
//   outline: 0;
//   padding: 8px 16px;
//   text-align: center;
//   text-shadow: 0 1px 0 rgba(0,0,0,0.1);
//   width: 100%;

//   transition: background 0.21s ease-in-out;

//   &:focus, &:hover {
//     background: #eeeeee;
//   }
// `

function content (props) {
  return (
    <Row>
      <Col>
        <Row>
          <TextArea
            onChange={e =>
              props.onChange({
                ...props.annotation,
                data: {
                  ...props.annotation.data,
                  text: e.target.value
                }
              })
            }
            rows={3}
            onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
          />
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Button onClick={props.onSubmit} type="primary" block>
            Comment
          </Button>
        </Row>
      </Col>
    </Row>
  );
};
function TextEditor (props) {
  
  return (
    <React.Fragment>

       <Popover
        overlayClassName="imagemap"
        content={content(props)}
        trigger="click"
        visible={true}
        placement="bottom"
      >
        {/* <Row
          style={{
            position: "absolute",
            left: `${geometry.x}%`,
            top: `${geometry.y}%`
          }}
        ></Row> */}
      </Popover>

      {/* <Inner>
        <textarea
          placeholder='Write description'
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          onChange={props.onChange}
          value={props.value}
        >
        </textarea>
      </Inner>
      {props.value && (
        <Button
          onClick={props.onSubmit}
        >
          Submit
        </Button>
      )} */}
    </React.Fragment>
  )
}

export default TextEditor
