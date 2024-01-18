import { PageButton } from "./PageButton"

export const PageBar = () => {

    return (
        <div className="page-bar">
            <PageButton text="journal"/>
            <PageButton text="webapps"/>
            <PageButton text="tutorials"/>
            <PageButton text="resume"/>
            <PageButton text="music" outlink="https://philrechani.github.io/music"/>
        </div>
    )
}