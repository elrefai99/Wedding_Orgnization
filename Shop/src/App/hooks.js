import { useSelector } from "react-redux"
import {useState, useEffect} from "react"

export function useTotal() {
    const cart = useSelector(state => state.counter.cart)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(0)
        cart.map(e => setTotal(prev => prev + e.price * e.count))
    }, [cart])
    
    return total
}