import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:11
 * @route '/search'
 */
export const search = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})

search.definition = {
    methods: ["get","head"],
    url: '/search',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:11
 * @route '/search'
 */
search.url = (options?: RouteQueryOptions) => {
    return search.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:11
 * @route '/search'
 */
search.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: search.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SearchController::search
 * @see app/Http/Controllers/SearchController.php:11
 * @route '/search'
 */
search.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: search.url(options),
    method: 'head',
})
const SearchController = { search }

export default SearchController