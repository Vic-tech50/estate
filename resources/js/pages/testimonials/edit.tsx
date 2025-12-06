import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import type { FormEvent } from 'react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Testimonials',
        href: dashboard().url,
    },
];

export default function EditTestimonials() {
    // const testimonial: any = usePage().props.testimonial || [];
    const testimonial: any = usePage().props.testimonial ?? {};
    const route = useRoute();

    const { data, setData, post, processing, errors } = useForm({
        image: null,
        name: testimonial.name || '',
        id: testimonial.id || '',
        profession: testimonial.profession || '',
        content: testimonial.content || '',
    });

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post('/updatetestimonial', {
            // method: 'put',
            // _method: 'put',
            forceFormData: true,
        });
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Testimonials" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="mx-auto my-7 w-3/4">
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        {/* <form onSubmit={submit} encType="multipart/form-data"> */}
                        <div className="relative mb-6 rounded-lg border p-4 shadow-sm">
                            <div className="mb-2 flex items-center justify-between">
                                <h3 className="font-semibold">Testimonial</h3>
                            </div>

                            <div className="mb-4 grid w-full gap-3">
                                <Label htmlFor="image">Image</Label>

                                <Input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData(
                                            'image',
                                            e.target.files?.[0] ?? null,
                                        )
                                    }
                                />

                                {errors.image && (
                                    <div className="text-red-500">
                                        {errors.image}
                                    </div>
                                )}
                            </div>

                            <div className="mb-4 grid w-full gap-3">
                                <Input
                                    id="id"
                                    name="id"
                                    type="hidden"
                                    value={data.id}
                                />
                            </div>

                            <div className="mb-4 grid w-full gap-3">
                                <Label htmlFor="name">FullName</Label>
                                <Input
                                    placeholder="Type your name..."
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <div className="text-red-500">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="grid w-full gap-3">
                                <Label htmlFor="profession">Profession</Label>
                                <Input
                                    placeholder="Type your profession..."
                                    id="profession"
                                    value={data.profession}
                                    onChange={(e) =>
                                        setData(
                                            'profession',
                                            (e.target as HTMLInputElement)
                                                .value,
                                        )
                                    }
                                />

                                {errors.profession && (
                                    <div className="text-red-500">
                                        {errors.profession}
                                    </div>
                                )}
                            </div>

                            <div className="mt-3 grid w-full gap-3">
                                <Label htmlFor="content">Testimonial</Label>
                                <Textarea
                                    placeholder="Type your content..."
                                    id="content"
                                    name="content"
                                    maxLength={150}
                                    value={data.content}
                                    onChange={(e) =>
                                        setData('content', e.target.value)
                                    }
                                />

                                {errors.content && (
                                    <div className="text-red-500">
                                        {errors.content}
                                    </div>
                                )}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={processing}
                            variant="secondary"
                            size="lg"
                            className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                        >
                            {processing && (
                                <LoaderCircle className="h-4 w-4 animate-spin" />
                            )}
                            Save Changes
                        </Button>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
