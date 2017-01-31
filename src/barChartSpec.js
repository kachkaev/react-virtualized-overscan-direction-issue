// https://github.com/kristw/react-vega/blob/master/examples/barChart.json
// https://github.com/kristw/react-vega/blob/master/examples/main.js
export default {
  "width": 450,
  "height": 450,
  "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
  "background": "#fff",
  "data": [{ "name": "table", "values":
    (() => {
    const result = [];
    let i = 0;
    while (i < 449) {
      result.push({"x": ++i,  "y": Math.random() * 100});
    }
    console.log(result);
    return result;
    })(),
  }],
  "scales": [
    {
      "name": "x",
      "type": "ordinal",
      "range": "width",
      "domain": {"data": "table", "field": "x"}
    },
    {
      "name": "y",
      "type": "linear",
      "range": "height",
      "domain": {"data": "table", "field": "y"},
      "nice": true
    }
  ],
  "axes": [
    {"type": "x", "scale": "x"},
    {"type": "y", "scale": "y"}
  ],
  "marks": [
    {
      "type": "rect",
      "name": "bar",
      "from": {"data": "table"},
      "properties": {
        "enter": {
          "x": {"scale": "x", "field": "x"},
          "width": {"scale": "x", "band": true},
          "y": {"scale": "y", "field": "y"},
          "y2": {"scale": "y", "value": 0}
        },
        "update": {
          "fill": {"value": "steelblue"}
        },
        "hover": {
          "fill": {"value": "red"}
        }
      }
    }
  ]
};
