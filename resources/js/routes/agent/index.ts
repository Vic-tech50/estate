import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
export const dashboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})

dashboard.definition = {
    methods: ["get","head"],
    url: '/agent/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
dashboard.url = (options?: RouteQueryOptions) => {
    return dashboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
dashboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: dashboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
dashboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: dashboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
    const dashboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: dashboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
        dashboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::dashboard
 * @see app/Http/Controllers/HomeController.php:34
 * @route '/agent/dashboard'
 */
        dashboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: dashboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    dashboard.form = dashboardForm
/**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
export const block = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(args, options),
    method: 'get',
})

block.definition = {
    methods: ["get","head"],
    url: '/agent/block/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
block.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return block.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
block.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: block.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
block.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: block.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
    const blockForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: block.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
        blockForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::block
 * @see app/Http/Controllers/AgentController.php:120
 * @route '/agent/block/{id}'
 */
        blockForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: block.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    block.form = blockForm
/**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
export const unblock = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unblock.url(args, options),
    method: 'get',
})

unblock.definition = {
    methods: ["get","head"],
    url: '/agent/unblock/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
unblock.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return unblock.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
unblock.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: unblock.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
unblock.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: unblock.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
    const unblockForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: unblock.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
        unblockForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unblock.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::unblock
 * @see app/Http/Controllers/AgentController.php:128
 * @route '/agent/unblock/{id}'
 */
        unblockForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: unblock.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    unblock.form = unblockForm
/**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/agent',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::index
 * @see app/Http/Controllers/AgentController.php:18
 * @route '/agent'
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
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/agent/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::create
 * @see app/Http/Controllers/AgentController.php:27
 * @route '/agent/create'
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
* @see \App\Http\Controllers\AgentController::store
 * @see app/Http/Controllers/AgentController.php:35
 * @route '/agent'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/agent',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AgentController::store
 * @see app/Http/Controllers/AgentController.php:35
 * @route '/agent'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::store
 * @see app/Http/Controllers/AgentController.php:35
 * @route '/agent'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AgentController::store
 * @see app/Http/Controllers/AgentController.php:35
 * @route '/agent'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AgentController::store
 * @see app/Http/Controllers/AgentController.php:35
 * @route '/agent'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
export const show = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/agent/{agent}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
show.url = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { agent: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { agent: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    agent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        agent: typeof args.agent === 'object'
                ? args.agent.id
                : args.agent,
                }

    return show.definition.url
            .replace('{agent}', parsedArgs.agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
show.get = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
show.head = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
    const showForm = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
        showForm.get = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::show
 * @see app/Http/Controllers/AgentController.php:53
 * @route '/agent/{agent}'
 */
        showForm.head = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
export const edit = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/agent/{agent}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
edit.url = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { agent: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { agent: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    agent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        agent: typeof args.agent === 'object'
                ? args.agent.id
                : args.agent,
                }

    return edit.definition.url
            .replace('{agent}', parsedArgs.agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
edit.get = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
edit.head = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
    const editForm = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
        editForm.get = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\AgentController::edit
 * @see app/Http/Controllers/AgentController.php:63
 * @route '/agent/{agent}/edit'
 */
        editForm.head = (args: { agent: number | { id: number } } | [agent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
export const update = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/agent/{agent}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
update.url = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { agent: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    agent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        agent: args.agent,
                }

    return update.definition.url
            .replace('{agent}', parsedArgs.agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
update.put = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
update.patch = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
    const updateForm = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
        updateForm.put = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\AgentController::update
 * @see app/Http/Controllers/AgentController.php:0
 * @route '/agent/{agent}'
 */
        updateForm.patch = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AgentController::destroy
 * @see app/Http/Controllers/AgentController.php:110
 * @route '/agent/{agent}'
 */
export const destroy = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/agent/{agent}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AgentController::destroy
 * @see app/Http/Controllers/AgentController.php:110
 * @route '/agent/{agent}'
 */
destroy.url = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { agent: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    agent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        agent: args.agent,
                }

    return destroy.definition.url
            .replace('{agent}', parsedArgs.agent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::destroy
 * @see app/Http/Controllers/AgentController.php:110
 * @route '/agent/{agent}'
 */
destroy.delete = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\AgentController::destroy
 * @see app/Http/Controllers/AgentController.php:110
 * @route '/agent/{agent}'
 */
    const destroyForm = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AgentController::destroy
 * @see app/Http/Controllers/AgentController.php:110
 * @route '/agent/{agent}'
 */
        destroyForm.delete = (args: { agent: string | number } | [agent: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const agent = {
    dashboard: Object.assign(dashboard, dashboard),
block: Object.assign(block, block),
unblock: Object.assign(unblock, unblock),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default agent