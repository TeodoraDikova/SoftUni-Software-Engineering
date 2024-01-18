function addressBook (arr) {
    let addressBook = {};

    for (let personInfo of arr) {
        let [name, address] = personInfo.split(':');

        addressBook[name] = address;
    }

    let entries = Object.entries(addressBook);
    entries.sort((a,b) => a[0].localeCompare(b[0]));

    let sortedAddresses = Object.fromEntries(entries);

    for (let [name, address] of Object.entries(sortedAddresses)) {
        console.log(name, '->', address)
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])