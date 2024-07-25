import {atom, useAtom} from "jotai";

export interface Product {
    title: string;
}

export const ProductFormAtom = atom<Product>({
    title: ''
})


export default function App() {

    const [prodForm, setProdForm] = useAtom(ProductFormAtom)

    return(<>
        <OtherComponent />
        <input onChange={event => {
            setProdForm({...prodForm, title: event.target.value})
        }} />

    </>)

}

export function OtherComponent() {

    const [prodForm, setProdForm] = useAtom(ProductFormAtom)

    return(
        <>
            {JSON.stringify(prodForm)}

        </>
    )

}
