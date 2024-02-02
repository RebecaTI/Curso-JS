function printName (options) {
    const defaults = {
        firstName: 'Steve',
        lastName: 'Bottle'
    }

    options = Object.assign(defaults, options);
    

    console.log(`${options.firstName} ${options.lastName}`)
}

printName({
    firstName: 'Dom',
});

