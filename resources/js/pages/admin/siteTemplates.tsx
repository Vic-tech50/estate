import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm, usePage } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Site Templates',
        href: '#',
    },
];

export default function SiteTemplates() {
    const route = useRoute();
    let site: any = usePage().props.site || [];
    const { data, setData, post, processing, errors, progress } = useForm({
        template: site.template || '',
    });

    function submit(e: any) {
        e.preventDefault();
        post('/update_templates');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site Templates" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid w-full items-center gap-3">
                                <RadioGroup
                                    value={data.template}
                                    onValueChange={(value) =>
                                        setData('template', value)
                                    }
                                    className="grid gap-2 md:grid-cols-3"
                                >
                                    <div className="flex items-center space-x-4">
                                        <RadioGroupItem
                                            value="template1"
                                            id="r1"
                                        />
                                        <Label htmlFor="r1">
                                            <img
                                                src="template/temp1.png"
                                                alt="template one"
                                                className="h-50 w-full rounded border-2 border-transparent hover:cursor-pointer hover:border-amber-400"
                                            />
                                            <p className="mt-2 text-center">
                                                Template One
                                            </p>
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="template2"
                                            id="r2"
                                        />
                                        <Label htmlFor="r2">
                                            {' '}
                                            <img
                                                src="template/temp2.png"
                                                alt="template one"
                                                className="h-50 w-full rounded border-2 border-transparent hover:cursor-pointer hover:border-amber-400"
                                            />
                                            <p className="mt-2 text-center">
                                                Template Two
                                            </p>
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem
                                            value="template3"
                                            id="r3"
                                        />
                                        <Label htmlFor="r3">
                                            {' '}
                                            <img
                                                src="template/temp3.png"
                                                alt="template one"
                                                className="h-50 w-full rounded border-2 border-transparent hover:cursor-pointer hover:border-amber-400"
                                            />
                                            <p className="mt-2 text-center">
                                                Template Three
                                            </p>
                                        </Label>
                                    </div>
                                </RadioGroup>
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
