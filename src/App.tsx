import { Layer, Rect, Stage, Transformer } from 'react-konva';
import './App.css';
import GridLayout from './components/GridLayout';
import { useRef } from 'react';
import { allTools } from './types/GlobalTypes';
import BottomSettings from './components/BottomSettings/BottomSettings';
import SideSettings from './components/SideSettings/SideSettings';
import { KonvaEventObject } from 'konva/lib/Node';
import Proctor from './components/Proctor';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import AllShapes from './components/AllShapes/AllShapes';
import useStageHandlers from './util/useStageHandlers';

function App() {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);

	const { handleMouseUp, handleMouseMove, handleMouseDown, currentShape } =
		useStageHandlers();

	const globalStage = useRef(null);
	const globalTransformer = useRef(null);

	const onShapeClick = (e: KonvaEventObject<MouseEvent>) => {
		if (canvasConfig.selectedTool !== allTools.Select) return;
		const currentShape = e.currentTarget;
		globalTransformer?.current?.node(currentShape);
	};

	const isDraggable =
		canvasConfig.selectedTool === allTools.Select ? true : false;
	return (
		<main className='min-h-screen w-full m-auto'>
			<Stage
				className=''
				id='main-container'
				height={window.innerHeight}
				width={window.innerWidth}
				offsetX={-window.innerWidth / 3.5}
				offsetY={-window.innerHeight / 8}
				scale={{
					x: canvasConfig.zoom / 100,
					y: canvasConfig.zoom / 100,
				}}
				draggable={isDraggable}
				ref={globalStage}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
			>
				<Layer>
					{/* Proctor */}
					<Proctor onShapeClick={onShapeClick} />
					<GridLayout />
					<Transformer
						ref={globalTransformer}
						centeredScaling
						ignoreStroke
					/>
				</Layer>

				{/* All the shapes */}
				<AllShapes onShapeClick={onShapeClick} />

				{/* Current Drawing Shape */}
				<Layer>
					<Rect
						key={currentShape.id}
						id={currentShape.id}
						x={currentShape.x}
						y={currentShape.y}
						height={currentShape.height}
						width={currentShape.width}
						stroke={'white'}
						draggable={isDraggable}
						strokeScaleEnabled={false}
					/>
				</Layer>

			</Stage>
			<SideSettings />
			<BottomSettings />
		</main>
	);
}

export default App;
