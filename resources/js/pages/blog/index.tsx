import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
// import { IconGitBranch } from "@tabler/icons-react"
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';
import { useRoute } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Blog',
        href: dashboard().url,
    },
];

export default function Blog() {
    // const dataTable = DataTable("#default-table");
    let blogs: any = usePage().props.blogs || [];
    
    interface AuthUser {
        role?: string;
        [key: string]: any;
    }
    interface AuthProps {
        user?: AuthUser;
        [key: string]: any;
    }
    const auth = usePage().props.auth as AuthProps;
    const route = useRoute();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Blogs" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <Link
                            href={route('blog.create')}
                            className="float-right mb-4"
                        >
                            <Button variant="outline" size="lg">
                                Add Blog
                            </Button>
                        </Link>

                        <Table className=" p-5">
                            {/* {auth.user?.role === 'admin' && (
                                        <TableHead className="">Author</TableHead>
                                    )} */}

                            {/* <TableCaption>A list of your recent locations.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">#</TableHead>
                                    <TableHead className="">Date</TableHead>
                                    {auth.user?.role === 'admin' && (
                                        <TableHead className="">
                                            Author
                                        </TableHead>
                                    )}
                                    <TableHead className="">Title</TableHead>
                                    <TableHead className="">Category</TableHead>
                                    <TableHead className="">Tag</TableHead>
                                    <TableHead className="">Content</TableHead>
                                    <TableHead className="">Status</TableHead>
                                    <TableHead className=""></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {blogs.length > 0 ? (
                                    blogs.map((blog: any, index: number) => (
                                        <TableRow
                                            key={blog.id}
                                            className="capitalize"
                                        >
                                            <TableCell className="">
                                                {index + 1}
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    blog.created_at,
                                                ).toLocaleDateString()}
                                            </TableCell>
                                            {auth.user?.role === 'admin' && (
                                                <TableCell className="">
                                                    {blog.agentid != 1 ? blog.agent_name : 'Admin'}
                                                </TableCell>
                                            )}

                                            <TableCell className="">
                                                {blog.title || 'Not Available'}
                                            </TableCell>
                                            <TableCell className="">
                                                {blog.category ||
                                                    'Not Available'}
                                            </TableCell>
                                            <TableCell className="">
                                                {blog.tag || 'Not Available'}
                                            </TableCell>
                                            <TableCell className="max-h-[100px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                {blog?.content ? (
                                                    <div
                                                        className="max-h-[50px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                                                        dangerouslySetInnerHTML={{
                                                            __html: blog.content,
                                                        }}
                                                    />
                                                ) : (
                                                    <p>No content available.</p>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                {blog.status == 'approved' ? (
                                                    <span className="rounded-sm border border-green-300 bg-green-200 p-1.5 text-sm font-bold text-black">
                                                        {blog.status}
                                                    </span>
                                                ) : (
                                                    <span className="rounded-sm border border-red-300 bg-red-200 p-1.5 text-sm font-bold text-black">
                                                        {blog.status}
                                                    </span>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            size="sm"
                                                        >
                                                            <Ellipsis className="h-5 w-5" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent>
                                                        <DropdownMenuLabel>
                                                            Action
                                                        </DropdownMenuLabel>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <Link
                                                                href={route(
                                                                    'blog.show',
                                                                    blog.id,
                                                                )}
                                                            >
                                                                View
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Link
                                                                href={route(
                                                                    'blog.edit',
                                                                    blog.id,
                                                                )}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="text-red-500">
                                                            <Link
                                                                href={route(
                                                                    'blog.destroy',
                                                                    blog.id,
                                                                )}
                                                                method="delete"
                                                                as="button"
                                                                onClick={(
                                                                    e,
                                                                ) => {
                                                                    if (
                                                                        !confirm(
                                                                            'Are you sure you want to delete this Agent?',
                                                                        )
                                                                    ) {
                                                                        e.preventDefault();
                                                                    }
                                                                }}
                                                            >
                                                                Delete
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="">
                                            No blogs found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
