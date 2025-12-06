import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
export const agent = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: agent.url(options),
    method: 'get',
})

agent.definition = {
    methods: ["get","head"],
    url: '/agent/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
agent.url = (options?: RouteQueryOptions) => {
    return agent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
agent.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: agent.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
agent.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: agent.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
    const agentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: agent.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
        agentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: agent.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::agent
 * @see app/Http/Controllers/HomeController.php:15
 * @route '/agent/dashboard'
 */
        agentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: agent.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    agent.form = agentForm
/**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
export const admin = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})

admin.definition = {
    methods: ["get","head"],
    url: '/dashboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
admin.url = (options?: RouteQueryOptions) => {
    return admin.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
admin.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: admin.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
admin.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: admin.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
    const adminForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: admin.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
        adminForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\HomeController::admin
 * @see app/Http/Controllers/HomeController.php:10
 * @route '/dashboard'
 */
        adminForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: admin.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    admin.form = adminForm
const HomeController = { agent, admin }

export default HomeController