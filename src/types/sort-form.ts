import { ResultsPerPageEnum, SortByEnum } from "enums";
import { TrainFormState } from "./train-form";

export type SortFormState = TrainFormState & Partial<{
    sort: SortByEnum,
    limit: ResultsPerPageEnum
}>;
