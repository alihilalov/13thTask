const createDelay = (message, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, delay)
    })
}

createDelay("First messsage", 500)
    .then((message) => {
        console.log(message);
    })
createDelay("Second message", 1000)
    .then((message) => {
        console.log(message);
    })
createDelay("Third message", 1500)
    .then((message) => {
        console.log(message);
    })
// all metodu ile yazilis
const promises = [
    createDelay("First message", 500),
    createDelay("Second message", 1000),
    createDelay("Third message", 1500)
];

Promise.all(promises).then((result) => {
    result.forEach((res) => {
        console.log(res);
    });
});