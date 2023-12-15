import { BrowserRouter, useSearchParams } from "react-router-dom";

export default function SearchDemo() {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSubmit(event) {
        setSearchParams(event.target);
        alert(searchParams);
    }

    return (
        <div>
            <BrowserRouter>
                <h2>Search Params</h2>
                <form onSubmit={handleSubmit}>
                    <dl>
                        <dt>UserName</dt>
                        <dd><input name="UserName" type="text" /></dd>

                        <dt>Age</dt>
                        <dd><input name="Age" type="number" /></dd>
                    </dl>
                    <button>Submit</button>
                </form>
            </BrowserRouter>
        </div>
    );
}
