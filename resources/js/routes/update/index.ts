import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PropertiesController::property
 * @see app/Http/Controllers/PropertiesController.php:93
 * @route '/updateproperty'
 */
export const property = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: property.url(options),
    method: 'post',
})

property.definition = {
    methods: ["post"],
    url: '/updateproperty',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PropertiesController::property
 * @see app/Http/Controllers/PropertiesController.php:93
 * @route '/updateproperty'
 */
property.url = (options?: RouteQueryOptions) => {
    return property.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PropertiesController::property
 * @see app/Http/Controllers/PropertiesController.php:93
 * @route '/updateproperty'
 */
property.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: property.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TestimonialsController::testimonial
 * @see app/Http/Controllers/TestimonialsController.php:110
 * @route '/updatetestimonial'
 */
export const testimonial = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: testimonial.url(options),
    method: 'post',
})

testimonial.definition = {
    methods: ["post"],
    url: '/updatetestimonial',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TestimonialsController::testimonial
 * @see app/Http/Controllers/TestimonialsController.php:110
 * @route '/updatetestimonial'
 */
testimonial.url = (options?: RouteQueryOptions) => {
    return testimonial.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TestimonialsController::testimonial
 * @see app/Http/Controllers/TestimonialsController.php:110
 * @route '/updatetestimonial'
 */
testimonial.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: testimonial.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AgentController::agent
 * @see app/Http/Controllers/AgentController.php:73
 * @route '/updateagent'
 */
export const agent = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: agent.url(options),
    method: 'post',
})

agent.definition = {
    methods: ["post"],
    url: '/updateagent',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AgentController::agent
 * @see app/Http/Controllers/AgentController.php:73
 * @route '/updateagent'
 */
agent.url = (options?: RouteQueryOptions) => {
    return agent.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AgentController::agent
 * @see app/Http/Controllers/AgentController.php:73
 * @route '/updateagent'
 */
agent.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: agent.url(options),
    method: 'post',
})
const update = {
    property: Object.assign(property, property),
testimonial: Object.assign(testimonial, testimonial),
agent: Object.assign(agent, agent),
}

export default update