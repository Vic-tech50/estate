import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\RepairController::index
 * @see app/Http/Controllers/RepairController.php:10
 * @route '/repair'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
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

    /**
* @see \App\Http\Controllers\RepairController::optimize
 * @see app/Http/Controllers/RepairController.php:15
 * @route '/optimize'
 */
    const optimizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: optimize.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\RepairController::optimize
 * @see app/Http/Controllers/RepairController.php:15
 * @route '/optimize'
 */
        optimizeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: optimize.url(options),
            method: 'post',
        })
    
    optimize.form = optimizeForm
const RepairController = { index, optimize }

export default RepairController