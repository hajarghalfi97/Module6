import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { ErrorBoundary } from 'react-error-boundary'

<ErrorBoundary FallbackComponent={ErrorMessage}>
<App /> {/* can wrap App or other high-level parent components */}
</ErrorBoundary>