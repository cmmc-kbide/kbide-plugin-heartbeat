Blockly.Blocks["hearbeat_block"] = {
    init: function() {
      this.appendDummyInput().appendField("HEARBEAT");
      this.appendValueInput("HEARBEAT_PIN")
        .setCheck("Number")
        .appendField("PIN");
      this.appendValueInput("HEARBEAT_ALPHA")
        .setCheck("Number")
        .appendField("ALPHA");
      this.appendValueInput("HEARBEAT_PERIOD")
        .setCheck("Number")
        .appendField("PERIOD");
      this.appendValueInput("HEARBEAT_CHANGE")
        .setCheck("Number")
        .appendField("CHANGE");
      this.appendDummyInput()
        .appendField("RAW VALUE SET TO")
        .appendField(
          new Blockly.FieldVariable("HEARBEAT_RAW_VALUE"),
          "HEARBEAT_RAW_VALUE"
        );
      this.appendDummyInput()
        .appendField("VALUE SET TO")
        .appendField(
          new Blockly.FieldVariable("HEARBEAT_VALUE"),
          "HEARBEAT_VALUE"
        );
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };