import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store/store';
import { getStaffPersonalById, createStaffPersonal, updateStaffPersonal, deleteStaffPersonal } from '../redux/reducers/staffPersonal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const StaffPersonal: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const staffPersonal = useSelector((state: RootState) => state.staffPersonal.staffPersonal);
    const loading = useSelector((state: RootState) => state.staffPersonal.loading);
    const error = useSelector((state: RootState) => state.staffPersonal.error);

    // React.useEffect(() => {
    //     dispatch(getStaffPersonalById('some-id'));
    // }, [dispatch]);

    // Placeholder UI, you can expand this based on your requirements
    return (
        <Box>
            {loading && <Typography>Loading...</Typography>}
            {error && <Typography>Error: {error}</Typography>}
            {staffPersonal && (
                <Box>
                    <Typography>Name: {staffPersonal.name}</Typography>
                    <Typography>Email: {staffPersonal.email}</Typography>
                    {/* Add more fields as needed */}
                </Box>
            )}
        </Box>
    );
};

export default StaffPersonal;