import GridSizeButton from './GridSizeButton';
import ProctorToggle from './ProctorToggle';
import ZoomButton from './ZoomButton';

const BottomSettings = () => {
	return (
		<div className='absolute bottom-0 flex gap-4'>
			<ZoomButton />
			<GridSizeButton />
			<ProctorToggle />
		</div>
	);
};

export default BottomSettings;
