import React from 'react'

import Point from './Point'
import Editor from './Editor'
import PolygonControls from './PolygonControls'
import FancyRectangle from './FancyRectangle'
import Rectangle from './Rectangle'
import Oval from './Oval'
import Polygon from './Polygon'
import Content from './Content'
import Overlay from './Overlay'
import RectangleSelectorView from './Rectangle/RecatangleSelector'
import OvalSelectorView from './Oval/OvalSelector'
import PolygonSelectorView from './Polygon/PolygonSelector'

import {
  RectangleSelector,
  PointSelector,
  OvalSelector,
  PolygonSelector
} from '../selectors'

export default {
  innerRef: () => {},
  onChange: () => {},
  onSubmit: () => {},
  type: RectangleSelector.TYPE,
  selectors: [
    RectangleSelector,
    PointSelector,
    OvalSelector,
    PolygonSelector
  ],
  disableAnnotation: false,
  disableSelector: false,
  disableEditor: false,
  disableOverlay: false,
  imageZoomAmount: 1,
  zoomScale:1,
  showActiveAnnotations:(annotation,active)=>{},
  activeAnnotationComparator: (a, b) => a === b,
  renderSelector: ({ annotation,zoomScale }) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <RectangleSelectorView
            annotation={annotation}
            zoomScale={zoomScale}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            annotation={annotation}
            zoomScale={zoomScale}
          />
        )
      case OvalSelector.TYPE:
        return (
          <OvalSelectorView
            annotation={annotation}
            zoomScale={zoomScale}
          />
        )
      case PolygonSelector.TYPE:
        return (
          <PolygonSelectorView
            annotation={annotation}
            zoomScale={zoomScale}
          />
        )
      default:
        return null
    }
  },
  renderEditor: ({ annotation, onChange, onSubmit, imageZoomAmount }) => (
    <Editor
      annotation={annotation}
      onChange={onChange}
      onSubmit={onSubmit}
      imageZoomAmount={imageZoomAmount}
    />
  ),
  renderPolygonControls: ({ annotation, onSelectionComplete, onSelectionClear, onSelectionUndo, imageZoomAmount,disableAnnotation }) => (
    <PolygonControls
      annotation={annotation}
      onSelectionComplete={onSelectionComplete}
      onSelectionClear={onSelectionClear}
      onSelectionUndo={onSelectionUndo}
      imageZoomAmount={imageZoomAmount}
      disableAnnotation={disableAnnotation}
    />
  ),
  renderHighlight: ({ key, annotation, active,zoomScale }) => {
    switch (annotation.geometry.type) {
      case RectangleSelector.TYPE:
        return (
          <Rectangle
            key={key}
            annotation={annotation}
            active={active}
            zoomScale={zoomScale}
          />
        )
      case PointSelector.TYPE:
        return (
          <Point
            key={key}
            annotation={annotation}
            active={active}
            zoomScale={zoomScale}
          />
        )
      case OvalSelector.TYPE:
        return (
          <Oval
            key={key}
            annotation={annotation}
            active={active}
            zoomScale={zoomScale}
          />
        )
      case PolygonSelector.TYPE:
        return (
          <Polygon
            key={key}
            annotation={annotation}
            active={active}
            zoomScale={zoomScale}
          />
        )
      default:
        return null
    }
  },
  renderContent: ({ key, annotation, imageZoomAmount,zoomScale}) => (
    <Content
      key={key}
      annotation={annotation}
      imageZoomAmount={imageZoomAmount}
      zoomScale={zoomScale}
    />
  ),
  renderOverlay: ({ type, annotation }) => {
    switch (type) {
      case PointSelector.TYPE:
        return (
          ""
          // <Overlay>
          //   Click to Annotate
          // </Overlay>
        )
      case PolygonSelector.TYPE:
        return (
          ""
          // <Overlay>
          //   Click to Add Points to Annotation
          // </Overlay>
        )
      default:
        return (
          ""
          // <Overlay>
          //   Click and Drag to Annotate
          // </Overlay>
        )
    }
  }
}
