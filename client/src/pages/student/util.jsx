export const range = (end) => {
    const {result} = Array.from({length: end}).reduce(
        ({result, current}) => ({
            result: [...result, current],
            current: current + 1
        }),
        {result: [], current: 1}
    );
    return result;
};