import { Group, Line } from 'react-konva'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const GridLayout = () => {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);

  	return (
		<Group>
			{/* Columns */}
			{Array.from({ length: canvasConfig.numberOfColumns + 1 }).map((_, index) => (
          		<Line strokeWidth={0.2} stroke={'white'} key={index} id={index.toString()} points={[index*50,0, index*50, 50 * canvasConfig.numberOfRows]} />
        	))}
			{/* Rows */}
			{Array.from({ length: canvasConfig.numberOfRows + 1 }).map((_, index) => (
          		<Line strokeWidth={0.2} stroke={'white'} key={index} id={index.toString()} points={[0, index*50,50 * canvasConfig.numberOfColumns, index*50]} />
        	))}
		</Group>
  	)
}

export default GridLayout