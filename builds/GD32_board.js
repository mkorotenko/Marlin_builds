module.exports = {
    extends: "builds/marlin-build.js",
    board_env: "GD32F303RET6_creality_maple",
    active: false,
    meta: {
        stable_name: "ender_3_4.2.2-GD32-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.2-GD32-{{current_date}}-{{uid}}"
    },
    configuration: {
    },
    configuration_adv: {
    }
};
