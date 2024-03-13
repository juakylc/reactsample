import './App.css'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Product from './apuntes/basics/Product'
import InsertProduct from './apuntes/basics/InserProduct'

const queryClient = new QueryClient()

const newProduct = {  title: 'test product', 
                      price: 13.5,
                      description: 'lorem ipsum set',
                      image: 'https://i.pravatar.cc',
                      category: 'electronic'
                    }

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InsertProduct newProduct={newProduct}></InsertProduct>
      </QueryClientProvider>
    </>
    
  )
}

export default App
