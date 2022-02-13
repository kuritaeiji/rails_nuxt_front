export const state = () => ({
  loggedIn: false,
  styles: {
    beforeLogin: {
      appBarHeight: 56
    }
  },
  current: {
    project: null
  },
  projects: [
    { id: 1, name: 'MyProject01', updatedAt: '2020-04-01T12:00:00+09:00' },
    { id: 2, name: 'MyProject02', updatedAt: '2020-04-05T12:00:00+09:00' },
    { id: 3, name: 'MyProject03', updatedAt: '2020-04-03T12:00:00+09:00' },
    { id: 4, name: 'MyProject04', updatedAt: '2020-04-04T12:00:00+09:00' },
    { id: 5, name: 'MyProject05', updatedAt: '2020-04-01T12:00:00+09:00' }
  ]
})

export const getters = {
  recentProjects (state) {
    const projects = [...state.projects]
    return projects.sort((a, b) => {
      const aDate = new Date(a.updatedAt)
      const bDate = new Date(b.updatedAt)
      if (aDate > bDate) { return -1 }
      if (bDate > aDate) { return 1 }
      return 0
    })
  },
  projectById (state) {
    return id => state.projects.find(p => p.id === id)
  },
  currentProject (state) {
    return state.current.project
  }
}

export const mutations = {
  setLoggedIn (state, payload) {
    state.loggedIn = payload
  },
  setCurrentProject (state, payload) {
    state.current.project = payload
  }
}

export const actions = {
  login ({ commit }) {
    commit('setLoggedIn', true)
  },
  logout ({ commit }) {
    commit('setLoggedIn', false)
  },
  setCurrentProject ({ commit, getters }, routeParams) {
    const project = getters.projectById(Number(routeParams.id))
    commit('setCurrentProject', project)
  }
}
