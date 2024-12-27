import { RootState } from '@/store';
import { allTools } from '@/types/GlobalTypes';
import { KonvaEventObject } from 'konva/lib/Node';
import { Layer, Rect } from 'react-konva';
import { useDispatch, useSelector } from 'react-redux';

const AllShapes = ({onShapeClick}: {onShapeClick: (e: KonvaEventObject<MouseEvent>)=> void}) => {
	const shapes = useSelector((state: RootState) => state.shapes);
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	const dispatch = useDispatch();
	const isDraggable =
		canvasConfig.selectedTool === allTools.Select ? true : false;
	return (
		<Layer>
			{shapes.map((singleShape, index) => (
				<Rect
				    key={singleShape.id}
					id={singleShape.id}
					x={singleShape.x}
					y={singleShape.y}
					height={singleShape.height}
					width={singleShape.width}
					stroke={'white'}
					draggable={isDraggable}
					strokeScaleEnabled={false}
					onClick={onShapeClick}
				/>
			))}
		</Layer>
	);
};

export default AllShapes;
