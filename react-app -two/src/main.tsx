import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css'

// creating new instance of queryclient and its configurations 
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry: 3,
      staleTime: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
         <App />
         {/* for development only */}
         <ReactQueryDevtools /> 
    </QueryClientProvider>
  </React.StrictMode>,
)
