import { ClickableArea } from 'types';
import { OriginalImageSize } from 'enums';

export const convertToPercentage = (areas: ClickableArea[]): ClickableArea[] =>
    areas.map(area => ({
        ...area,
        x: (area.x / OriginalImageSize.WIDTH) * 100,
        y: (area.y / OriginalImageSize.HEIGHT) * 100,
        width: (area.width / OriginalImageSize.WIDTH) * 100,
        height: (area.height / OriginalImageSize.HEIGHT) * 100,
    }));
