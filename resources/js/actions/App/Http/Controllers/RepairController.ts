import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/repair',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\RepairController::optimize
 * @see app/Http/Controllers/RepairController.php:15
 * @route '/optimize'
 */
export const optimize = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: optimize.url(options),
    method: 'post',
})

optimize.definition = {
    methods: ["post"],
    url: '/optimize',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\RepairController::optimize
 * @see app/Http/Controllers/RepairController.php:15
 * @route '/optimize'
 */
optimize.url = (options?: RouteQueryOptions) => {
    return optimize.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\RepairController::optimize
 * @see app/Http/Controllers/RepairController.php:15
 * @route '/optimize'
 */
optimize.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: optimize.url(options),
    method: 'post',
})
const RepairController = { index, optimize }

export default RepairController