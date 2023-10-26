function fromObjectToJSON (name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
fromObjectToJSON('George',
 'Jones',
'Brown');