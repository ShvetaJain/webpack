const es5 = function() {
    const test1 = () => {
            const test = 'jain',
                age = 80;
            return `shveta ${test} ${age}`;
        },

        objectTest = () => {
            const url = 'test/test.html',
                object = {
                    url,
                };
        },

        destructure = () => {
            const object = {
                    name: 'Vishal',
                    age: 24
                },
                {
                    name,
                    age
                } = object;
        };
};
