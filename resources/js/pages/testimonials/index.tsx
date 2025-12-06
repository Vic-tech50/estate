import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
// import { IconGitBranch } from "@tabler/icons-react"
import { Button } from '@/components/ui/button';
import { Ellipsis } from 'lucide-react';
import { useRoute } from 'ziggy-js';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Testimonials',
        href: dashboard().url,
    },
];

export default function Testimonials() {
    const testimonials: any = usePage().props.testimonials || [];
    const route = useRoute();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Testimonials" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto mt-10 w-3/4">
                        <Link
                            href={route('testimonials.create')}
                            className="float-right mb-4"
                        >
                            <Button variant="outline" size="lg">
                                Create Testimonials
                            </Button>
                        </Link>

                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Image</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Profession</TableHead>
                                    <TableHead>Content</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {testimonials.length > 0 ? (
                                    testimonials.map(
                                        (testimonial: any, index: number) => (
                                            <TableRow key={testimonial.id}>
                                                <TableCell>
                                                    {index + 1}
                                                </TableCell>
                                                <TableCell>
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="h-12 w-12 rounded-full"
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    {testimonial.name}
                                                </TableCell>
                                                <TableCell>
                                                    {testimonial.profession}
                                                </TableCell>
                                                <TableCell
                                                    className="max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap"
                                                    title={testimonial.content}
                                                >
                                                    {testimonial.content}
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
                                                                        'testimonials.edit',
                                                                        testimonial.id,
                                                                    )}
                                                                >
                                                                    Edit
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="text-red-500">
                                                                <Link
                                                                    href={route(
                                                                        'testimonials.destroy',
                                                                        testimonial.id,
                                                                    )}
                                                                    method="delete"
                                                                    as="button"
                                                                    onClick={(
                                                                        e,
                                                                    ) => {
                                                                        if (
                                                                            !confirm(
                                                                                'Are you sure you want to delete this message?',
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
                                        ),
                                    )
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="text-center"
                                        >
                                            No Testimonials found
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
