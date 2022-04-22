var sleep = (delay) => {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

export {sleep};