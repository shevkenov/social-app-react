import React from "react";
import "./styles/main.scss";
import { QueryClientProvider, QueryClient} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const client = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if(error.status === 404) return false;
        else if(failureCount < 2) return true;
        else return false
      }
    }
  }
})

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
