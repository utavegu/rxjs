import { race, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, single, switchMap } from 'rxjs/operators';

const stream1 = ajax.getJSON('https://jsonplaceholder.typicode.com/users');
const stream2 = ajax.getJSON('https://jsonplaceholder.typicode.com/todos/1');
const stream3 = ajax.getJSON('https://api.github.com/search/repositories?q=sort=created&order=asc');

const streams = race(stream1, stream2, stream3);

streams
  .pipe(
    // filter(userResponse => userResponse.id > 3),
    map(userResponse => console.log('USERS: ', userResponse)),
    // first(),
    // last,
    single(),
    switchMap(x => of(1, 2, 3))
  )
  .subscribe(console.log)
