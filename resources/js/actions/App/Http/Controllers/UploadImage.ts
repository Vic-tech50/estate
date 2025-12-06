import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\UploadImage::upload
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

upload.definition = {
    methods: ["post"],
    url: '/uploadimage',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UploadImage::upload
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UploadImage::upload
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UploadImage::upload
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
    const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: upload.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UploadImage::upload
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
        uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(options),
            method: 'post',
        })
    
    upload.form = uploadForm
const UploadImage = { upload }

export default UploadImage