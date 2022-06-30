import { useEffect, useState } from 'react'
import './App.css'
function App() {

  const [selection, setSelection] = useState("reactjs")


  const url = "https://www.reddit.com/r/"
  return <>
    <form>
      <select name="selection"
        value={selection}
        onChange={((event) => setSelection(event.target.value))}>
        <option value="reactjs"> reactjs</option>
        <option value="frontend">frontend</option>
      </select>
    </form>
    <Posts api={url + selection}></Posts>

  </>
}

export default App






const Posts = ({ api }) => {
  const [posts, setPosts] = useState(null);
  const [recivedAt, setRecivedAt] = useState('')
  const [status, setStatus] = useState('idle')
  const [shouldRefresh, setShouldRefresh] = useState(false)
  const fetchPost = () => {

    fetch(api + ".json")
      .then(res => res.json())
      .then(res => {
        setPosts(res)
        setRecivedAt(Date.now())
        setStatus('idle')

      })

  }
  useEffect(() => {
    setStatus('fetching')
    fetchPost();
  }, [api, shouldRefresh])
  return (
    <>
      <p>
        {recivedAt && (
          <span>
            {`Zaktualizowano o godzinie: ${new Date(recivedAt).toLocaleTimeString()}`}
          </span>
        )}
        <button
          disabled={status === 'fetching'}
          onClick={() => setShouldRefresh(!shouldRefresh)}
        >
          Odśwież
        </button>
      </p>
      {status === 'fetching' && <p>Ładuje dane</p>}
      <ul>
        <span style={{ opacity: status === 'fetching' ? 0.5 : 1 }}>{posts !== null ? posts.data.children.map((posts) => <li key={posts.data.id}> {posts.data.title} </li>) : null}</span>

      </ul>
    </>
  )
}