export function randomString(length){
    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

    let randomString = '';

    for(let t = 0; t < length; t++){
        const randIndex = Math.floor(Math.random() * values.length);

        randomString += values[randIndex];
    }

    return randomString;
}