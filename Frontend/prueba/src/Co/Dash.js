import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Pages/Inicio.jsx';

const Dash = () => {
    return (
        <BrowserRouter>
            <Sidebar>
            <Routes>
                <Route path="/" element={<Sidebar />} />
            </Routes>
            </Sidebar>
        </BrowserRouter>
    );
};

export default Dash;