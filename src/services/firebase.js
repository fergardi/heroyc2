import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCPVWdkpSuT80ztUJvIxnlLiC9GzDkQBDM',
  authDomain: 'heroyc-afe1f.firebaseapp.com',
  databaseURL: 'https://heroyc-afe1f.firebaseio.com',
  projectId: 'heroyc-afe1f',
  storageBucket: '',
  messagingSenderId: '93765122513'
}

const app = Firebase.initializeApp(config)
const firebase = app.database()

export default firebase
