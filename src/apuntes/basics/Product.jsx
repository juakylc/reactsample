import {useQuery} from '@tanstack/react-query'

export default function Product({id}) {
    const {isPending, error, data, refetch } = useQuery({
      queryKey: ['repoData'],
      queryFn: () =>
        fetch('https://fakestoreapi.com/products/'+id).then(
          (res) => res.json(),
        ),
    })
  
    if (isPending) return 'Loading...'
  
    if (error) return 'An error has occurred: ' + error.message

    return (
      <div>
        <h1>{data.title}</h1>
        <img src={data.image}></img>
        <button onClick={() => refetch()}>Refrescar</button>
      </div>
    )
  }