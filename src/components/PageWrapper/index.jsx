import Header from "../Header";

export default function PageWrapper({children}){
    return (
        <div className="w-full min-h-screen h-full flex flex-col">
            <Header />
            <div className="w-full h-full">
                {children}
            </div>
        </div>
    )
}