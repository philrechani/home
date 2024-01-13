import { PageButton } from "./PageButton"

export const PageBar = () => {

    return (
        <div className="page-bar">
            <PageButton text="journal"/>
            <PageButton text="webapps"/>
            <PageButton text="tutorials"/>
            <PageButton text="resume"/>
        </div>
    )
}