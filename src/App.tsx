
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Post } from './components/Post/Post'
import { posts } from './PostsData'

import './global.css'

import styles from './App.module.css'

interface Contents {
  type: "link" | "paragraph";
  content: string;
}

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( (post) => {
            return (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              contents={post.content as Contents[]}
            />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
