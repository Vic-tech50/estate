import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Site Content',
        href: '#',
    },
];

export default function SiteContent() {
    const route = useRoute();
    let site: any = usePage().props.site || [];
    const { data, setData, post, processing, errors, progress } = useForm({
        header: site.header || '',
        header_content: site.header_content || '',
        map_url: site.map_url || '',
        about_us: site.about_us || '',
        terms_and_conditions: site.terms_and_conditions || '',
        privacy_policy: site.privacy_policy || '',
        contact_info: site.contact_info || '',
        footer_content: site.footer_content || '',
        welcome_message: site.welcome_message || '',
        disclaimer: site.disclaimer || '',
    });

    function submit(e: any) {
        e.preventDefault();
        post('/update_content');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site Content" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="package">Header</Label>
                                <Input
                                    type="text"
                                    id="header"
                                    placeholder="EX: Welcome to Our Site"
                                    value={data.header}
                                    onChange={(e) =>
                                        setData('header', e.target.value)
                                    }
                                    className="h-12 w-full"
                                />

                                {errors.header && (
                                    <div className="text-red-500">
                                        {errors.header}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="header_content">
                                        Header Text
                                    </Label>
                                    <Input
                                        type="text"
                                        id="header_content"
                                        placeholder="EX: Find Your Dream Home"
                                        value={data.header_content}
                                        onChange={(e) =>
                                            setData(
                                                'header_content',
                                                e.target.value,
                                            )
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.header_content && (
                                        <div className="text-red-500">
                                            {errors.header_content}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="map_url">Map URL</Label>
                                    <Input
                                        type="text"
                                        id="map_url"
                                        placeholder="EX: https://maps.google.com/..."
                                        value={data.map_url}
                                        onChange={(e) =>
                                            setData('map_url', e.target.value)
                                        }
                                        className="h-12 w-full"
                                    />

                                    {errors.map_url && (
                                        <div className="text-red-500">
                                            {errors.map_url}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="about">About Us</Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.about_us}
                                        onModelChange={(model: any) =>
                                            setData('about_us', model)
                                        }
                                        config={{
                                            placeholderText:
                                                'Write About Us Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                        }}
                                    />
                                    {errors.about_us && (
                                        <div className="text-red-500">
                                            {errors.about_us}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="term">
                                        Terms And Condition
                                    </Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.terms_and_conditions}
                                        onModelChange={(model: any) =>
                                            setData(
                                                'terms_and_conditions',
                                                model,
                                            )
                                        }
                                        config={{
                                            placeholderText:
                                                'Write Terms And Condition Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                            imageUpload: false,
                                            imageUploadRemoteUrls: false,
                                        }}
                                    />
                                    {errors.terms_and_conditions && (
                                        <div className="text-red-500">
                                            {errors.terms_and_conditions}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="about">
                                        Privacy Policy
                                    </Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.privacy_policy}
                                        onModelChange={(model: any) =>
                                            setData('privacy_policy', model)
                                        }
                                        config={{
                                            placeholderText:
                                                'Write Privacy Policy Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                        }}
                                    />
                                    {errors.privacy_policy && (
                                        <div className="text-red-500">
                                            {errors.privacy_policy}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="term">Contact Info</Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.contact_info}
                                        onModelChange={(model: any) =>
                                            setData('contact_info', model)
                                        }
                                        config={{
                                            placeholderText:
                                                'Write Contact Info Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                            imageUpload: false,
                                            imageUploadRemoteUrls: false,
                                        }}
                                    />
                                    {errors.contact_info && (
                                        <div className="text-red-500">
                                            {errors.contact_info}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="footer">
                                        Footer Content
                                    </Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.footer_content}
                                        onModelChange={(model: any) =>
                                            setData('footer_content', model)
                                        }
                                        config={{
                                            placeholderText:
                                                'Write Footer Content Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                        }}
                                    />
                                    {errors.footer_content && (
                                        <div className="text-red-500">
                                            {errors.footer_content}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="welcome">
                                        Welcome Message
                                    </Label>
                                    <FroalaEditorComponent
                                        tag="textarea"
                                        model={data.welcome_message}
                                        onModelChange={(model: any) =>
                                            setData('welcome_message', model)
                                        }
                                        config={{
                                            placeholderText:
                                                'Write Welcome Message Here!',
                                            charCounterCount: true,
                                            colorBackground: 'black',
                                            imageUpload: false,
                                            imageUploadRemoteUrls: false,
                                        }}
                                    />
                                    {errors.welcome_message && (
                                        <div className="text-red-500">
                                            {errors.welcome_message}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="disclaimer">Disclaimer</Label>
                                <FroalaEditorComponent
                                    tag="textarea"
                                    model={data.disclaimer}
                                    onModelChange={(model: any) =>
                                        setData('disclaimer', model)
                                    }
                                    config={{
                                        placeholderText:
                                            'Write Your Content Here!',
                                        charCounterCount: true,
                                        colorBackground: 'black',
                                    }}
                                />
                                {errors.disclaimer && (
                                    <div className="text-red-500">
                                        {errors.disclaimer}
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 text-sm text-gray-500 italic dark:text-gray-400">
                                Last Updated :{' '}
                                {new Date(site.updated_at).toLocaleDateString()}
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
            </div>
        </AppLayout>
    );
}
function route(arg0: string): string {
    throw new Error('Function not implemented.');
}
