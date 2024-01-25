function colorize() {
    let rows = document.querySelectorAll("table tr"); 
    let index = 0;

    for (let row of rows) {  // Getting each table row in the table
        index ++;

        if(index % 2 == 0) {  // Cheking if it's even and colorize in color "teal"
            row.style.background = "teal";
        }
    }
}