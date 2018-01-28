import * as firebase from 'firebase';

export class AuthService {
  token: string = null;

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error=> console.log(error)
    )
  }

  signinUser(email: string, password: string) {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then( response => {
        console.log(response);
        console.log("authentication success");
        firebase.auth().currentUser.getToken()
              .then(
                (token : string) => this.token = token
              );
      })
      .catch( error => {
        console.log(error);
        console.log("authentication failure");
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token : string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
