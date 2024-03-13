import { useParams } from "react-router-dom"

export default function Contador4() {
    const {n} = useParams()
    return (
        <p>{n}</p>
    )
}