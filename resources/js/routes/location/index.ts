import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LocationController::index
 * @see app/Http/Controllers/LocationController.php:15
 * @route '/location'
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
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LocationController::create
 * @see app/Http/Controllers/LocationController.php:26
 * @route '/location/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
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
* @see \App\Http\Controllers\LocationController::store
 * @see app/Http/Controllers/LocationController.php:34
 * @route '/location'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LocationController::store
 * @see app/Http/Controllers/LocationController.php:34
 * @route '/location'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
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
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
    const showForm = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
        showForm.get = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LocationController::show
 * @see app/Http/Controllers/LocationController.php:51
 * @route '/location/{location}'
 */
        showForm.head = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
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
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
    const editForm = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
        editForm.get = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LocationController::edit
 * @see app/Http/Controllers/LocationController.php:59
 * @route '/location/{location}/edit'
 */
        editForm.head = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
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
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
    const updateForm = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
        updateForm.put = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\LocationController::update
 * @see app/Http/Controllers/LocationController.php:67
 * @route '/location/{location}'
 */
        updateForm.patch = (args: { location: string | number } | [location: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
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

    /**
* @see \App\Http\Controllers\LocationController::destroy
 * @see app/Http/Controllers/LocationController.php:75
 * @route '/location/{location}'
 */
    const destroyForm = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LocationController::destroy
 * @see app/Http/Controllers/LocationController.php:75
 * @route '/location/{location}'
 */
        destroyForm.delete = (args: { location: number | { id: number } } | [location: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
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