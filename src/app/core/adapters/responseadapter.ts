export interface ResponseAdapter<T> {
    adapt(item: any): T;
}