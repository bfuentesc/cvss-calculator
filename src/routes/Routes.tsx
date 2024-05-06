import { Routes, Route } from 'react-router-dom';
import FullCVSSCalculator from '../pages/FullCVSSCalculator';
import QuickCVSSCalculator from '../pages/QuickCVSSCalculator';
import CVSSVectorInput from '../pages/CVSSVectorInput';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<FullCVSSCalculator />} />
            <Route path="/full" element={<FullCVSSCalculator />} />
            <Route path="/quick" element={<QuickCVSSCalculator />} />
            <Route path="/vector-input" element={<CVSSVectorInput />} />
            <Route path="*" element={<QuickCVSSCalculator />} />
        </Routes>
    );
};

export default AppRoutes;

