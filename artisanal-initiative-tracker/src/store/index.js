import { createStore } from 'vuex'

import players from './modules/players'

const store = createStore({
  modules: {
    players
  },
  state() {
    return {
      currentMonsters: []
    }
  },
  mutations: {
    setCurrentMonsters(state, payload) {
      state.currentMonsters = payload
    },
    addCurrentMonster(state, payload) {
      // Create a copy of the payload
      const newMonster = { ...payload };
    
      let tempName = newMonster.name;
      let tempCount = 1;
    
      // Check if the name already exists
      const existingMonster = state.currentMonsters.find(monster => monster.name === newMonster.name);
    
      if (existingMonster) {
        // Generate a unique name
        tempName = `${newMonster.name} ${tempCount}`;
        while (state.currentMonsters.some(monster => monster.name === tempName)) {
          tempCount++;
          tempName = `${newMonster.name} ${tempCount}`;
        }
      }
    
      // Update the newMonster with the unique name and other properties
      newMonster.currentDamage = 0;
      newMonster.name = tempName;
    
      // Push the updated newMonster to the currentMonsters array
      state.currentMonsters.push(newMonster);
    },
    removeCurrentMonster(state, payload) {
      state.currentMonsters = state.currentMonsters.filter((monster) => monster.name !== payload)
    }
  },
  actions: {
    setCurrentMonsters(context, payload) {
      context.commit('setCurrentMonsters', payload)
    },
    addCurrentMonster(context, payload) {
      context.commit('addCurrentMonster', payload)
    },
    removeCurrentMonster(context, payload) {
      context.commit('removeCurrentMonster', payload)
    }
  },
  getters: {
    currentMonsters(state) {
      return state.currentMonsters
    }
  }
})

export default store
