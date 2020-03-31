import React, { Component } from "react";
import Shape from "./shape";

class Selector extends Component {
  constructor() {
    super();
    this.state = {
      selectedShape: "square",
      circleClicks: 0,
      squareClicks: 0,
      ovalClicks: 0,
      triangleClicks: 0,
      triangle_downClicks: 0,
      triangle_leftClicks: 0,
      triangle_rightClicks: 0,
      trapeziumClicks: 0,
      starClicks: 0,
      clickedTotal: 0,
      clickedShapes: 0,
      circle: false,
      square: false,
      oval: false,
      triangle: false,
      triangle_down: false,
      triangle_left: false,
      triangle_right: false,
      trapezium: false,
      star: false,
    };
  }

  // this is where our methods live

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
      circleClicks:
        shapeName === "circle"
          ? this.state.circleClicks + 1
          : this.state.circleClicks,
      squareClicks:
        shapeName === "square"
          ? this.state.squareClicks + 1
          : this.state.squareClicks,
      ovalClicks:
        shapeName === "oval"
          ? this.state.ovalClicks + 1
          : this.state.ovalClicks,
      triangleClicks:
        shapeName === "triangle"
          ? this.state.triangleClicks + 1
          : this.state.triangleClicks,
      triangle_downClicks:
        shapeName === "triangle_down"
          ? this.state.triangle_downClicks + 1
          : this.state.triangle_downClicks,
      triangle_leftClicks:
        shapeName === "triangle_left"
          ? this.state.triangle_leftClicks + 1
          : this.state.triangle_leftClicks,
      triangle_rightClicks:
        shapeName === "triangle_right"
          ? this.state.triangle_rightClicks + 1
          : this.state.triangle_rightClicks,
      trapeziumClicks:
        shapeName === "trapezium"
          ? this.state.trapeziumClicks + 1
          : this.state.trapeziumClicks,
      starClicks:
        shapeName === "star"
          ? this.state.starClicks + 1
          : this.state.starClicks,
      // circle: (shapeName === "circle") ? true : false,
      // square: (shapeName === "square") ? true : false,
      // oval: (shapeName === "oval") ? true : false,
      // triangle: (shapeName === "triangle") ? true : false,
      // triangle_down: (shapeName === "triangle_down") ? true : false,
      // triangle_left: (shapeName === "triangle_left") ? true : false,
      // triangle_right: (shapeName === "triangle_right") ? true : false,
      // trapezium: (shapeName === "trapezium") ? true : false,
      // star: (shapeName === "star") ? true : false,
    });
    // var x = 0;
    // for (let i in this.state) {
    //   if (this.state[i] === true) {
    //     x = x + 1;
    //   }
    // }
    // this.setState({
    //   clickedTotal: x
    // })
  };

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>
            Selected: <span>{this.state.selectedShape}</span>
          </div>
        </div>
        <div className="shape-list">
          <Shape shape="square" selectShape={this.selectShape} />
          <Shape shape="circle" selectShape={this.selectShape} />
          <Shape shape="oval" selectShape={this.selectShape} />
          <Shape shape="triangle" selectShape={this.selectShape} />
          <Shape shape="triangle_down" selectShape={this.selectShape} />
          <Shape shape="triangle_left" selectShape={this.selectShape} />
          <Shape shape="triangle_right" selectShape={this.selectShape} />
          <Shape shape="trapezium" selectShape={this.selectShape} />
          <Shape shape="star" selectShape={this.selectShape} />
        </div>
        <div className="navbar">
          <div>Total shapes clicked: {this.state.clickedTotal}</div>
          <div>Square: {this.state.squareClicks}</div>
          <div>Circle: {this.state.circleClicks}</div>
          <div>Oval: {this.state.ovalClicks}</div>
          <div>Triangle: {this.state.triangleClicks}</div>
          <div>Triange_down: {this.state.triangle_downClicks}</div>
          <div>Triangle_left: {this.state.triangle_leftClicks}</div>
          <div>Triangle_right: {this.state.triangle_rightClicks}</div>
          <div>Trapezium: {this.state.trapeziumClicks}</div>
          <div>Star: {this.state.starClicks}</div>
        </div>
      </div>
    );
  }
}

export default Selector;
