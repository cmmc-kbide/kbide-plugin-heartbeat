Blockly.Blocks['hearbeat_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("HEARBEAT");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};