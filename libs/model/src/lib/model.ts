import { Button } from './Button';
import { Hero } from './Hero';
import { Page } from './Page';
import { Stats } from './Stats';

const model = { Button, Hero, Page, Stats };

export type ContentModel = typeof model;
export type ModelName = keyof ContentModel;

export default model;
