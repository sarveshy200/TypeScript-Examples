interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            {isSpecial && <strong>Special Offer!</strong>}
        </article>
    )
}