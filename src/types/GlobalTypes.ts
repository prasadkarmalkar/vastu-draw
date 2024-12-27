export type canvasConfigType = {
    zoom: number;
    numberOfRows: number;
    numberOfColumns: number;
    selectedTool: allTools;
    showProctor: boolean;
}

export enum allTools {
    Select = 'Select',
    Rectangle = 'Rectangle',
    Ellipse = 'Ellipse',
    Line = 'Line',
}

export type singleRectType = {
    width: number;
    height: number;
    x: number;
    y: number;
}

export type singleShapeType = {
    id: string;
    width: number;
    height: number;
    x: number;
    y: number;
}