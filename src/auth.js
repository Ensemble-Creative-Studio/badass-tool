export const auth = {
  loggedIn: false,
  login() {
    this.loggedIn = true
  },
  logout() {
    this.loggedIn = false
  },
}
