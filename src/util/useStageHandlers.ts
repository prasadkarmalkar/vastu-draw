import { selectTool } from '@/slices/canvasConfigSlice';
import { addShape } from '@/slices/shapesSlice';
import { RootState } from '@/store';
import { allTools, singleShapeType } from '@/types/GlobalTypes';
import { KonvaEventObject, Node, NodeConfig } from 'konva/lib/Node';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const useStageHandlers = () => {

	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	const dispatch = useDispatch();
	const [currentShape, setCurrentShape] = useState<singleShapeType>({
		id: '',
        width: 0,
        height: 0,
        x: 0,
        y: 0,
	});
	const [drawing, setDrawing] = useState(false);

	const handleMouseDown = (
		e: KonvaEventObject<MouseEvent, Node<NodeConfig>>
	) => {
		if (canvasConfig.selectedTool == allTools.Select) return;
		setDrawing(true);
		const currentPosition = e.currentTarget.getRelativePointerPosition();
		setCurrentShape({
			id: '',
			width: 0,
			height: 0,
			x: currentPosition?.x || 0,
			y: currentPosition?.y || 0,
		});
	};
	
	const handleMouseMove = (
		e: KonvaEventObject<MouseEvent, Node<NodeConfig>>
	) => {
		if (canvasConfig.selectedTool == allTools.Select) return;
		if (!drawing) return;
		const currentPosition = e.currentTarget.getRelativePointerPosition();
		const { x, y } = currentPosition
			? { x: currentPosition.x, y: currentPosition.y }
			: { x: 0, y: 0 };
	
		switch (canvasConfig.selectedTool) {
			case allTools.Rectangle:
				setCurrentShape({
					...currentShape,
					width: x - currentShape.x,
					height: y - currentShape.y,
				});
				break;
		}
	};
	
	const handleMouseUp = (
		e: KonvaEventObject<MouseEvent, Node<NodeConfig>>
	) => {
		if (canvasConfig.selectedTool == allTools.Select) return;
	
		switch (canvasConfig.selectedTool) {
			case allTools.Rectangle:
				dispatch(addShape({...currentShape, id: uuidv4()}));
				setCurrentShape({
					id: '',
					width: 0,
					height: 0,
					x: 0,
					y: 0,
				});
				break;
		}
		dispatch(selectTool(allTools.Select));
		setDrawing(false);
	};

	return {handleMouseUp, handleMouseMove, handleMouseDown, currentShape}
}

export default useStageHandlers;