import {atom, useAtom} from "jotai";

export interface Product {
    title: string;
}

export const ProductFormAtom = atom<Product>({
    title: ''
})

export const allProducts = atom<Product[]>([]);

export default function App() {

    const [prodForm, setProdForm] = useAtom(ProductFormAtom)
    const [allProds, setAllProds] = useAtom(allProducts);

    return(<>
        <OtherComponent />
        <input onChange={event => {
            setProdForm({...prodForm, title: event.target.value})
        }} />
        <button onClick={() => {
            setAllProds([...allProds, {title: prodForm.title}])
        }}>add</button>
    </>)
}

export function OtherComponent() {

    const [prodForm, setProdForm] = useAtom(ProductFormAtom)
    const [prods] = useAtom(allProducts)

    return(
        <>
            {JSON.stringify(prodForm)}

            {JSON.stringify(prods)}
        </>
    )

}
