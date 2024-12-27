import { Circle, Group, Line, Text } from 'react-konva';
import { KonvaEventObject } from 'konva/lib/Node';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

function Proctor({onShapeClick}: {onShapeClick: (e: KonvaEventObject<MouseEvent>) => void}) {
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);
	// Generate lines at specific angles
	const radius =
		canvasConfig.numberOfColumns > canvasConfig.numberOfRows
			? (canvasConfig.numberOfColumns * 50) / 2
			: (canvasConfig.numberOfRows * 50) / 2; // Radius of the circle
	const textRadius = radius + 20;
	const centerX = (canvasConfig.numberOfColumns * 50) / 2; // Center X-coordinate
	const centerY = (canvasConfig.numberOfRows * 50) / 2; // Center Y-coordinate
	const step = 20; // Angle step in degrees
	// Generate lines that start at the center and extend to the edge of the circle
	const lines = Array.from({ length: 360 / step }, (_, i) => {
		const angle = i * step; // Current angle in degrees
		const angleInRadians = (angle * Math.PI) / 180; // Convert to radians

		const startX = centerX; // Lines start at the center of the circle
		const startY = centerY;
		const endX = centerX + radius * Math.cos(angleInRadians); // Lines end at the circle's edge
		const endY = centerY + radius * Math.sin(angleInRadians);
		const textX = centerX + textRadius * Math.cos(angleInRadians);
		const textY = centerY + textRadius * Math.sin(angleInRadians);


		return { startX, startY, endX, endY, angle, textX, textY };
	});
	return (
		<Group onClick={onShapeClick}>
			{ canvasConfig.showProctor ?  <><Circle
				strokeWidth={0.5}
				x={(canvasConfig.numberOfColumns * 50) / 2}
				y={(canvasConfig.numberOfRows * 50) / 2}
				radius={
					canvasConfig.numberOfColumns > canvasConfig.numberOfRows
						? (canvasConfig.numberOfColumns * 50) / 2
						: (canvasConfig.numberOfRows * 50) / 2
				}
				stroke={'red'}
				strokeScaleEnabled= {false}

			/>
			{/* Draw the lines */}
			{lines.map((line, index) => (
				<>
				<Line
					key={index}
					points={[line.startX, line.startY, line.endX, line.endY]}
					stroke='red'
					strokeWidth={0.5}
					strokeScaleEnabled= {false}
				/>
				<Text align='center' x={line.textX} y={line.textY} text={line.angle.toString()} fontSize={12} fill={'red'} />
				</>
			))}</> : ''}
			
		</Group>
	);
}

export default Proctor;
