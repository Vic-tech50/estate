import HeadingSmall from '@/components/heading-small';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { edit as editAppearance } from '@/routes/appearance';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import * as React from 'react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Upload Image',
        href: editAppearance().url,
    },
];

export default function Upload() {
    const route = useRoute();
    type AgentFormData = {
        passport: File | string | null;
    };

    const { data, setData, post, put, processing, errors, progress } =
        useForm<AgentFormData>({
            passport: null,
        });

    const [previewUrl, setPreviewUrl] = React.useState<string | null>(
        data.passport ? `/storage/${data.passport}` : null,
    );

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setData('passport', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    }

    function submit(e: any) {
        e.preventDefault();

        post('uploadimage', {
            // _method: 'put',
            // preserveScroll: true,
            onError: (err) => {
                return err.message;
            },
            onSuccess: (page) => {
                // maybe redirect or show toast, etc.
            },
        });
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Upload Image" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Upload Image"
                        description="Update your account's appearance settings"
                    />
                    <form onSubmit={submit} encType="multipart/form-data">
                        <div>
                            <Label htmlFor="picture">Picture</Label>
                            <Input
                                id="picture"
                                type="file"
                                onChange={(e) =>
                                    setData('passport', e.target.files[0])
                                }
                            />

                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}

                            {errors.passport && (
                                <div className="text-red-500">
                                    {errors.passport}
                                </div>
                            )}
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
                            )}{' '}
                            Upload Image
                        </Button>
                    </form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
}
