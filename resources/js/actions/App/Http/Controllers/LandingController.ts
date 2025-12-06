import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::index
 * @see app/Http/Controllers/LandingController.php:21
 * @route '/'
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
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
export const faqs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faqs.url(options),
    method: 'get',
})

faqs.definition = {
    methods: ["get","head"],
    url: '/faqs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
faqs.url = (options?: RouteQueryOptions) => {
    return faqs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
faqs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: faqs.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
faqs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: faqs.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
    const faqsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: faqs.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
        faqsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faqs.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::faqs
 * @see app/Http/Controllers/LandingController.php:47
 * @route '/faqs'
 */
        faqsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: faqs.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    faqs.form = faqsForm
/**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
export const contact = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})

contact.definition = {
    methods: ["get","head"],
    url: '/contact',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
contact.url = (options?: RouteQueryOptions) => {
    return contact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
contact.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: contact.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
contact.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: contact.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
    const contactForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: contact.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
        contactForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::contact
 * @see app/Http/Controllers/LandingController.php:53
 * @route '/contact'
 */
        contactForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: contact.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    contact.form = contactForm
/**
* @see \App\Http\Controllers\LandingController::sendContact
 * @see app/Http/Controllers/LandingController.php:59
 * @route '/sendcontact'
 */
export const sendContact = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendContact.url(options),
    method: 'post',
})

sendContact.definition = {
    methods: ["post"],
    url: '/sendcontact',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LandingController::sendContact
 * @see app/Http/Controllers/LandingController.php:59
 * @route '/sendcontact'
 */
sendContact.url = (options?: RouteQueryOptions) => {
    return sendContact.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::sendContact
 * @see app/Http/Controllers/LandingController.php:59
 * @route '/sendcontact'
 */
sendContact.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: sendContact.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\LandingController::sendContact
 * @see app/Http/Controllers/LandingController.php:59
 * @route '/sendcontact'
 */
    const sendContactForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: sendContact.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\LandingController::sendContact
 * @see app/Http/Controllers/LandingController.php:59
 * @route '/sendcontact'
 */
        sendContactForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: sendContact.url(options),
            method: 'post',
        })
    
    sendContact.form = sendContactForm
/**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
export const blog = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})

blog.definition = {
    methods: ["get","head"],
    url: '/blogs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
blog.url = (options?: RouteQueryOptions) => {
    return blog.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
blog.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
blog.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blog.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
    const blogForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blog.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
        blogForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::blog
 * @see app/Http/Controllers/LandingController.php:94
 * @route '/blogs'
 */
        blogForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blog.form = blogForm
/**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
export const property = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: property.url(options),
    method: 'get',
})

property.definition = {
    methods: ["get","head"],
    url: '/property',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
property.url = (options?: RouteQueryOptions) => {
    return property.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
property.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: property.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
property.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: property.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
    const propertyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: property.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
        propertyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: property.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::property
 * @see app/Http/Controllers/LandingController.php:126
 * @route '/property'
 */
        propertyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: property.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    property.form = propertyForm
/**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
export const disclaimer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disclaimer.url(options),
    method: 'get',
})

disclaimer.definition = {
    methods: ["get","head"],
    url: '/disclaimer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
disclaimer.url = (options?: RouteQueryOptions) => {
    return disclaimer.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
disclaimer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: disclaimer.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
disclaimer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: disclaimer.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
    const disclaimerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: disclaimer.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
        disclaimerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: disclaimer.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::disclaimer
 * @see app/Http/Controllers/LandingController.php:75
 * @route '/disclaimer'
 */
        disclaimerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: disclaimer.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    disclaimer.form = disclaimerForm
/**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
export const terms = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms.url(options),
    method: 'get',
})

terms.definition = {
    methods: ["get","head"],
    url: '/terms',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
terms.url = (options?: RouteQueryOptions) => {
    return terms.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
terms.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: terms.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
terms.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: terms.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
    const termsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: terms.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
        termsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::terms
 * @see app/Http/Controllers/LandingController.php:81
 * @route '/terms'
 */
        termsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: terms.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    terms.form = termsForm
/**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
export const privacy = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})

privacy.definition = {
    methods: ["get","head"],
    url: '/privacy',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
privacy.url = (options?: RouteQueryOptions) => {
    return privacy.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
privacy.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: privacy.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
privacy.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: privacy.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
    const privacyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: privacy.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
        privacyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::privacy
 * @see app/Http/Controllers/LandingController.php:87
 * @route '/privacy'
 */
        privacyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: privacy.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    privacy.form = privacyForm
/**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
export const property_detail = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: property_detail.url(args, options),
    method: 'get',
})

property_detail.definition = {
    methods: ["get","head"],
    url: '/property_details/{property}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
property_detail.url = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { property: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'title' in args) {
            args = { property: args.title }
        }
    
    if (Array.isArray(args)) {
        args = {
                    property: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        property: typeof args.property === 'object'
                ? args.property.title
                : args.property,
                }

    return property_detail.definition.url
            .replace('{property}', parsedArgs.property.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
property_detail.get = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: property_detail.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
property_detail.head = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: property_detail.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
    const property_detailForm = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: property_detail.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
        property_detailForm.get = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: property_detail.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::property_detail
 * @see app/Http/Controllers/LandingController.php:132
 * @route '/property_details/{property}'
 */
        property_detailForm.head = (args: { property: string | { title: string } } | [property: string | { title: string } ] | string | { title: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: property_detail.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    property_detail.form = property_detailForm
/**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
export const blog_detail = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog_detail.url(args, options),
    method: 'get',
})

blog_detail.definition = {
    methods: ["get","head"],
    url: '/blog_details/{blog}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
blog_detail.url = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { blog: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'slug' in args) {
            args = { blog: args.slug }
        }
    
    if (Array.isArray(args)) {
        args = {
                    blog: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        blog: typeof args.blog === 'object'
                ? args.blog.slug
                : args.blog,
                }

    return blog_detail.definition.url
            .replace('{blog}', parsedArgs.blog.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
blog_detail.get = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: blog_detail.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
blog_detail.head = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: blog_detail.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
    const blog_detailForm = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: blog_detail.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
        blog_detailForm.get = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog_detail.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\LandingController::blog_detail
 * @see app/Http/Controllers/LandingController.php:106
 * @route '/blog_details/{blog}'
 */
        blog_detailForm.head = (args: { blog: string | { slug: string } } | [blog: string | { slug: string } ] | string | { slug: string }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: blog_detail.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    blog_detail.form = blog_detailForm
const LandingController = { index, faqs, contact, sendContact, blog, property, disclaimer, terms, privacy, property_detail, blog_detail }

export default LandingController