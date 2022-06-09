export var BLOCKS = [
    {
      "type": "background",
      "message0": "Background Color %1",
      "args0": [
        {
          "type": "input_value",
          "name": "background",
          "check": [
            "Number",
            "Colour"
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Set the background color",
      "helpUrl": ""
    },
    {
      "type": "fill",
      "message0": "Fill Color %1",
      "args0": [
        {
          "type": "input_value",
          "name": "fill",
          "check": [
            "Number",
            "Colour"
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Set the fill color for shapes",
      "helpUrl": ""
    },
    {
        "type": "stroke",
        "message0": "stroke Color %1",
        "args0": [
          {
            "type": "input_value",
            "name": "stroke",
            "check": [
              "Number",
              "Colour"
            ]
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "Set the stroke color (border) for shapes or points",
        "helpUrl": ""
      },
    {
      "type": "ellipse",
      "message0": "Ellipse X %1 Y %2 W %3 H %4",
      "args0": [
        {
          "type": "input_value",
          "name": "X",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "Y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "W",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "H",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Draws an ellipse",
      "helpUrl": ""
    },
  
    {
      "type": "circle",
      "message0": "Circle X %1 Y %2 Diameter %3",
      "args0": [
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "d",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Draws a circle",
      "helpUrl": ""
    },
    {
      "type": "line2d",
      "message0": "Line X1 %1 Y1 %2 X2 %3 Y2 %4",
      "args0": [
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Draws a two dimensional line",
      "helpUrl": ""
    },

    {
        "type": "point",
        "message0": "Point X %1 Y %2",
        "args0": [
            {
            "type": "input_value",
            "name": "x",
            "check": "Number"
            },
            {
            "type": "input_value",
            "name": "y",
            "check": "Number"
            }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 60,
        "tooltip": "Draws a point",
        "helpUrl": ""
    },

    {
      "type": "runframe",
      "message0": "Run every frame %1",
      "args0": [
        {
          "type": "input_statement",
          "name": "NAME"
        }
      ],
      "colour": 60,
      "tooltip": "Runs nested code at every frame",
      "helpUrl": ""
    },
    
    {
      "type": "setup",
      "message0": "Setup %1",
      "args0": [
        {
          "type": "input_statement",
          "name": "setup"
        }
      ],
      "colour": 60,
      "tooltip": "Runs when sketch initially loads",
      "helpUrl": ""
    },
  
    {
      "type": "createcanvas",
      "message0": "Create Canvas",
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Creates the canvas upon which you draw on",
      "helpUrl": ""
    },
  
    {
      "type": "rect",
      "message0": "Rect x %1 y %2 Width %3 Height %4",
      "args0": [
        {
          "type": "input_value",
          "name": "x",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "w",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "h",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "colour": 60,
      "tooltip": "Draws a rectangle",
      "helpUrl": ""
    },
  
    {
      "type": "mousex",
      "message0": "mouseX",
      "output": "Number",
      "colour": 60,
      "tooltip": "Returns the x position of the mouse",
      "helpUrl": ""
    },
  
    {
      "type": "mousey",
      "message0": "mouseY",
      "output": "Number",
      "colour": 60,
      "tooltip": "Returns the y position of the mouse",
      "helpUrl": ""
    },
  
    {
      "type": "mousemoved",
      "message0": "Mouse Moved %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "mousemoved"
        }
      ],
      "colour": 60,
      "tooltip": "Mouse moved event",
      "helpUrl": ""
    },
  
    {
      "type": "mousedragged",
      "message0": "Mouse Dragged %1 %2",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "mousedragged"
        }
      ],
      "colour": 60,
      "tooltip": "Mouse dragged event",
      "helpUrl": ""
    }
  
  ];
  