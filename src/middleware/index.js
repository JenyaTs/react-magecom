export const logger = store => next => action => {
    console.log('name');

    next();
}