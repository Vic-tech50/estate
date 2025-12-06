import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../wayfinder'
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
const HomeController = { agent, admin }

export default HomeController