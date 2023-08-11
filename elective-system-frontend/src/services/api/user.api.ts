// const apiUrl = 'http://localhost:3000/api/authenticate/';

// const data = {
//     "dni": "232114521"
// }

// const fetchOptions = {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(data),
// };

// fetch(apiUrl, fetchOptions)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Error de red - Código: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error', error);
//     });