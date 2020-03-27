// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpointGet: 'http://jsonplaceholder.typicode.com/posts?userId=1',
  apiEndpointPost: 'http://jsonplaceholder.typicode.com/posts',
  apiEndpointPut: 'https://jsonplaceholder.typicode.com/posts/1',
  apiEndpointHeaderGet: 'http://jsonplaceholder.typicode.com/comments?postId=1'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
