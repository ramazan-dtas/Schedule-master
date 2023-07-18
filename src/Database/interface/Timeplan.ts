import { Fag } from './Fag';
import { Tidspunkt } from './Tidspunkt';
import { Klasse } from './Klasse';

export interface Timeplan{
    Timeplan_ID: number;
    Fag_ID: Fag;
    Tidspunkt_ID: Tidspunkt;
    Date: Date;
    Klasse_ID: Klasse;
}