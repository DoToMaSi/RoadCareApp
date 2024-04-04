import { MaskitoElementPredicate } from '@maskito/core';

export const maskPredicate: MaskitoElementPredicate = async (el) => (el as HTMLIonInputElement).getInputElement();
