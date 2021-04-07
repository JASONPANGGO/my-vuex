function get() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4])
        }, 500);
    })
}

exports.get = get