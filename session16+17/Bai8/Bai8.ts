type DeepMerge<T, U> = T extends object ? (U extends object ? {
    [K in keyof (T & U)]: K extends keyof U
        ? K extends keyof T
            ? DeepMerge<T[K], U[K]>
            : U[K]
        : K extends keyof T
            ? T[K]
            : never;
} : U) : T;

function mergeObjects<T, U>(obj1: T, obj2: U): DeepMerge<T, U> {
    const merged: any = {};

    for (const key in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, key)) {
            merged[key] = obj1[key];
        }
    }

    for (const key in obj2) {
        if (Object.prototype.hasOwnProperty.call(obj2, key)) {
            if (merged[key] && typeof merged[key] === 'object' && typeof obj2[key] === 'object') {
                merged[key] = mergeObjects(merged[key], obj2[key]);
            } else {
                merged[key] = obj2[key];
            }
        }
    }

    return merged;
}

// Sử dụng hàm
const object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

const object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10,
};

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject);
