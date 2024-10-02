// dummy data

// const posts = [
//   {
//     title: "this is title-1",
//     body: "this is body-1",
//   },
//   {
//     title: "this is title-2",
//     body: "this is body-2",
//   },
//   {
//     title: "this is title-3",
//     body: "this is body-3",
//   },
//   {
//     title: "this is title-4",
//     body: "this is body-4",
//   },
//   {
//     title: "this is title-5",
//     body: "this is body-5",
//   },
//   {
//     title: "this is title-6",
//     body: "this is body-6",
//   },
//   {
//     title: "this is title-7",
//     body: "this is body-7",
//   },
//   {
//     title: "this is title-8",
//     body: "this is body-8",
//   },
//   {
//     title: "this is title-9",
//     body: "this is body-9",
//   },
//   {
//     title: "this is title-10",
//     body: "this is body-10",
//   },
// ];

{
  /* <div class="post">
      <h4 class="post-title">post title 1</h4>
      <p class="post-body">post description 1</p>
    </div> */
}

//fetch data from API
// using axios
// console.log(axios);
//fetch data
const fetchData = async () => {
  const res = await axios("https://jsonplaceholder.typicode.com/posts");
  console.log(res.data);
};

fetchData();

// selection

// show data using array
const postsElement = document.querySelector(".posts");

const loadAllData = () => {
  posts.map((post) => {
    // console.log(post);
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-title">${post.title}</h4>
    <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

// loadAllData();
