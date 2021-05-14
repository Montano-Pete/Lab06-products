export function findById(someArray, ID) {
    for (let item of someArray) {
        if (ID === item.id) {
            return item;
        }
    }

    return null;
};