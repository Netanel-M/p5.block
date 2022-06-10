// BLOCKS BINDINGS
Blockly.JavaScript['background'] = function(block) {
    var value_background = Blockly.JavaScript.valueToCode(block, 'background', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
    var code = 'sketch.background'+'('+value_background+');\n';
    return code;
  };
  
  Blockly.JavaScript['fill'] = function(block) {
    var value_fill = Blockly.JavaScript.valueToCode(block, 'fill', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
    var code = 'sketch.fill'+'('+value_fill+');\n';
    return code;
  };

  Blockly.JavaScript['stroke'] = function(block) {
    var value_stroke = Blockly.JavaScript.valueToCode(block, 'stroke', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
    var code = 'sketch.stroke'+'('+value_stroke+');\n';
    return code;
  };
  
  Blockly.JavaScript['strokeweight'] = function(block) {
    var value_strokeweight = Blockly.JavaScript.valueToCode(block, 'strokeweight', Blockly.JavaScript.ORDER_ATOMIC);  // TODO: Assemble JavaScript into code variable.
    var code = 'sketch.strokeWeight'+'('+value_strokeweight+');\n';
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

  Blockly.JavaScript['point'] = function(block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = `sketch.point(${value_x}, ${value_y});\n`;
    return code;
  };
  
  Blockly.JavaScript['mousemoved'] = function(block) {
    var statements_mousemoved = Blockly.JavaScript.statementToCode(block, 'mousemoved');
    // TODO: Assemble JavaScript into code variable.
    var code = `sketch.mouseMoved = () => {
      ${statements_mousemoved}  
      };`;
    return code;
  };
  
  Blockly.JavaScript['mousedragged'] = function(block) {
    var statements_mousedragged = Blockly.JavaScript.statementToCode(block, 'mousedragged');
    // TODO: Assemble JavaScript into code variable.
    var code = `sketch.mouseDragged = () => {
      ${statements_mousedragged}  
      };`;
    return code;
  };
  
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