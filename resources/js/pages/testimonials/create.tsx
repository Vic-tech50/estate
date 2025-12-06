import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle, PlusCircle, Trash2 } from 'lucide-react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Testimonials',
        href: dashboard().url,
    },
];

export default function AddTestimonials() {
    // ✅ Start with one Testimonial field
    type TestimonialField = {
        image: File | null;
        name: string;
        profession: string;
        content: string;
    };
    const [fields, setFields] = React.useState<TestimonialField[]>([
        { image: null, name: '', profession: '', content: '' },
    ]);

    const { data, setData, post, processing, errors } = useForm({
        testimonials: fields, // send as array
    });

    // ✅ Handle field change
    function handleFieldChange(idx: number, field: string, value: string) {
        const updated = fields.map((item, i) =>
            i === idx ? { ...item, [field]: value } : item,
        );
        setFields(updated);
        setData('testimonials', updated); // sync to form data
    }

    // ✅ Add new Testimonial
    function addMore(e: any) {
        e.preventDefault();
        const updated = [
            ...fields,
            { image: null, name: '', profession: '', content: '' },
        ];
        setFields(updated);
        setData('testimonials', updated);
    }

    // ✅ Remove a Testimonial
    function removeField(index: any) {
        const updated = fields.filter((_, i) => i !== index);
        setFields(updated);
        setData('testimonials', updated);
    }

    // ✅ Submit to Laravel
    function submit(e: any) {
        e.preventDefault();
        post('/testimonials');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Testimonials" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-7 w-3/4">
                        <form onSubmit={submit}>
                            {fields.map((field, idx) => (
                                <div
                                    key={idx}
                                    className="relative mb-6 rounded-lg border p-4 shadow-sm"
                                >
                                    <div className="mb-2 flex items-center justify-between">
                                        <h3 className="font-semibold">
                                            Testimonial #{idx + 1}
                                        </h3>
                                        {fields.length > 1 && (
                                            <Button
                                                type="button"
                                                variant="destructive"
                                                size="sm"
                                                onClick={() => removeField(idx)}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        )}
                                    </div>

                                    <div className="mb-4 grid w-full gap-3">
                                        <Label htmlFor={`image-${idx}`}>
                                            Image
                                        </Label>

                                        <Input
                                            type="file"
                                            id={`image-${idx}`}
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file =
                                                    e.target.files?.[0] || null;

                                                // Update the specific field (image) for this index
                                                const updated = fields.map(
                                                    (item, i) =>
                                                        i === idx
                                                            ? {
                                                                  ...item,
                                                                  image: file,
                                                              }
                                                            : item,
                                                );

                                                setFields(updated);
                                                setData(
                                                    'testimonials',
                                                    updated,
                                                ); // or 'testimonials' depending on your form
                                            }}
                                        />

                                        {errors[
                                            `testimonials.${idx}.image`
                                        ] && (
                                            <div className="text-red-500">
                                                {
                                                    errors[
                                                        `testimonials.${idx}.image`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-4 grid w-full gap-3">
                                        <Label htmlFor={`name-${idx}`}>
                                            FullName
                                        </Label>
                                        <Input
                                            placeholder="Type your name..."
                                            id={`name-${idx}`}
                                            value={field.name}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    idx,
                                                    'name',
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors[`testimonials.${idx}.name`] && (
                                            <div className="text-red-500">
                                                {
                                                    errors[
                                                        `testimonials.${idx}.name`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="grid w-full gap-3">
                                        <Label htmlFor={`profession-${idx}`}>
                                            Profession
                                        </Label>
                                        <Input
                                            placeholder="Type your profession..."
                                            id={`profession-${idx}`}
                                            value={field.profession}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    idx,
                                                    'profession',
                                                    e.target.value,
                                                )
                                            }
                                        />

                                        {errors[
                                            `testimonials.${idx}.profession`
                                        ] && (
                                            <div className="text-red-500">
                                                {
                                                    errors[
                                                        `testimonials.${idx}.profession`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-3 grid w-full gap-3">
                                        <Label htmlFor={`content-${idx}`}>
                                            Testimonial
                                        </Label>
                                        <Textarea
                                            placeholder="Type your content..."
                                            id={`content-${idx}`}
                                            value={field.content}
                                            maxLength={150}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    idx,
                                                    'content',
                                                    e.target.value,
                                                )
                                            }
                                        />

                                        {errors[
                                            `testimonials.${idx}.content`
                                        ] && (
                                            <div className="text-red-500">
                                                {
                                                    errors[
                                                        `testimonials.${idx}.content`
                                                    ]
                                                }
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}

                            <Button
                                onClick={addMore}
                                type="button"
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <PlusCircle className="h-4 w-4" />
                                Add Another Testimonial
                            </Button>

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
                                Submit Testimonials
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
