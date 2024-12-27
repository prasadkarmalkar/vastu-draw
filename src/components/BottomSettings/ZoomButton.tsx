import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { decreaseZoom, increaseZoom } from '../../slices/canvasConfigSlice';

const ZoomButton = () => {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	const dispatch = useDispatch();
	const hanldeIncreaseZoom = () => {
		dispatch(increaseZoom());
	};
	const handleDecreaseZoom = () => {
		dispatch(decreaseZoom());
	};

	return (
		<div className='bg-zinc-800 rounded-lg flex justify-center items-center'>
			<button
				disabled={canvasConfig.zoom <= 50 ? true : false}
				onClick={handleDecreaseZoom}
				className='px-3 py-2 text-center hover:bg-zinc-700 rounded-l-lg cursor-pointer'
			>
				-
			</button>
			<input
				value={`${canvasConfig.zoom}%`}
				type='text'
				disabled
				name='zoom'
				id='zoom'
				className='bg-transparent w-14 px-1 text-center text-sm'
			/>
			<button
				disabled={canvasConfig.zoom >= 200 ? true : false}
				onClick={hanldeIncreaseZoom}
				className='px-3 py-2 text-center hover:bg-zinc-700 rounded-r-lg cursor-pointer'
			>
				+
			</button>
		</div>
	);
};

export default ZoomButton;
