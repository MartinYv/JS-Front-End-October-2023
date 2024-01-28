function extract(content) {

    let text = document.getElementById(content).textContent;
    let pattern = /\(([^)]+)\)/g;

    let result = [];

    let matches = text.matchAll(pattern);

    for (const match of matches) {
        result.push(match[1]);
    }

    return result.join("; ");
}