function getUser() {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
        fetch('src/data.json').then(response => response.json()).then(data => {
            let person = [];
            data.forEach(item => {
                let user = {'id': item.id, 'name': item.name, 'email': item.email, 'devise': item.devise};
                person.push(user);
            });
            localStorage.setItem('users', JSON.stringify(person));
        })
    }

}