module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    meta: {
        stable_name: "ender_3_4.2.2-STM-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.2-STM-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["SERIAL_PORT_2", -1],
            ["BAUDRATE_2", 250000],
            ["SERIAL_PORT_3", 1],
            ["BAUDRATE_3", 250000]
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ],
        disable: []
    }
};
