function messageManager(arr) {
    let msgCapacity = Number(arr.shift());

    let users = {};
    let usersCount = 0;

    let command = arr.shift();

    while (command !== 'Statistics') {
        let [action, userName, token1, token2] = command.split('=');

        switch (action) {
            case 'Add':
                let sent = Number(token1);
                let received = Number(token2);

                if (!users.hasOwnProperty(userName)) {
                    users[userName] = {
                        sent: sent,
                        received: received
                    }
                    usersCount++;
                } 
                break;

                case 'Message':
                    let receiver = token1;
    
                    if (users.hasOwnProperty(userName) ) {
                        if (users[userName]['sent'] + users[userName]['received'] + 1 < msgCapacity) {
                            users[userName]['sent'] += 1;
                        } else {
                            console.log(`${userName} reached the capacity!`);
                            usersCount -= 1;
                            delete users[userName];
                        }
                    }
                    if (users.hasOwnProperty(receiver) ) {
                        if (users[receiver]['received'] + users[receiver]['sent'] + 1 < msgCapacity ) {
                            users[receiver]['received'] += 1;
                        } else {
                            console.log(`${receiver} reached the capacity!`);
                            usersCount -= 1;
                            delete users[receiver];
                        }
                    }
                    break;

            case 'Empty':
                if (userName === 'All') {
                    users = {};
                    usersCount = 0;
                } else if (users.hasOwnProperty(userName)) {
                    delete users[userName];
                    usersCount -= 1;
                }
                break;
        }

        command = arr.shift();
    }

    console.log(`Users count: ${usersCount}`);

    for (let user in users) {
        let sum = users[user]['received'] + users[user]['sent'];
        console.log(`${user} - ${sum}`);
    }
}

// messageManager(["10",
// "Add=Berg=9=0",
// "Add=Kevin=0=0",
// "Message=Berg=Kevin",
// "Add=Mark=5=4",
// "Statistics"]);

// messageManager(["20",
// "Add=Mark=3=9",
// "Add=Berry=5=5",
// "Add=Clark=4=0",
// "Empty=Berry",
// "Add=Blake=9=3",
// "Add=Michael=3=9",
// "Add=Amy=9=9",
// "Message=Blake=Amy",
// "Message=Michael=Amy",
// "Statistics"]);

messageManager(["12",
"Add=Bonnie=3=5",
"Add=Johny=4=4",
"Empty=All",
"Add=Bonnie=3=3",
"Statistics"]);


