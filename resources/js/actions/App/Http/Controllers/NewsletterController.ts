import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NewsletterController::subscribe
 * @see app/Http/Controllers/NewsletterController.php:38
 * @route '/subscribe'
 */
export const subscribe = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

subscribe.definition = {
    methods: ["post"],
    url: '/subscribe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NewsletterController::subscribe
 * @see app/Http/Controllers/NewsletterController.php:38
 * @route '/subscribe'
 */
subscribe.url = (options?: RouteQueryOptions) => {
    return subscribe.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsletterController::subscribe
 * @see app/Http/Controllers/NewsletterController.php:38
 * @route '/subscribe'
 */
subscribe.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: subscribe.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NewsletterController::subscribe
 * @see app/Http/Controllers/NewsletterController.php:38
 * @route '/subscribe'
 */
    const subscribeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: subscribe.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NewsletterController::subscribe
 * @see app/Http/Controllers/NewsletterController.php:38
 * @route '/subscribe'
 */
        subscribeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: subscribe.url(options),
            method: 'post',
        })
    
    subscribe.form = subscribeForm
/**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
export const newsletter = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsletter.url(options),
    method: 'get',
})

newsletter.definition = {
    methods: ["get","head"],
    url: '/newsletter',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
newsletter.url = (options?: RouteQueryOptions) => {
    return newsletter.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
newsletter.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: newsletter.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
newsletter.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: newsletter.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
    const newsletterForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: newsletter.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
        newsletterForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsletter.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\NewsletterController::newsletter
 * @see app/Http/Controllers/NewsletterController.php:30
 * @route '/newsletter'
 */
        newsletterForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: newsletter.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    newsletter.form = newsletterForm
/**
* @see \App\Http\Controllers\NewsletterController::sendNewsletter
 * @see app/Http/Controllers/NewsletterController.php:61
 * @route '/sendNewsletter'
 */
export const sendNewsletter = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendNewsletter.url(options),
    method: 'post',
})

sendNewsletter.definition = {
    methods: ["post"],
    url: '/sendNewsletter',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NewsletterController::sendNewsletter
 * @see app/Http/Controllers/NewsletterController.php:61
 * @route '/sendNewsletter'
 */
sendNewsletter.url = (options?: RouteQueryOptions) => {
    return sendNewsletter.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NewsletterController::sendNewsletter
 * @see app/Http/Controllers/NewsletterController.php:61
 * @route '/sendNewsletter'
 */
sendNewsletter.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendNewsletter.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\NewsletterController::sendNewsletter
 * @see app/Http/Controllers/NewsletterController.php:61
 * @route '/sendNewsletter'
 */
    const sendNewsletterForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendNewsletter.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\NewsletterController::sendNewsletter
 * @see app/Http/Controllers/NewsletterController.php:61
 * @route '/sendNewsletter'
 */
        sendNewsletterForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendNewsletter.url(options),
            method: 'post',
        })
    
    sendNewsletter.form = sendNewsletterForm
const NewsletterController = { subscribe, newsletter, sendNewsletter }

export default NewsletterController