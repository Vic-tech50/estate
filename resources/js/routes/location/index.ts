import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/location',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/location/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LocationController::store
 * @see app/Http/Controllers/LocationController.php:34
 * @route '/location'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/location',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LocationController::store
 * @see app/Http/Controllers/LocationController.php:34
 * @route '/location'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::store
 * @see app/Http/Controllers/LocationController.php:34
 * @route '/location'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
export const show = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/location/{location}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
show.url = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    location: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        location: args.location,
                }

    return show.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
show.get = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
show.head = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
export const edit = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/location/{location}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
edit.url = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { location: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    location: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        location: typeof args.location === 'object'
                ? args.location.id
                : args.location,
                }

    return edit.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
edit.get = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
edit.head = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
export const update = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/location/{location}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
update.url = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    location: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        location: args.location,
                }

    return update.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
update.put = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
update.patch = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LocationController::destroy
 * @see app/Http/Controllers/LocationController.php:75
 * @route '/location/{location}'
 */
export const destroy = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/location/{location}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LocationController::destroy
 * @see app/Http/Controllers/LocationController.php:75
 * @route '/location/{location}'
 */
destroy.url = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { location: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { location: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    location: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        location: typeof args.location === 'object'
                ? args.location.id
                : args.location,
                }

    return destroy.definition.url
            .replace('{location}', parsedArgs.location.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LocationController::destroy
 * @see app/Http/Controllers/LocationController.php:75
 * @route '/location/{location}'
 */
destroy.delete = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const location = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default location