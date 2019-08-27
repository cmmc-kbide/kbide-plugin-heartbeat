module.exports = [
    {
        name: "photo_resistor_block",
        blocks: [
            {
              xml: `<block type="hearbeat_block">
                            <value name="HEARBEAT_PIN">
                                <shadow type="math_number">
                                    <field name="NUM"></field>
                                </shadow>
                            </value>
                            <value name="HEARBEAT_ALPHA">
                                <shadow type="math_number">
                                    <field name="NUM">0.75</field>
                                </shadow>
                            </value>
                            <value name="HEARBEAT_PERIOD">
                                <shadow type="math_number">
                                    <field name="NUM">20</field>
                                </shadow>
                            </value>
                            <value name="HEARBEAT_CHANGE">
                                <shadow type="math_number">
                                    <field name="NUM">0.0</field>
                                </shadow>
                            </value>
                        </block>`
            }
        ]
    }
];