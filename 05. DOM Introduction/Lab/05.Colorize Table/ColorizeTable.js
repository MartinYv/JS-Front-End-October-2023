function colorize() {

    let infoRow = document.querySelectorAll('table tr');

    let index = 0;

    for (const row of infoRow) {

        index++;

        if (index % 2 == 0) {
            row.style.background = "teal";
        }
    }
 }