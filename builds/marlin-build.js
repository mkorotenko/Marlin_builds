module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    meta: {
        stable_name: "Marlin.2.0.x_4.2.2-STM-{{marlin_version}}-{{uid}}",
        nightly_name: "Marlin.2.1.2_4.2.2-STM-{{current_date}}-{{uid}}"
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
            "MESH_BED_LEVELING",
            "LCD_BED_LEVELING",
            "ENABLE_PIDBED",
            "LIN_ADVANCE",
            "LINEAR_ADVANCE",
            "CUSTOM_PRINTER_NAME",
            ["USER_PRINTER_NAME", "M_2.1.2"]
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS",
            "HOTEND_IDLE_TIMEOUT"
        ],
        disable: []
    }
};
