function phoneBook (arr) {
    let phoneBook = {};

    for (let items of arr) {
        let [name, phoneNumber] = items.split(' ');
        phoneBook[name] = phoneNumber
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])