export var toolbox = {
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

          {
            "kind": "block",
            "type": "background"
          },
  
          {
            "kind": "block",
            "type": "fill"
          },
          {
            "kind": "block",
            "type": "stroke"
          }
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
            "type": "point"
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
  
          {
            "kind": "block",
            "type": "mousemoved"
          },
  
          {
            "kind": "block",
            "type": "mousedragged"
          },
        ]
      }
    ]
  }
  