import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/agent/verify',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VerifyController::index
 * @see app/Http/Controllers/VerifyController.php:15
 * @route '/agent/verify'
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
* @see \App\Http\Controllers\VerifyController::store
 * @see app/Http/Controllers/VerifyController.php:20
 * @route '/verify'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/verify',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VerifyController::store
 * @see app/Http/Controllers/VerifyController.php:20
 * @route '/verify'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VerifyController::store
 * @see app/Http/Controllers/VerifyController.php:20
 * @route '/verify'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VerifyController::store
 * @see app/Http/Controllers/VerifyController.php:20
 * @route '/verify'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VerifyController::store
 * @see app/Http/Controllers/VerifyController.php:20
 * @route '/verify'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const VerifyController = { index, store }

export default VerifyController