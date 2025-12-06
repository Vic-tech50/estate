import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import * as React from 'react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Edit Agent',
        href: dashboard().url,
    },
];

export default function EditAgent() {
    const agent: any = usePage().props.agent || {};
    const route = useRoute();

    type AgentFormData = {
        name: string;
        id: string;
        title: string;
        company: string;
        email: string;
        phone: string;
        about: string;
        skype: string;
        facebook: string;
        twitter: string;
        instagram: string;
        passport: File | string | null;
    };

    const { data, setData, post, processing, errors, progress } =
        useForm<AgentFormData>({
            name: agent.name ?? '',
            id: agent.id ?? '',
            title: agent.title ?? '',
            company: agent.company ?? '',
            email: agent.email ?? '',
            phone: agent.phone ?? '',
            about: agent.about ?? '',
            skype: agent.skype ?? '',
            facebook: agent.facebook ?? '',
            twitter: agent.twitter ?? '',
            instagram: agent.instagram ?? '',
            passport: agent.passport ?? null,
        });

    const [previewUrl, setPreviewUrl] = React.useState<string | null>(
        agent.passport ? `/storage/${agent.passport}` : null,
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

      
        post('/updateagent', {
            // method: 'put',
            // _method: 'put',
            forceFormData: true,
        });
    }

    //    function submit(e: any) {
    //         e.preventDefault();
    //         put(route('agent.update', agent.id));
    //     }

    //   function submit(e: React.FormEvent) {
    //     e.preventDefault();

    //     // Note: For file upload, Inertia’s put will auto detect FormData if there's a File in the data
    //    router.post(route('agent.update', agent.id), {
    //   _method: 'put',

    // })
    //   }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Agent" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form
                            onSubmit={submit}
                            className="space-y-6"
                            encType="multipart/form-data"
                        >
                            <Input
                                id="id"
                                name="id"
                                type="hidden"
                                value={data.id}
                            />
                            <h2>Agent Information :</h2>

                            <center>
                                <div className="grid w-full max-w-sm items-center gap-3">
                                    {previewUrl && (
                                        <img
                                            src={previewUrl}
                                            alt="Passport preview"
                                            className="mt-3 h-60 w-full rounded-lg border border-gray-300 object-cover shadow-md"
                                        />
                                    )}

                                    <Input
                                        id="passport"
                                        name="passport"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                    {errors.passport && (
                                        <div className="text-red-500">
                                            {errors.passport}
                                        </div>
                                    )}
                                </div>
                            </center>

                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="name">
                                    Full Name{' '}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="h-12 w-full"
                                />
                                {errors.name && (
                                    <div className="text-red-500">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">
                                        Agent Title{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Agent Title"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData('title', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.title && (
                                        <div className="text-red-500">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="company">
                                        Company Name
                                    </Label>
                                    <Input
                                        type="text"
                                        id="company"
                                        name="company"
                                        placeholder="Company"
                                        value={data.company}
                                        onChange={(e) =>
                                            setData('company', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.company && (
                                        <div className="text-red-500">
                                            {errors.company}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="email">
                                        Business Email{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData('email', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.email && (
                                        <div className="text-red-500">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="phone">
                                        Contact{' '}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="Contact Number"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData('phone', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.phone && (
                                        <div className="text-red-500">
                                            {errors.phone}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="about">About Agent</Label>
                                <Textarea
                                    id="about"
                                    name="about"
                                    placeholder="Type here..."
                                    value={data.about}
                                    onChange={(e) =>
                                        setData('about', e.target.value)
                                    }
                                />
                                {errors.about && (
                                    <div className="text-red-500">
                                        {errors.about}
                                    </div>
                                )}
                            </div>

                            <h2>Social Network :</h2>
                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="skype">Skype URL</Label>
                                    <Input
                                        type="url"
                                        id="skype"
                                        name="skype"
                                        placeholder="https://..."
                                        value={data.skype}
                                        onChange={(e) =>
                                            setData('skype', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.skype && (
                                        <div className="text-red-500">
                                            {errors.skype}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="facebook">
                                        Facebook URL
                                    </Label>
                                    <Input
                                        type="url"
                                        id="facebook"
                                        name="facebook"
                                        placeholder="https://..."
                                        value={data.facebook}
                                        onChange={(e) =>
                                            setData('facebook', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.facebook && (
                                        <div className="text-red-500">
                                            {errors.facebook}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="twitter">Twitter URL</Label>
                                    <Input
                                        type="url"
                                        id="twitter"
                                        name="twitter"
                                        placeholder="https://..."
                                        value={data.twitter}
                                        onChange={(e) =>
                                            setData('twitter', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.twitter && (
                                        <div className="text-red-500">
                                            {errors.twitter}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="instagram">
                                        Instagram URL
                                    </Label>
                                    <Input
                                        type="url"
                                        id="instagram"
                                        name="instagram"
                                        placeholder="https://..."
                                        value={data.instagram}
                                        onChange={(e) =>
                                            setData('instagram', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />
                                    {errors.instagram && (
                                        <div className="text-red-500">
                                            {errors.instagram}
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
                                )}{' '}
                                Update Agent
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
