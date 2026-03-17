class DataHandler {
  constructor() {
    this.posts = new Map();
  }

  async fetchPosts() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const json = await response.json()
      json.forEach(post =>
        this.posts.set(post.id, post)
      );
    } catch (error) {
      console.error("Failed to retrieve posts:", error)
    }
  }

  listPosts() {
    return Array.from(this.posts.values())
      .sort((a, b) => a.title.localeCompare(b.title));
  }

  getPost(id) {
    return this.posts.get(id);
  }

  clearPosts() {
    this.posts.clear();
  }
}

const dataHandler = new DataHandler()
dataHandler.fetchPosts().then(() => {
  console.log(dataHandler.listPosts())
  console.log(dataHandler.getPost(13))
  dataHandler.clearPosts()
  console.log(dataHandler.listPosts())
})
