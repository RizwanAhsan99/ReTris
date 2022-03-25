
function hexShape(chooseShape) {
    var triangle = {
      text: "triangle",
      sides: 3,
      angles: 120,
      blockAngle: 30,
      blockAngle2: 120,
      blockWidth: 5,
      blockWidthSquare: 2,
      theta: 180,
      offset: 0,
      rows: 7,
      denom: 3,
      distSq: 2,
    };
  
    var square = {
      text: "square",
      sides: 4,
      angles: 90,
      blockAngle: 90,
      blockAngle2: 90,
      blockWidth: 3.25,
      blockWidthSquare: 2.5,
      theta: 45,
      offset: 25,
      rows: 8,
      denom: 3,
      distSq: 2,
    };
  
    var pentagon = {
      text: "pentagon",
      sides: 5,
      angles: 72,
      blockAngle: 270,
      blockAngle2: 72,
      blockWidth: 1.75,
      blockWidthSquare: 1.4,
      theta: 252,
      offset: 0,
      rows: 8,
      denom: 2,
      distSq: 2.5,
    };
  
    var hexagon = {
      text: "hexagon",
      sides: 6,
      angles: 60,
      blockAngle: 30,
      blockAngle2: 60,
      blockWidth: 2,
      blockWidthSquare: 3,
      theta: 30,
      offset: 0,
      rows: 8,
      denom: 2,
      distSq: 3,
    };
  
    switch(chooseShape) {
      case "triangle":
        return triangle
      case "square":
        return square
      case "pentagon":
        return pentagon
      default:
        return hexagon
    }
}

module.exports = hexShape