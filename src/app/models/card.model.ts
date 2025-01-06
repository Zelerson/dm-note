export interface CardModel {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly x: number;
    readonly y: number;
    readonly isVisible: boolean;
    readonly isEdit: boolean;
}