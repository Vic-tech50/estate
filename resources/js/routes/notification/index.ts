import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:16
 * @route '/notification'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/notification',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:16
 * @route '/notification'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:16
 * @route '/notification'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::index
 * @see app/Http/Controllers/NotificationController.php:16
 * @route '/notification'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::create
 * @see app/Http/Controllers/NotificationController.php:27
 * @route '/notification/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/notification/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::create
 * @see app/Http/Controllers/NotificationController.php:27
 * @route '/notification/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::create
 * @see app/Http/Controllers/NotificationController.php:27
 * @route '/notification/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::create
 * @see app/Http/Controllers/NotificationController.php:27
 * @route '/notification/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:35
 * @route '/notification'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/notification',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:35
 * @route '/notification'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::store
 * @see app/Http/Controllers/NotificationController.php:35
 * @route '/notification'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NotificationController::show
 * @see app/Http/Controllers/NotificationController.php:48
 * @route '/notification/{notification}'
 */
export const show = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/notification/{notification}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::show
 * @see app/Http/Controllers/NotificationController.php:48
 * @route '/notification/{notification}'
 */
show.url = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notification: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.id
                : args.notification,
                }

    return show.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::show
 * @see app/Http/Controllers/NotificationController.php:48
 * @route '/notification/{notification}'
 */
show.get = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::show
 * @see app/Http/Controllers/NotificationController.php:48
 * @route '/notification/{notification}'
 */
show.head = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::edit
 * @see app/Http/Controllers/NotificationController.php:58
 * @route '/notification/{notification}/edit'
 */
export const edit = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/notification/{notification}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NotificationController::edit
 * @see app/Http/Controllers/NotificationController.php:58
 * @route '/notification/{notification}/edit'
 */
edit.url = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { notification: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: typeof args.notification === 'object'
                ? args.notification.id
                : args.notification,
                }

    return edit.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::edit
 * @see app/Http/Controllers/NotificationController.php:58
 * @route '/notification/{notification}/edit'
 */
edit.get = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NotificationController::edit
 * @see app/Http/Controllers/NotificationController.php:58
 * @route '/notification/{notification}/edit'
 */
edit.head = (args: { notification: number | { id: number } } | [notification: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NotificationController::update
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notification/{notification}'
 */
export const update = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/notification/{notification}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\NotificationController::update
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notification/{notification}'
 */
update.url = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: args.notification,
                }

    return update.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::update
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notification/{notification}'
 */
update.put = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\NotificationController::update
 * @see app/Http/Controllers/NotificationController.php:68
 * @route '/notification/{notification}'
 */
update.patch = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:92
 * @route '/notification/{notification}'
 */
export const destroy = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/notification/{notification}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:92
 * @route '/notification/{notification}'
 */
destroy.url = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { notification: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    notification: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        notification: args.notification,
                }

    return destroy.definition.url
            .replace('{notification}', parsedArgs.notification.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NotificationController::destroy
 * @see app/Http/Controllers/NotificationController.php:92
 * @route '/notification/{notification}'
 */
destroy.delete = (args: { notification: string | number } | [notification: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const notification = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default notification