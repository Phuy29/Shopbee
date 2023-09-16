import React from 'react'
import { Spinner } from './components/Spinner'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes } from './routes'
import { ThemeProvider } from './components/theme-provider'

const queryClient = new QueryClient()

function App() {
  return (
    <React.Suspense
      fallback={
        <div className='flex items-center justify-center w-screen h-screen'>
          <Spinner size='xl' />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
          {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
          <Router>
            <AppRoutes />
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </React.Suspense>
  )
}

export default App
