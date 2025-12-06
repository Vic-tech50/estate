import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\FaqController::index
 * @see app/Http/Controllers/FaqController.php:15
 * @route '/faq'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/faq',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::index
 * @see app/Http/Controllers/FaqController.php:15
 * @route '/faq'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::index
 * @see app/Http/Controllers/FaqController.php:15
 * @route '/faq'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqController::index
 * @see app/Http/Controllers/FaqController.php:15
 * @route '/faq'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaqController::create
 * @see app/Http/Controllers/FaqController.php:24
 * @route '/faq/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/faq/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::create
 * @see app/Http/Controllers/FaqController.php:24
 * @route '/faq/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::create
 * @see app/Http/Controllers/FaqController.php:24
 * @route '/faq/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqController::create
 * @see app/Http/Controllers/FaqController.php:24
 * @route '/faq/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaqController::store
 * @see app/Http/Controllers/FaqController.php:32
 * @route '/faq'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/faq',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\FaqController::store
 * @see app/Http/Controllers/FaqController.php:32
 * @route '/faq'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::store
 * @see app/Http/Controllers/FaqController.php:32
 * @route '/faq'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\FaqController::show
 * @see app/Http/Controllers/FaqController.php:49
 * @route '/faq/{faq}'
 */
export const show = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/faq/{faq}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::show
 * @see app/Http/Controllers/FaqController.php:49
 * @route '/faq/{faq}'
 */
show.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faq: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faq: typeof args.faq === 'object'
                ? args.faq.id
                : args.faq,
                }

    return show.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::show
 * @see app/Http/Controllers/FaqController.php:49
 * @route '/faq/{faq}'
 */
show.get = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqController::show
 * @see app/Http/Controllers/FaqController.php:49
 * @route '/faq/{faq}'
 */
show.head = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaqController::edit
 * @see app/Http/Controllers/FaqController.php:57
 * @route '/faq/{faq}/edit'
 */
export const edit = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/faq/{faq}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\FaqController::edit
 * @see app/Http/Controllers/FaqController.php:57
 * @route '/faq/{faq}/edit'
 */
edit.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faq: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faq: typeof args.faq === 'object'
                ? args.faq.id
                : args.faq,
                }

    return edit.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::edit
 * @see app/Http/Controllers/FaqController.php:57
 * @route '/faq/{faq}/edit'
 */
edit.get = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\FaqController::edit
 * @see app/Http/Controllers/FaqController.php:57
 * @route '/faq/{faq}/edit'
 */
edit.head = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\FaqController::update
 * @see app/Http/Controllers/FaqController.php:65
 * @route '/faq/{faq}'
 */
export const update = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/faq/{faq}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\FaqController::update
 * @see app/Http/Controllers/FaqController.php:65
 * @route '/faq/{faq}'
 */
update.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faq: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faq: typeof args.faq === 'object'
                ? args.faq.id
                : args.faq,
                }

    return update.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::update
 * @see app/Http/Controllers/FaqController.php:65
 * @route '/faq/{faq}'
 */
update.put = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\FaqController::update
 * @see app/Http/Controllers/FaqController.php:65
 * @route '/faq/{faq}'
 */
update.patch = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\FaqController::destroy
 * @see app/Http/Controllers/FaqController.php:76
 * @route '/faq/{faq}'
 */
export const destroy = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/faq/{faq}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\FaqController::destroy
 * @see app/Http/Controllers/FaqController.php:76
 * @route '/faq/{faq}'
 */
destroy.url = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { faq: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { faq: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    faq: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        faq: typeof args.faq === 'object'
                ? args.faq.id
                : args.faq,
                }

    return destroy.definition.url
            .replace('{faq}', parsedArgs.faq.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\FaqController::destroy
 * @see app/Http/Controllers/FaqController.php:76
 * @route '/faq/{faq}'
 */
destroy.delete = (args: { faq: number | { id: number } } | [faq: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const FaqController = { index, create, store, show, edit, update, destroy }

export default FaqController