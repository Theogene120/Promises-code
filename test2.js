// 'https://api.github.com/users/iliakan'

//https://jsonplaceholder.typicode.com/users

const nums = [1, 2, 3, 4, 5];

const promise = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  });
};

// function display(numbers) {
//   numbers.forEach(async (num) => {
//     const dis = await promise(num);
//     console.log(dis);
//   });
// }

// display(nums);

async function display(nums) {
    for (const num of nums) {
        const dis = await promise(num)
        console.log(dis)
    }
}

display(nums);