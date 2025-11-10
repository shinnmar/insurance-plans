import { DOCUMENT_TYPES } from '../constants/enums';

export type FormValues = {
    documentType: (typeof DOCUMENT_TYPES)['DNI'] | (typeof DOCUMENT_TYPES)['CE'];
    documentNumber: string;
    phone: string;
    acceptPrivacy: boolean;
    acceptCommunications: boolean;
};