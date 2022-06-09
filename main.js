import {BLOCKS} from './blocks.js';
import './bindings.js';
import {toolbox} from './toolbox.js';

var code = "";
Blockly.defineBlocksWithJsonArray(BLOCKS);

function createVariable(b) {
  Blockly.Variables.createVariableButtonHandler(b.getTargetWorkspace(), null, 'panda');
}

// WORKSPACE
var workspace = Blockly.inject('blocklyDiv', {toolbox: toolbox, grid:
  {spacing: 20,
   length: 3,
   colour: '#ccc',
   snap: true}});

var initialState = {"blocks":{"languageVersion":0,"blocks":[{"type":"setup","id":"WmjtBgv8T`VM|X]xG8^~","x":0,"y":0,"inputs":{"setup":{"block":{"type":"createcanvas","id":"B0?jr+H^`A|7aU)!J*=%","next":{"block":{"type":"background","id":"t4whI~LpLUVr9txsPkD{","inputs":{"background":{"block":{"type":"math_number","id":"9IUjqrR8{@}NDIjlbt?h","fields":{"NUM":0}}}}}}}}}},{"type":"runframe","id":"@(pFEN6#}U+V0)`?o?L#","x":0,"y":100}]}}
Blockly.serialization.workspaces.load(initialState, workspace);

workspace.registerButtonCallback("createVariable", createVariable)

  // EVENTS AND P5

  // Run function
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
    document.querySelector("#blocklyDiv").style = "height: 800px; width: 100%; display: block;"

    let myp5 = new p5(s, 'canvas');
    document.querySelector("#blocklyDiv").style = "display: hidden;"

  }
  // Stop Function
  var stopButton = document.querySelector("#stopButton");
  stopButton.onclick = function() {
    document.querySelector(".p5Canvas").remove();
    document.querySelector("#blocklyDiv").style = "height: 800px; width: 100%; display: block;"

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
