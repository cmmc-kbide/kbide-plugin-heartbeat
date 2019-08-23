module.exports = function(Blockly) {
  Blockly.JavaScript["hearbeat_block"] = function(block) {
    var value_hearbeat_pin = Blockly.JavaScript.valueToCode(
      block,
      "HEARBEAT_PIN",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_hearbeat_alpha = Blockly.JavaScript.valueToCode(
      block,
      "HEARBEAT_ALPHA",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_hearbeat_period = Blockly.JavaScript.valueToCode(
      block,
      "HEARBEAT_PERIOD",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var value_hearbeat_change = Blockly.JavaScript.valueToCode(
      block,
      "HEARBEAT_CHANGE",
      Blockly.JavaScript.ORDER_ATOMIC
    );
    var variable_hearbeat_raw_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("HEARBEAT_RAW_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    var variable_hearbeat_value = Blockly.JavaScript.variableDB_.getName(
      block.getFieldValue("HEARBEAT_VALUE"),
      Blockly.Variables.NAME_TYPE
    );
    // TODO: Assemble JavaScript into code variable.
    var code = `
	#VARIABLE
		int HEARBEAT_PIN = ${value_hearbeat_pin};
		double HEARBEAT_ALPHA = ${value_hearbeat_alpha};
		int HEARBEAT_PERIOD = ${value_hearbeat_period};
		double HEARBEAT_CHANGE = ${value_hearbeat_change};
	#END

	static double HEARBEAT_OLD_VALUE = 0;
	static double HEARBEAT_OLD_CHANGE = 0;
	HEARBEAT_RAW_VALUE = analogRead(HEARBEAT_PIN);
	HEARBEAT_VALUE = HEARBEAT_ALPHA * HEARBEAT_OLD_VALUE + (1 - HEARBEAT_ALPHA) * HEARBEAT_RAW_VALUE;
	HEARBEAT_OLD_VALUE = HEARBEAT_VALUE;
	delay(HEARBEAT_PERIOD);
    `;
    return code;
  };
};
