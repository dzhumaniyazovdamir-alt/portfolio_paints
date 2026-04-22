import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
