// BLOCK DEFINITIONS
var code = "";
Blockly.defineBlocksWithJsonArray([
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
    "tooltip": "",
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
    "tooltip": "",
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
    "type": "runframe",
    "message0": "Run every frame %1",
    "args0": [
      {
        "type": "input_statement",
        "name": "NAME"
      }
    ],
    "colour": 60,
    "tooltip": "",
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
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "createcanvas",
    "message0": "Create Canvas",
    "previousStatement": null,
    "nextStatement": null,
    "colour": 60,
    "tooltip": "",
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
    "tooltip": "",
    "helpUrl": ""
  },

  {
    "type": "mousey",
    "message0": "mouseY",
    "output": "Number",
    "colour": 60,
    "tooltip": "",
    "helpUrl": ""
  }

]);

// BLOCKS BINDINGS
Blockly.JavaScript['background'] = function(block) {
  var value_background = Blockly.JavaScript.valueToCode(block, 'background', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
  var code = 'sketch.background'+'('+value_background+');\n';
  return code;
};

Blockly.JavaScript['ellipse'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'W', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'H', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'sketch.ellipse('+value_x+','+value_y+','+value_w+','+value_h+');\n';
  return code;
};

Blockly.JavaScript['runframe'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  sketch.draw = () => {
  ` + statements_name + `  
  };`
  return code;
};

Blockly.JavaScript['setup'] = function(block) {
  var statements_setup = Blockly.JavaScript.statementToCode(block, 'setup');
  // TODO: Assemble JavaScript into code variable.
  var code = `
  sketch.setup = () => {
  ` + statements_setup + `  
  };`  
  return code;
};

Blockly.JavaScript['createcanvas'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sketch.createCanvas(blockly_width, blockly_height);\n';
  return code;
};


Blockly.JavaScript['circle'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_d = Blockly.JavaScript.valueToCode(block, 'd', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `sketch.circle(${value_x},${value_y},${value_d});\n`;
  return code;
};

Blockly.JavaScript['line2d'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `sketch.line(${value_x1}, ${value_y1}, ${value_x2}, ${value_y2});\n`;
  return code;
};

function createVariable(b) {
  Blockly.Variables.createVariableButtonHandler(b.getTargetWorkspace(), null, 'panda');

}

Blockly.JavaScript['rect'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
  var value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = `sketch.rect(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
  return code;
};

Blockly.JavaScript['mousex'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sketch.mouseX';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['mousey'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'sketch.mouseY';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// TOOLBOX
var toolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "Math",
      "categorystyle": "math_category",

      "contents": [
        {
          "kind": "block",
          "type": "math_number"
        },

        {
          "kind": "block",
          "type": "math_arithmetic"
        },
        {
          "kind": "block",
          "type": "math_single"
        },

        {
          "kind": "block",
          "type": "math_trig"
        },
        {
          "kind": "block",
          "type": "math_constant"
        },
        {
          "kind": "block",
          "type": "math_number_property"
        },
        {
          "kind": "block",
          "type": "math_change"
        },
        {
          "kind": "block",
          "type": "math_round"
        },
        {
          "kind": "block",
          "type": "math_on_list"
        },
        {
          "kind": "block",
          "type": "math_modulo"
        },
        {
          "kind": "block",
          "type": "math_constrain"
        }, 
        {
          "kind": "block",
          "type": "math_random_int"
        },  
        {
          "kind": "block",
          "type": "math_random_float"
        },        
        {
          "kind": "block",
          "type": "math_atan2"
        },   
      ]
    },

    {
      "kind": "category",
      "name": "Loops",
      "categorystyle": "loop_category",

      "contents": [
        {
          "kind": "block",
          "type": "controls_repeat"
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_for"
        },
        {
          "kind": "block",
          "type": "controls_forEach"
        },
        {
          "kind": "block",
          "type": "controls_flow_statements"
        },
      ]
    },

    {
      "kind": "category",
      "name": "Variables",
      "categorystyle": "variable_category",
      "contents": [
        {
          "kind": "button",
          "text": "Create a Variable",
          "callbackKey": "createVariable"
        },
    
        {
          "kind": "block",
          "type": "variables_get"
        },
        {
          "kind": "block",
          "type": "variables_set"
        },
      ]
    },

    {
      "kind": "category",
      "name": "Logic",
      "categorystyle": "logic_category",
      "contents": [
        {
          "kind": "block",
          "type": "logic_boolean"
        },
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "controls_ifelse"
        },
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_negate"
        },
        {
          "kind": "block",
          "type": "logic_null"
        },
        {
          "kind": "block",
          "type": "logic_ternary"
        },
        {
          "kind": "block",
          "type": "controls_if_if"
        },
        {
          "kind": "block",
          "type": "controls_if_elseif"
        },
        {
          "kind": "block",
          "type": "controls_if_else"
        },
      ]
    },

    {
      "kind": "category",
      "name": "Text",
      "categorystyle": "text_category",

      "contents": [
        {
          "kind": "block",
          "type": "text"
        },
        {
          "kind": "block",
          "type": "text_multiline"
        },
        {
          "kind": "block",
          "type": "text_join"
        },
        {
          "kind": "block",
          "type": "text_create_join_container"
        },
        {
          "kind": "block",
          "type": "text_create_join_item"
        },
        {
          "kind": "block",
          "type": "text_length"
        },
        {
          "kind": "block",
          "type": "text_isEmpty"
        },
        {
          "kind": "block",
          "type": "text_indexOf"
        },
        {
          "kind": "block",
          "type": "text_charAt"
        },
      ]
    },

    {
      "kind": "category",
      "name": "Lists",
      "categorystyle": "list_category",

      "contents": [
        {
          "kind": "block",
          "type": "lists_create_empty"
        },
        {
          "kind": "block",
          "type": "lists_repeat"
        },
        {
          "kind": "block",
          "type": "lists_reverse"
        },
        {
          "kind": "block",
          "type": "lists_isEmpty"
        },
        {
          "kind": "block",
          "type": "lists_length"
        },
      ]
    },   

    {
      "kind": "category",
      "name": "Color",
      "categorystyle": "colour_category",

      "contents": [
        {
          "kind": "block",
          "type": "colour_picker"
        },
        {
          "kind": "block",
          "type": "colour_random"
        },
        {
          "kind": "block",
          "type": "colour_rgb"
        },
        {
          "kind": "block",
          "type": "colour_blend"
        },
      ]
    }, 
    {
      "kind": "category",
      "name": "Procedures",
      "custom": "PROCEDURE",
      "categorystyle": "procedure_category",

    },
    {
      "kind": "category",
      "name": "P5",
      "colour": "60",
      "contents": [

        {
          "kind": "block",
          "type": "background"
        },
        
        {
          "kind": "block",
          "type": "runframe"
        },

        {
          "kind": "block",
          "type": "setup"
        },
        {
          "kind": "block",
          "type": "createcanvas"
        }
      ]
    },

    {
      "kind": "category",
      "name": "2D Shapes",
      "colour": "60",
      "contents": [
        {
          "kind": "block",
          "type": "ellipse"
        },

        {
          "kind": "block",
          "type": "circle"
        },
        {
          "kind": "block",
          "type": "line2d"
        },
        {
          "kind": "block",
          "type": "rect"
        },
      ]
    },

    {
      "kind": "category",
      "name": "P5 Events",
      "colour": "60",
      "contents": [
        {
          "kind": "block",
          "type": "mousex"
        },

        {
          "kind": "block",
          "type": "mousey"
        },
      ]
    }
  ]
}


// WORKSPACE
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox, grid:
  {spacing: 20,
   length: 3,
   colour: '#ccc',
   snap: true}});

workspace.registerButtonCallback("createVariable", createVariable)


  // EVENTS AND P5

  var runButton = document.querySelector("#runButton");
  runButton.onclick = function() {
    code = Blockly.JavaScript.workspaceToCode(workspace);

    const s = ( sketch ) => {
      var blockly_width = parseFloat(window.getComputedStyle(document.querySelector("#blocklyDiv")).width);
      var blockly_height = parseFloat(window.getComputedStyle(document.querySelector("#blocklyDiv")).height);

      console.log(code);
      eval(code);
    };
    document.querySelector("#canvas").innerHTML = "";
    let myp5 = new p5(s, 'canvas');
  }
  var stopButton = document.querySelector("#stopButton");

  stopButton.onclick = function() {
    document.querySelector(".p5Canvas").remove();

  };

  var saveButton = document.querySelector("#saveButton");

  saveButton.onclick = function() {
    let jsonified_workspace = Blockly.serialization.workspaces.save(workspace);

    let workspace_blob = new Blob([JSON.stringify(jsonified_workspace)], {
      type: 'application/json'});

    let fakeLink = document.createElement("a");
    fakeLink.download = "workspace.json";
    fakeLink.href = window.URL.createObjectURL(workspace_blob);

    let  e = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
  });

  fakeLink.dispatchEvent(e);
  fakeLink.remove()
  };

  var loadButton = document.querySelector("#loadButton");

  loadButton.onclick = function() {
    var inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = true;
    inputElement.addEventListener("change", (evt) => {
      let reader = new FileReader();
      reader.addEventListener("loadend", () => { 
        let data = reader.result; 
        let jsonified_data = JSON.parse(data);
        Blockly.serialization.workspaces.load(jsonified_data, workspace);
      });
      reader.readAsText(evt.target.files[0]); 
    } )
    inputElement.dispatchEvent(new MouseEvent("click")); 



  };

//console.log(s);
