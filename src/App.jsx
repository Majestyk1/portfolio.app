import Layout from './components/Layout'
import Home from './pages/Home'
import CursorSpotlight from './components/CursorSpotlight'

function App() {
  return (
    <>
    <CursorSpotlight />
    <Layout>
      <Home />
    </Layout>
  </>
  )
}

export default App
