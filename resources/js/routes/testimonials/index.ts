import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TestimonialsController::index
 * @see app/Http/Controllers/TestimonialsController.php:15
 * @route '/testimonials'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialsController::index
 * @see app/Http/Controllers/TestimonialsController.php:15
 * @route '/testimonials'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::index
 * @see app/Http/Controllers/TestimonialsController.php:15
 * @route '/testimonials'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TestimonialsController::index
 * @see app/Http/Controllers/TestimonialsController.php:15
 * @route '/testimonials'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialsController::create
 * @see app/Http/Controllers/TestimonialsController.php:24
 * @route '/testimonials/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/testimonials/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialsController::create
 * @see app/Http/Controllers/TestimonialsController.php:24
 * @route '/testimonials/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::create
 * @see app/Http/Controllers/TestimonialsController.php:24
 * @route '/testimonials/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TestimonialsController::create
 * @see app/Http/Controllers/TestimonialsController.php:24
 * @route '/testimonials/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialsController::store
 * @see app/Http/Controllers/TestimonialsController.php:32
 * @route '/testimonials'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/testimonials',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TestimonialsController::store
 * @see app/Http/Controllers/TestimonialsController.php:32
 * @route '/testimonials'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::store
 * @see app/Http/Controllers/TestimonialsController.php:32
 * @route '/testimonials'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialsController::show
 * @see app/Http/Controllers/TestimonialsController.php:58
 * @route '/testimonials/{testimonial}'
 */
export const show = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialsController::show
 * @see app/Http/Controllers/TestimonialsController.php:58
 * @route '/testimonials/{testimonial}'
 */
show.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: args.testimonial,
                }

    return show.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::show
 * @see app/Http/Controllers/TestimonialsController.php:58
 * @route '/testimonials/{testimonial}'
 */
show.get = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TestimonialsController::show
 * @see app/Http/Controllers/TestimonialsController.php:58
 * @route '/testimonials/{testimonial}'
 */
show.head = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialsController::edit
 * @see app/Http/Controllers/TestimonialsController.php:66
 * @route '/testimonials/{testimonial}/edit'
 */
export const edit = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/testimonials/{testimonial}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TestimonialsController::edit
 * @see app/Http/Controllers/TestimonialsController.php:66
 * @route '/testimonials/{testimonial}/edit'
 */
edit.url = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { testimonial: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: typeof args.testimonial === 'object'
                ? args.testimonial.id
                : args.testimonial,
                }

    return edit.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::edit
 * @see app/Http/Controllers/TestimonialsController.php:66
 * @route '/testimonials/{testimonial}/edit'
 */
edit.get = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\TestimonialsController::edit
 * @see app/Http/Controllers/TestimonialsController.php:66
 * @route '/testimonials/{testimonial}/edit'
 */
edit.head = (args: { testimonial: number | { id: number } } | [testimonial: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TestimonialsController::update
 * @see app/Http/Controllers/TestimonialsController.php:0
 * @route '/testimonials/{testimonial}'
 */
export const update = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TestimonialsController::update
 * @see app/Http/Controllers/TestimonialsController.php:0
 * @route '/testimonials/{testimonial}'
 */
update.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: args.testimonial,
                }

    return update.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::update
 * @see app/Http/Controllers/TestimonialsController.php:0
 * @route '/testimonials/{testimonial}'
 */
update.put = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\TestimonialsController::update
 * @see app/Http/Controllers/TestimonialsController.php:0
 * @route '/testimonials/{testimonial}'
 */
update.patch = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TestimonialsController::destroy
 * @see app/Http/Controllers/TestimonialsController.php:132
 * @route '/testimonials/{testimonial}'
 */
export const destroy = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/testimonials/{testimonial}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TestimonialsController::destroy
 * @see app/Http/Controllers/TestimonialsController.php:132
 * @route '/testimonials/{testimonial}'
 */
destroy.url = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { testimonial: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    testimonial: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        testimonial: args.testimonial,
                }

    return destroy.definition.url
            .replace('{testimonial}', parsedArgs.testimonial.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::destroy
 * @see app/Http/Controllers/TestimonialsController.php:132
 * @route '/testimonials/{testimonial}'
 */
destroy.delete = (args: { testimonial: string | number } | [testimonial: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})
const testimonials = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default testimonials