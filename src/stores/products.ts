import { writable } from "svelte/store"
import { Product } from "../components/Product.svelte"

export interface ProductProps {
	name: string
	description: string
	price: number
}

const initialProducts = [
	new Product("Smart Fortwo", "Small car", 12000),
	new Product("IPhone 13", "Smartphone", 1000)
]

const products = writable<Product[]>(initialProducts)

export default products
