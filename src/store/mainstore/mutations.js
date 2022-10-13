// --organization data
export const ADD_ORG_DATA = (state, opened) => {
  const arr = JSON.parse(localStorage.getItem('organizationData')) ?? []
  arr.push(opened)
  state.organizations = arr
  localStorage.setItem('organizationData', JSON.stringify(arr))
}
export const DELETE_ORG_DATA = (state, opened) => {
  const arr = JSON.parse(localStorage.getItem('organizationData')) ?? []
  arr.splice(opened, 1)
  state.organizations = arr
  localStorage.setItem('organizationData', JSON.stringify(arr))
}
export const EDIT_ORG_DATA = (state, opened) => {
  const arr = JSON.parse(localStorage.getItem('organizationData')) ?? []
  arr[state.currentIndex] = opened
  state.organizations = arr
  localStorage.setItem('organizationData', JSON.stringify(arr))
}

// --employee data
export const ADD_EMP_DATA = (state, opened) => {
  state.employees.push(opened)
}
export const RESET_EMP_DATA = (state, opened) => {
  state.employees = opened
}
export const DELETE_EMP_BEFORE = (state, opened) => {
  state.employees.splice(opened, 1)
}
export const EDIT_EMP_DATA = (state, opened) => {
  state.employees[state.currentIndex] = opened
}

export const SET_INDEX = (state, opened) => {
  state.currentIndex = opened
}
