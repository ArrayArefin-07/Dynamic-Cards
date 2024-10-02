// dummy data

const posts = [
  {
    title: "this is title-1",
    body: "this is body-1",
  },
  {
    title: "this is title-2",
    body: "this is body-2",
  },
  {
    title: "this is title-3",
    body: "this is body-3",
  },
  {
    title: "this is title-4",
    body: "this is body-4",
  },
  {
    title: "this is title-5",
    body: "this is body-5",
  },
  {
    title: "this is title-6",
    body: "this is body-6",
  },
  {
    title: "this is title-7",
    body: "this is body-7",
  },
];

{
  /* <div class="post">
      <h4 class="post-title">post title 1</h4>
      <p class="post-body">post description 1</p>
    </div> */
}

// selection

const postsElement = document.querySelector(".posts");

const loadAllData = () => {
  posts.map((post) => {
    // console.log(post);
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
    <h4 class="post-title">post title 1</h4>
    <p class="post-body">post description 1</p>
    `;
    postsElement.appendChild(postElement)
  });
  
};

loadAllData();
