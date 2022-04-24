export function searchArrByKey(arr: { [key: string]: string; }[], key: string, val: string | number | null) {
    let res = null;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element[key] === val) {
            res = element;
            break;
        }

    }
    return res;
}