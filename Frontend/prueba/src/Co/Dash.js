import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './Pages/Inicio.jsx';

const Dash = () => {
    return (
        <BrowserRouter>
            <Sidebar>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
            </Sidebar>
        </BrowserRouter>
    );
};

export default Dash;