export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    rating: {
        rate: number
        count: number
    }
    image: string
}