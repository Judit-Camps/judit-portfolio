import NavBar from "../../components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasDots from "../../components/CanvasDots";


export default function CatalanLanding() {
    return (
        <>
            <div className="canvas-div z-0">
                <CanvasDots />
            </div>
            <NavBar className="w-full" />
            <div className="app z-10 absolute top-10 flex justify-center align-middle">
                <header className="app-header">
                    <h1>El Meu Portafoli</h1>
                    <p>Actualment estic treballant en el meu portafoli. Estigueu atents!</p>
                    <div className="links">

                        <p>Em podeu trobar a:</p>
                        <a
                            href="https://www.linkedin.com/in/juditcampsbruch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white bg-opacity-25 hover:bg-white hover:bg-opacity-80  text-black font-bold py-2 px-4 rounded-full m-10"
                        >
                            Linkedin
                        </a>

                        <a href="mailto:campsjudit99@gmail.com"
                            className="bg-white bg-opacity-25 hover:bg-white hover:bg-opacity-80 text-black font-bold py-2 px-4 rounded-full"
                        >
                            Gmail
                        </a>
                    </div>
                </header>
            </div>
        </>
    );
}