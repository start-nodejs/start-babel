// async-function
function p() {
  return Promise.resolve('resolved')
}

async function fn() {
  return await p();
}

fn();