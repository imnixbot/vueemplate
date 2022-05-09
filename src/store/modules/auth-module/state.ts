import { AuthStateInterface } from '../../../types/states/authStateType'

function state(): AuthStateInterface {
  return {
    isAuthenticated: false
  }
}

export default state;
