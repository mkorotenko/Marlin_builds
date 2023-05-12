module.exports = {
    extends: "builds/marlin-build.js",
    board_env: "STM32F103RE_creality",
    active: false,
    meta: {
        stable_name: "ender_3_4.2.2-STM32-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.2-STM32-{{current_date}}-{{uid}}"
    },
    configuration: {
    },
    configuration_adv: {
    }
};
