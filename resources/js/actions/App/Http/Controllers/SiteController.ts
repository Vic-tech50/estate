import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
export const site_content = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_content.url(options),
    method: 'get',
})

site_content.definition = {
    methods: ["get","head"],
    url: '/site_content',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
site_content.url = (options?: RouteQueryOptions) => {
    return site_content.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
site_content.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_content.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
site_content.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: site_content.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
    const site_contentForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: site_content.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
        site_contentForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_content.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SiteController::site_content
 * @see app/Http/Controllers/SiteController.php:11
 * @route '/site_content'
 */
        site_contentForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_content.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    site_content.form = site_contentForm
/**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
export const site_settings = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_settings.url(options),
    method: 'get',
})

site_settings.definition = {
    methods: ["get","head"],
    url: '/site_settings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
site_settings.url = (options?: RouteQueryOptions) => {
    return site_settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
site_settings.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_settings.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
site_settings.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: site_settings.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
    const site_settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: site_settings.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
        site_settingsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_settings.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SiteController::site_settings
 * @see app/Http/Controllers/SiteController.php:23
 * @route '/site_settings'
 */
        site_settingsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_settings.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    site_settings.form = site_settingsForm
/**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
export const site_templates = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_templates.url(options),
    method: 'get',
})

site_templates.definition = {
    methods: ["get","head"],
    url: '/site_templates',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
site_templates.url = (options?: RouteQueryOptions) => {
    return site_templates.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
site_templates.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: site_templates.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
site_templates.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: site_templates.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
    const site_templatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: site_templates.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
        site_templatesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_templates.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\SiteController::site_templates
 * @see app/Http/Controllers/SiteController.php:125
 * @route '/site_templates'
 */
        site_templatesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: site_templates.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    site_templates.form = site_templatesForm
/**
* @see \App\Http\Controllers\SiteController::update_site_content
 * @see app/Http/Controllers/SiteController.php:35
 * @route '/update_content'
 */
export const update_site_content = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_content.url(options),
    method: 'post',
})

update_site_content.definition = {
    methods: ["post"],
    url: '/update_content',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteController::update_site_content
 * @see app/Http/Controllers/SiteController.php:35
 * @route '/update_content'
 */
update_site_content.url = (options?: RouteQueryOptions) => {
    return update_site_content.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::update_site_content
 * @see app/Http/Controllers/SiteController.php:35
 * @route '/update_content'
 */
update_site_content.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_content.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SiteController::update_site_content
 * @see app/Http/Controllers/SiteController.php:35
 * @route '/update_content'
 */
    const update_site_contentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_site_content.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiteController::update_site_content
 * @see app/Http/Controllers/SiteController.php:35
 * @route '/update_content'
 */
        update_site_contentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_site_content.url(options),
            method: 'post',
        })
    
    update_site_content.form = update_site_contentForm
/**
* @see \App\Http\Controllers\SiteController::update_site_settings
 * @see app/Http/Controllers/SiteController.php:55
 * @route '/update_settings'
 */
export const update_site_settings = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_settings.url(options),
    method: 'post',
})

update_site_settings.definition = {
    methods: ["post"],
    url: '/update_settings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteController::update_site_settings
 * @see app/Http/Controllers/SiteController.php:55
 * @route '/update_settings'
 */
update_site_settings.url = (options?: RouteQueryOptions) => {
    return update_site_settings.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::update_site_settings
 * @see app/Http/Controllers/SiteController.php:55
 * @route '/update_settings'
 */
update_site_settings.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_settings.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SiteController::update_site_settings
 * @see app/Http/Controllers/SiteController.php:55
 * @route '/update_settings'
 */
    const update_site_settingsForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_site_settings.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiteController::update_site_settings
 * @see app/Http/Controllers/SiteController.php:55
 * @route '/update_settings'
 */
        update_site_settingsForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_site_settings.url(options),
            method: 'post',
        })
    
    update_site_settings.form = update_site_settingsForm
/**
* @see \App\Http\Controllers\SiteController::update_site_templates
 * @see app/Http/Controllers/SiteController.php:136
 * @route '/update_templates'
 */
export const update_site_templates = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_templates.url(options),
    method: 'post',
})

update_site_templates.definition = {
    methods: ["post"],
    url: '/update_templates',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\SiteController::update_site_templates
 * @see app/Http/Controllers/SiteController.php:136
 * @route '/update_templates'
 */
update_site_templates.url = (options?: RouteQueryOptions) => {
    return update_site_templates.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\SiteController::update_site_templates
 * @see app/Http/Controllers/SiteController.php:136
 * @route '/update_templates'
 */
update_site_templates.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_site_templates.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\SiteController::update_site_templates
 * @see app/Http/Controllers/SiteController.php:136
 * @route '/update_templates'
 */
    const update_site_templatesForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_site_templates.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\SiteController::update_site_templates
 * @see app/Http/Controllers/SiteController.php:136
 * @route '/update_templates'
 */
        update_site_templatesForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_site_templates.url(options),
            method: 'post',
        })
    
    update_site_templates.form = update_site_templatesForm
const SiteController = { site_content, site_settings, site_templates, update_site_content, update_site_settings, update_site_templates }

export default SiteController