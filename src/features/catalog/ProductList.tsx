import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCart from "./ProductCart";

interface Props {
    products: Product[];
}

export default function ProductList({ products }: Props) {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCart key={product.id} product={product} />
                </Grid>

            ))}
        </Grid>
    )
}