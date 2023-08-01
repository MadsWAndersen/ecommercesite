import { Movie } from "./Movie";

export type APIRespons = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;

}