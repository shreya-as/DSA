const add = (function () {
  let counter = 0;
  console.log(`i am a shreya ${counter}`);
  return function () {
    console.log(counter, "counter up");
    counter += 1;
    console.log(counter, "counter down");
    return counter;
  };
})();

add();
add();
add();
