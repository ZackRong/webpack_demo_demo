const add = (a, b) => a + b;

const promise = Promise.resolve(1);

async function testAsync() {
  const a = await Promise.resolve(1);
  console.log(a);
}
