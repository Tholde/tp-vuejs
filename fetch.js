// async function getUser() {
//     let response = await fetch('data.json');
//     let data = await response.json();
//     let dataFilter = [];
//     data.forEach(item => {
//         dataFilter.push({'id': item.id, 'name': item.name, 'email': item.email, 'devise': item.devise});
//     })
//     console.log(data);
//     localStorage.setItem('user', JSON.stringify(dataFilter));
//
// }

function getUser() {
    fetch('src/data.json').then(response => response.json()).then(data => {
        let person = [];
        data.forEach(item => {
            let user = {'id': item.id, 'name': item.name, 'email': item.email, 'devise': item.devise};
            person.push(user);
        });
        localStorage.setItem('users', JSON.stringify(person));
    })
}