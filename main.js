(function() {
  'use strict';

  Blockly.Blocks['robot_move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Go")
          .appendField(new Blockly.FieldDropdown([["forwards", "forward"], ["backwards", "backward"]]), "direction")
          .appendField(new Blockly.FieldDropdown([["quickly", "fast"], ["slowly", "slow"]]), "speed")
          .appendField("for")
          .appendField(new Blockly.FieldTextInput(""), "duration")
          .appendField("seconds");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(0);
    }
  };

  Blockly.Python['robot_move'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var dropdown_speed = block.getFieldValue('speed');
    var text_duration = block.getFieldValue('duration');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
  };

  Blockly.Blocks['robot_turn'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Turn")
          .appendField(new Blockly.FieldDropdown([["left", "left"], ["right ", "right"]]), "direction")
          .appendField(new Blockly.FieldDropdown([["quickly", "fast"], ["slowly", "slow"]]), "speed")
          .appendField("for")
          .appendField(new Blockly.FieldTextInput(""), "duration")
          .appendField("seconds");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(50);
    }
  };

  Blockly.Python['robot_turn'] = function(block) {
    var dropdown_direction = block.getFieldValue('direction');
    var dropdown_speed = block.getFieldValue('speed');
    var text_duration = block.getFieldValue('duration');
    // TODO: Assemble Python into code variable.
    var code = 'R.motors[0].m0.power = 50;\n'
               'R.motors[0].m1.power = 50;\n';
    return code;
  };

  Blockly.Blocks['repeat'] = {
    init: function() {
      this.appendStatementInput("body")
          .setCheck(null)
          .appendField("Repeat")
          .appendField(new Blockly.FieldTextInput(""), "times")
          .appendField("times");
      this.setInputsInline(false);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(100);
    }
  };

  Blockly.Python['repeat'] = function(block) {
    var text_times = block.getFieldValue('times');
    var statements_body = Blockly.Python.statementToCode(block, 'body');
    // TODO: Assemble Python into code variable.
    var code = 'for i in range(' + text_times + '):\n';
    return code;
  };

  Blockly.Blocks['wait'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Wait")
          .appendField(new Blockly.FieldTextInput(""), "duration")
          .appendField("seconds");
      this.setInputsInline(false);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(150);
    }
  };

  Blockly.Python['wait'] = function(block) {
    var text_duration = block.getFieldValue('duration');
    // TODO: Assemble Python into code variable.
    var code = 'time.sleep(' + text_duration + ')\n';
    return code;
  };

  var $toolbox = document.querySelector('#toolbox');

  var workspace = Blockly.inject('workspace', {
    toolbox: $toolbox,
    trashcan: true
  });
}());
