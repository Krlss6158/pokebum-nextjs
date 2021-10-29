import Header from "../components/Header";

const Layouts = ({ children }) => {
    return (
        <>
            <Header />
            <main className='Layout_main'>
                {children}
            </main>
        </>
    );
}

export default Layouts;