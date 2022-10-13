// --organization data
export function addOrganization (store, orgData) {
  store.commit('ADD_ORG_DATA', orgData)
}
export function editOrganization (store, orgData) {
  store.commit('EDIT_ORG_DATA', orgData)
}
export function deleteItem (store, data) {
  store.commit('DELETE_ORG_DATA', data)
}

// --employees data
export function addEmployee (store, orgData) {
  store.commit('ADD_EMP_DATA', orgData)
}
export function resetEmployee (store, orgData) {
  store.commit('RESET_EMP_DATA', orgData)
}
export function deleteEmployeeBefore (store, orgData) {
  store.commit('DELETE_EMP_BEFORE', orgData)
}
export function editEmployee (store, orgData) {
  store.commit('EDIT_EMP_DATA', orgData)
}

export function setCurrentId (store, data) {
  store.commit('SET_INDEX', data)
}
