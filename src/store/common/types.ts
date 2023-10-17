export type CommonSliceState = {
    modal: ModalPropsState;
};

export type ModalPropsState = {
    isVisible: boolean;
    content: string;
    type: 'error' | 'info';
};
