import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PropertiesController::update_property
 * @see app/Http/Controllers/PropertiesController.php:96
 * @route '/updateproperty'
 */
export const update_property = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_property.url(options),
    method: 'post',
})

update_property.definition = {
    methods: ["post"],
    url: '/updateproperty',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PropertiesController::update_property
 * @see app/Http/Controllers/PropertiesController.php:96
 * @route '/updateproperty'
 */
update_property.url = (options?: RouteQueryOptions) => {
    return update_property.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::update_property
 * @see app/Http/Controllers/PropertiesController.php:96
 * @route '/updateproperty'
 */
update_property.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_property.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PropertiesController::update_property
 * @see app/Http/Controllers/PropertiesController.php:96
 * @route '/updateproperty'
 */
    const update_propertyForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_property.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::update_property
 * @see app/Http/Controllers/PropertiesController.php:96
 * @route '/updateproperty'
 */
        update_propertyForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_property.url(options),
            method: 'post',
        })
    
    update_property.form = update_propertyForm
/**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/properties',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::index
 * @see app/Http/Controllers/PropertiesController.php:23
 * @route '/properties'
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
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/properties/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::create
 * @see app/Http/Controllers/PropertiesController.php:34
 * @route '/properties/create'
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
* @see \App\Http\Controllers\PropertiesController::store
 * @see app/Http/Controllers/PropertiesController.php:42
 * @route '/properties'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/properties',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PropertiesController::store
 * @see app/Http/Controllers/PropertiesController.php:42
 * @route '/properties'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::store
 * @see app/Http/Controllers/PropertiesController.php:42
 * @route '/properties'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\PropertiesController::store
 * @see app/Http/Controllers/PropertiesController.php:42
 * @route '/properties'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::store
 * @see app/Http/Controllers/PropertiesController.php:42
 * @route '/properties'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
export const show = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/properties/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
show.url = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return show.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
show.get = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
show.head = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
    const showForm = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
        showForm.get = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::show
 * @see app/Http/Controllers/PropertiesController.php:78
 * @route '/properties/{property}'
 */
        showForm.head = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
export const edit = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/properties/{property}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
edit.url = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { property: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.id
                : args.property,
                }

    return edit.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
edit.get = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
edit.head = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
    const editForm = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
        editForm.get = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::edit
 * @see app/Http/Controllers/PropertiesController.php:88
 * @route '/properties/{property}/edit'
 */
        editForm.head = (args: { property: number | { id: number } } | [property: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
export const update = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/properties/{property}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
update.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: args.property,
                }

    return update.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
update.put = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
update.patch = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
    const updateForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
        updateForm.put = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::update
 * @see app/Http/Controllers/PropertiesController.php:0
 * @route '/properties/{property}'
 */
        updateForm.patch = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PropertiesController::destroy
 * @see app/Http/Controllers/PropertiesController.php:142
 * @route '/properties/{property}'
 */
export const destroy = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/properties/{property}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PropertiesController::destroy
 * @see app/Http/Controllers/PropertiesController.php:142
 * @route '/properties/{property}'
 */
destroy.url = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: args.property,
                }

    return destroy.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::destroy
 * @see app/Http/Controllers/PropertiesController.php:142
 * @route '/properties/{property}'
 */
destroy.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\PropertiesController::destroy
 * @see app/Http/Controllers/PropertiesController.php:142
 * @route '/properties/{property}'
 */
    const destroyForm = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::destroy
 * @see app/Http/Controllers/PropertiesController.php:142
 * @route '/properties/{property}'
 */
        destroyForm.delete = (args: { property: string | number } | [property: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
export const approve = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approve.url(args, options),
    method: 'get',
})

approve.definition = {
    methods: ["get","head"],
    url: '/properties/approve/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
approve.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return approve.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
approve.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: approve.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
approve.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: approve.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
    const approveForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: approve.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
        approveForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: approve.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::approve
 * @see app/Http/Controllers/PropertiesController.php:152
 * @route '/properties/approve/{id}'
 */
        approveForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: approve.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    approve.form = approveForm
/**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
export const cancel = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})

cancel.definition = {
    methods: ["get","head"],
    url: '/properties/cancel/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
cancel.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return cancel.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
cancel.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cancel.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
cancel.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cancel.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
    const cancelForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cancel.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
        cancelForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\PropertiesController::cancel
 * @see app/Http/Controllers/PropertiesController.php:162
 * @route '/properties/cancel/{id}'
 */
        cancelForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cancel.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cancel.form = cancelForm
const PropertiesController = { update_property, index, create, store, show, edit, update, destroy, approve, cancel }

export default PropertiesController