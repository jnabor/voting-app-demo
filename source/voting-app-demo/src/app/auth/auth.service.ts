import * as firebase from 'firebase';

export class AuthService {
  token: string;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error=> console.log(error)
    )
  }

  signinUser(email: string, password: string) {
      return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  setToken(tokenL: string) {

  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token : string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
