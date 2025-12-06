import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Blog',
        href: '#',
    },
];

export default function AddBlog() {
    let blog: any = usePage().props.blog || {};
    const { auth }: any = usePage().props;
    const route = useRoute();
    const { data, setData, post, processing, errors, progress } = useForm({
        id: blog.id,
        title: '',
        category: '',
        tag: '',
        content: '',
        image: null,
    });

    function submit(e: any) {
        e.preventDefault();
        post('/blog/approve');
    }

    function cancel(e: React.FormEvent) {
        e.preventDefault();

        router.post(
            '/blog/cancel',
            { id: blog.id },
            {
                onStart: () => console.log('Cancelling blog...'),
                onSuccess: () => console.log('Blog cancelled successfully!'),
                onError: (errors) => console.error(errors),
            },
        );
    }

    // function cancel(e: any) {
    //     e.preventDefault();
    //     post('/blog/cancel');
    // }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Blog" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <img
                            src={
                                blog.image
                                    ? '/' + blog.image
                                    : '/assets/images/image-38.png'
                            }
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src =
                                    '/assets/images/image-38.png';
                            }}
                            alt="Thumbnail"
                            className="my-10 h-100 w-full rounded-md border-2 border-amber-100 object-cover"
                        />
                        <form onSubmit={submit} className="space-y-6">
                            <Input
                                type="hidden"
                                value={data.id}
                                className="h-12 w-full border-0 border-t capitalize"
                            />
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    type="text"
                                    disabled
                                    value={blog.title}
                                    className="h-12 w-full border-0 border-t capitalize"
                                />
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="category">Category</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        value={blog.category}
                                        className="h-12 w-full border-0 border-t capitalize"
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="tag">Tag</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        value={blog.tag}
                                        className="h-12 w-full border-0 border-t capitalize"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Content</Label>

                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blog.content,
                                    }}
                                ></div>
                            </div>

                            {auth.user.role === 'admin' ? (
                                <>
                                    {blog.status != 'approved' && (
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
                                            Approve And Publish
                                        </Button>
                                    )}

                                    {blog.status !== 'Cancelled' && (
                                        <Button
                                            type="button"
                                            disabled={processing}
                                            onClick={cancel}
                                            className="h-12 w-full rounded-md bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
                                        >
                                            {processing && (
                                                <LoaderCircle className="h-4 w-4 animate-spin" />
                                            )}
                                            Cancel Blog
                                        </Button>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={route('blog.index')}
                                    as={Button}
                                    className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                                >
                                    Go Back
                                </Link>
                            )}
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
