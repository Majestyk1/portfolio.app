import Layout from './components/Layout'
import Home from './pages/Home'
import CursorSpotlight from './components/CursorSpotlight'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <ThemeProvider>
    <CursorSpotlight />
    <Layout>
      <Home />
    </Layout>
    </ThemeProvider>
  )
}

export default App
