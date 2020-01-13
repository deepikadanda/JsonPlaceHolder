// console.log('action.js')
// export function startLoadingAlbums(){
//     console.log('startLoadingAlbums')
//     return(dispatch) => {
//         return fetch('https://jsonplaceholder.typicode.com/albums')
//             .then(response => response.json)
//             .then(albumsJson => {
//                 console.log('ACTION.js')
//                 console.log(albumsJson)
//                 dispatch(loadAlbums(albumsJson))
//             })
//     }
// }
// export function loadAlbums(albumsJson){
//     return{
//         type: 'LOAD_ALBUMS',
//         albumsJson
//     }
// }

// export function loadPhotos(photosJson){
//     return{
//         type: 'LOAD_PHOTOS',
//         photosJson
//     }
// }

// export function loadUsers(usersJson){
//     return{
//         type: 'LOAD_USERS',
//         usersJson
//     }
// }