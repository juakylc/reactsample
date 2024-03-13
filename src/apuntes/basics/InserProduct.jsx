import { useMutation } from '@tanstack/react-query';

const insertProd = async (newProduct) => {
    fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                newProduct
            )
        })
        .then(res=>res.json())
        .then(json => {console.log(json)
                        return json})
}


export default function InsertProduct(newProduct) {
    const mutation = useMutation({
        mutationFn: (newProduct) => insertProd(newProduct),
        })

    const onClick = () => mutation.mutate(newProduct)

    if (mutation.isLoading) {
        return "Insertando producto..."
    }

    if (mutation.isError) {
        return <div>{mutation.error.message}</div>
    }

    return <button onClick={() => onClick()}>insert product</button>
}