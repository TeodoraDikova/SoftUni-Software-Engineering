palindrome = num => console.log(num.map(x => String(x) == String(x).split('').reverse().join('')).join('\n'));

palindrome([123,323,421,121]);