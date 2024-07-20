export const stateProgressEnum = {};

function initStateMAnager() {
  const state = {
    playerHp: 3,
    maxPlayerHp: 3,
    isDoubleJumpUnlocked: false,
    playerIsInBossFight: false,
    isBossDefeated: false,
  };

  return {
    current() {
      return { ...state };
    },
    set(property, value) {
      state[property] = value;
    },
  };
}

export const state = initStateMAnager();
