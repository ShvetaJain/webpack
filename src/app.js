const es5 = function () {
  function test1() {
    const test = 'jain',
      age = 80;
    return `shveta ${test} ${age}`;
  }

  function objectTest() {
    const url = 'test/test.html',
      object = {
        url,
      };
  }

  function destructure() {
    const object = { name: 'Vishal', age: 24 },
      { name, age } = object;
  }
};
