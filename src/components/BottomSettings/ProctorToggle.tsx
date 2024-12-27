import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleProctor } from '../../slices/canvasConfigSlice';
import { Switch } from '../ui/switch';

const ProctorToggle = () => {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	const dispatch = useDispatch();
	const handleProctorShow = () => {
		dispatch(toggleProctor());
	}
	return (
		<label className='bg-zinc-800 p-2 rounded-lg inline-flex items-center cursor-pointer'>
			<span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 pr-2'>
				Show Proctor
			</span>
			<Switch
                checked={canvasConfig.showProctor}
                onCheckedChange={handleProctorShow}
            />
		</label>
	);
};

export default ProctorToggle;
