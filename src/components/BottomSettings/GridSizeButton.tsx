import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { changeColumns, changeRows } from '../../slices/canvasConfigSlice';

const GridSizeButton = () => {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	const dispatch = useDispatch();
	const handleGridSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		if (id === 'numberOfRows') {
			dispatch(changeRows(parseInt(value, 10) | 0));
		} else if (id === 'numberOfColumns') {
			dispatch(changeColumns(parseInt(value, 10) | 0));
		}
	}
  	return (
		<div className='bg-zinc-800 rounded-lg flex justify-center items-center'>
			<input value={canvasConfig.numberOfRows} onChange={handleGridSizeChange} className='bg-transparent w-12 text-center' type="number" min={1} name="numberOfRows" id="numberOfRows" />
			<span>✕</span>
			<input value={canvasConfig.numberOfColumns} onChange={handleGridSizeChange} className='bg-transparent w-12 text-center' type="number" min={1} name="numberOfColumns" id="numberOfColumns" />
		</div>
  	)
}

export default GridSizeButton;