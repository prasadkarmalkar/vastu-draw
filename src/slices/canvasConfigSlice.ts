import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { allTools, canvasConfigType } from '../types/GlobalTypes';

const initialState: canvasConfigType = {
	zoom: 100,
	numberOfRows: 10,
	numberOfColumns: 10,
	selectedTool: allTools.Rectangle,
	showProctor: false,
}
export const canvasConfigSlice = createSlice({
	name: 'canvasConfig',
	initialState,
	reducers: {
		increaseZoom: (state) => {
			state.zoom += 10;
		},
		decreaseZoom: (state) => {
			state.zoom -= 10;
		},
		changeRows: (state, action: PayloadAction<number>) => {
			state.numberOfRows = action.payload;
		},
		changeColumns: (state, action: PayloadAction<number>) => {
			state.numberOfColumns = action.payload;
		},
		selectTool: (state, action: PayloadAction<allTools>) => {
			state.selectedTool = action.payload;
		},
		toggleProctor: (state) => {
			state.showProctor =!state.showProctor;
		}
	}
})

export const { increaseZoom, decreaseZoom, changeRows, changeColumns, selectTool, toggleProctor } = canvasConfigSlice.actions;
export default canvasConfigSlice.reducer;