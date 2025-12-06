import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:18
 * @route '/blog'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/blog',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:18
 * @route '/blog'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:18
 * @route '/blog'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlogController::index
 * @see app/Http/Controllers/BlogController.php:18
 * @route '/blog'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::create
 * @see app/Http/Controllers/BlogController.php:37
 * @route '/blog/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/blog/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::create
 * @see app/Http/Controllers/BlogController.php:37
 * @route '/blog/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::create
 * @see app/Http/Controllers/BlogController.php:37
 * @route '/blog/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlogController::create
 * @see app/Http/Controllers/BlogController.php:37
 * @route '/blog/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::store
 * @see app/Http/Controllers/BlogController.php:45
 * @route '/blog'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/blog',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogController::store
 * @see app/Http/Controllers/BlogController.php:45
 * @route '/blog'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::store
 * @see app/Http/Controllers/BlogController.php:45
 * @route '/blog'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:70
 * @route '/blog/{blog}'
 */
export const show = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/blog/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:70
 * @route '/blog/{blog}'
 */
show.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return show.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:70
 * @route '/blog/{blog}'
 */
show.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlogController::show
 * @see app/Http/Controllers/BlogController.php:70
 * @route '/blog/{blog}'
 */
show.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::edit
 * @see app/Http/Controllers/BlogController.php:80
 * @route '/blog/{blog}/edit'
 */
export const edit = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/blog/{blog}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\BlogController::edit
 * @see app/Http/Controllers/BlogController.php:80
 * @route '/blog/{blog}/edit'
 */
edit.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return edit.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::edit
 * @see app/Http/Controllers/BlogController.php:80
 * @route '/blog/{blog}/edit'
 */
edit.get = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\BlogController::edit
 * @see app/Http/Controllers/BlogController.php:80
 * @route '/blog/{blog}/edit'
 */
edit.head = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\BlogController::update
 * @see app/Http/Controllers/BlogController.php:90
 * @route '/blog/{blog}'
 */
export const update = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/blog/{blog}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\BlogController::update
 * @see app/Http/Controllers/BlogController.php:90
 * @route '/blog/{blog}'
 */
update.url = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { blog: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.id
                : args.blog,
                }

    return update.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::update
 * @see app/Http/Controllers/BlogController.php:90
 * @route '/blog/{blog}'
 */
update.put = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\BlogController::update
 * @see app/Http/Controllers/BlogController.php:90
 * @route '/blog/{blog}'
 */
update.patch = (args: { blog: number | { id: number } } | [blog: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\BlogController::destroy
 * @see app/Http/Controllers/BlogController.php:101
 * @route '/blog/{blog}'
 */
export const destroy = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/blog/{blog}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\BlogController::destroy
 * @see app/Http/Controllers/BlogController.php:101
 * @route '/blog/{blog}'
 */
destroy.url = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: args.blog,
                }

    return destroy.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::destroy
 * @see app/Http/Controllers/BlogController.php:101
 * @route '/blog/{blog}'
 */
destroy.delete = (args: { blog: string | number } | [blog: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\BlogController::approve
 * @see app/Http/Controllers/BlogController.php:111
 * @route '/blog/approve'
 */
export const approve = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(options),
    method: 'post',
})

approve.definition = {
    methods: ["post"],
    url: '/blog/approve',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogController::approve
 * @see app/Http/Controllers/BlogController.php:111
 * @route '/blog/approve'
 */
approve.url = (options?: RouteQueryOptions) => {
    return approve.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::approve
 * @see app/Http/Controllers/BlogController.php:111
 * @route '/blog/approve'
 */
approve.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: approve.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\BlogController::cancel
 * @see app/Http/Controllers/BlogController.php:119
 * @route '/blog/cancel'
 */
export const cancel = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})

cancel.definition = {
    methods: ["post"],
    url: '/blog/cancel',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\BlogController::cancel
 * @see app/Http/Controllers/BlogController.php:119
 * @route '/blog/cancel'
 */
cancel.url = (options?: RouteQueryOptions) => {
    return cancel.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\BlogController::cancel
 * @see app/Http/Controllers/BlogController.php:119
 * @route '/blog/cancel'
 */
cancel.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: cancel.url(options),
    method: 'post',
})
const BlogController = { index, create, store, show, edit, update, destroy, approve, cancel }

export default BlogController