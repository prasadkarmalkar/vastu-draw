import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { singleShapeType } from '../types/GlobalTypes';

const initialState: singleShapeType[] = [];
export const shapesSlice = createSlice({
	name: 'shapes',
	initialState,
	reducers: {
		addShape: (state, action: PayloadAction<singleShapeType>) => {
			state.push(action.payload);
		},
		removeShape: (state, action: PayloadAction<string>) => {
			state.filter((s)=> s.id !== action.payload);
		},
	}
})

export const { addShape, removeShape } = shapesSlice.actions;
export default shapesSlice.reducer;