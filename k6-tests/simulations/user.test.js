import { sleep, group } from 'k6';
import Login from '../request/login.request.js';
import User from '../request/user.request.js';

const data = JSON.parse(open('../data/usuarios.json'));

export const options = {
  stages: [
    { duration: '10s', target:10 },
    { duration: '5s', target:50 },
    { duration: '10s', target:10 },
    { duration: '5s', target:0 },
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }
}

// The default exported function is gonna be picked up by k6 as the entry point for the test script. It will be executed repeatedly in "iterations" for the whole duration of the test.
export default function () {

  let login = new Login()
  let user = new User()

  group('login and get token', () => {
    login.access(data.usuarioOK.user, data.usuarioOK.pass)
  })

  group('list users', () => {
    user.list(login.getToken())
  })

}