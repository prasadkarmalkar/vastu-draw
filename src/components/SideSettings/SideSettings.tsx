import { allTools } from '../../types/GlobalTypes';
import { useDispatch, useSelector } from 'react-redux';
import { selectTool } from '../../slices/canvasConfigSlice';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { FaMousePointer, FaRegSquare, FaRegCircle } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { RootState } from '@/store';
const SideSettings = () => {
	const dispatch = useDispatch();
	const canvasConfig = useSelector((state: RootState) => state.canvasConfig);

	const handleSelectTool = (tool: allTools) => {
		dispatch(selectTool(tool));
	};

	const AllTools = Object.values(allTools).map((tool) => {
		switch (tool) {
			case 'Select':
				return {
					component: <FaMousePointer />,
					value: tool,
				};
			case 'Rectangle':
				return {
					component: <FaRegSquare />,
					value: tool,
				};
			case 'Ellipse':
				return {
					component: <FaRegCircle />,
					value: tool,
				};
			default:
				return {
					component: <FiArrowUpRight />,
					value: tool,
				};
		}
	});
	return (
		<div className='absolute left-3 top-5'>
			<ToggleGroup
				type='single'
				variant={'outline'}
				className='flex flex-col'
				value={canvasConfig.selectedTool}
			>
				{AllTools.map((singleTool) => (
					<TooltipProvider delayDuration={500} key={singleTool.value}>
						<Tooltip>
							<TooltipTrigger>
								<ToggleGroupItem
									
									onClick={() =>
										handleSelectTool(singleTool.value)
									}
									value={singleTool.value}
								>
									{singleTool.component}
								</ToggleGroupItem>
							</TooltipTrigger>
							<TooltipContent>
								<p>{singleTool.value}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</ToggleGroup>
		</div>
	);
};

export default SideSettings;
