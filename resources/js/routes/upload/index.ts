import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\UploadImage::image
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
export const image = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: image.url(options),
    method: 'post',
})

image.definition = {
    methods: ["post"],
    url: '/uploadimage',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\UploadImage::image
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
image.url = (options?: RouteQueryOptions) => {
    return image.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\UploadImage::image
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
image.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: image.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\UploadImage::image
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
    const imageForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: image.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\UploadImage::image
 * @see app/Http/Controllers/UploadImage.php:15
 * @route '/uploadimage'
 */
        imageForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: image.url(options),
            method: 'post',
        })
    
    image.form = imageForm
const upload = {
    image: Object.assign(image, image),
}

export default upload