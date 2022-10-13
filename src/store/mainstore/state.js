const orgName = localStorage.getItem('orgName')
const orgData = JSON.parse(localStorage.getItem('organizationData'))

export default {
  currentIndex: -1,
  orgName: orgName || '',
  organizations: orgData || [],
  employees: []
}
