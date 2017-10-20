const createArr = (count, arr = []) => {
    for (let i = 1; i <= count; i++) arr.push({ value: i, text: i });

    return arr;
};

export default createArr;