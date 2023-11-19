import { Button } from './Button';
import { Config } from './Config';
import { Hero } from './Hero';
import { MetaTag } from './MetaTag';
import { Page } from './Page';
import { Stats } from './Stats';

const model = { Button, Config, Hero, MetaTag, Page, Stats };

export type ContentModel = typeof model;
export type ModelName = keyof ContentModel;

export default model;
