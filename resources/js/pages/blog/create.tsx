import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Blog',
        href: '#',
    },
];

export default function AddBlog() {
    const route = useRoute();
    const [slug, setSlug] = useState('');
    // const [title, setTitle] = useState('');
    const { data, setData, post, processing, errors, progress } = useForm({
        title: '',
        slug: '',
        category: '',
        tag: '',
        content: '',
        image: null,
    });

  useEffect(() => {
    const newSlug = data.title
        .toLowerCase()
        .trim()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

    setSlug(newSlug);
    setData('slug', newSlug);
}, [data.title]); // run whenever title changes

    function submit(e: any) {
        e.preventDefault();
        post('/blog');
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Add Blog" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="package">
                                    Title
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="title"
                                    placeholder="Title"
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
                                <Label htmlFor="package">
                                    Slug
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    type="text"
                                    id="title"
                                    placeholder="Ex: my-estate"
                                    value={slug}
                                    // onChange={changeSlug}
                                    className="h-12 w-full"
                                />

                                {errors.slug && (
                                    <div className="text-red-500">
                                        {errors.slug}
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="category">
                                        Category{' '}
                                        <span className="text-red-500">
                                            *
                                        </span>{' '}
                                    </Label>
                                    <Select
                                        value={data.category}
                                        onValueChange={(value) =>
                                            setData('category', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Category
                                                </SelectLabel>
                                                <SelectItem value="Apartment">
                                                    Apartment
                                                </SelectItem>
                                                <SelectItem value="Real Estate">
                                                    Real Estate
                                                </SelectItem>
                                                <SelectItem value="land">
                                                    Land
                                                </SelectItem>
                                                <SelectItem value="other">
                                                    Business
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <div className="text-red-500">
                                            {errors.category}
                                        </div>
                                    )}
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="tag">
                                        Tag
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={data.tag}
                                        onValueChange={(value) =>
                                            setData('tag', value)
                                        }
                                    >
                                        <SelectTrigger className="h-12 w-full">
                                            <SelectValue placeholder="Property Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>
                                                    Select Property Type
                                                </SelectLabel>
                                                <SelectItem value="Sale">
                                                    Sale
                                                </SelectItem>
                                                <SelectItem value="Rent">
                                                    Rent
                                                </SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    {errors.tag && (
                                        <div className="text-red-500">
                                            {errors.tag}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="image">Property Image</Label>
                                <Input
                                    type="file"
                                    id="image"
                                    placeholder="Image"
                                    className="h-12 w-full"
                                    onChange={(e) =>
                                        setData('image', e.target.files[0])
                                    }
                                />
                                {progress && (
                                    <progress
                                        value={progress.percentage}
                                        max="100"
                                    >
                                        {progress.percentage}%
                                    </progress>
                                )}
                                {errors.image && (
                                    <div className="text-red-500">
                                        {errors.image}
                                    </div>
                                )}
                            </div>

                            {/* <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Content</Label>
                                <Textarea
                                    placeholder="Type your message here."
                                    id="message"
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
                            </div> */}

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Content</Label>
                                <FroalaEditorComponent
                                    tag="textarea"
                                    model={data.content}
                                    onModelChange={(model: any) =>
                                        setData('content', model)
                                    }
                                    config={{
                                        placeholderText:
                                            'Write Your Content Here!',
                                        charCounterCount: true,
                                        colorBackground: 'black',
                                    }}
                                />
                                {errors.content && (
                                    <div className="text-red-500">
                                        {errors.content}
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
                                {' '}
                                {processing && (
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                )}
                                Save
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
