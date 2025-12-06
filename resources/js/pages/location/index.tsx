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
        title: 'Location',
        href: dashboard().url,
    },
];

export default function Location() {
    // const dataTable = DataTable("#default-table");
    let locations: any = usePage().props.locations || [];
    const route = useRoute();

    locations = locations.map((loc: any) => ({
        ...loc,
        states:
            typeof loc.states === 'string'
                ? JSON.parse(loc.states)
                : loc.states,
        cities:
            typeof loc.cities === 'string'
                ? JSON.parse(loc.cities)
                : loc.cities,
    }));

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Properties" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <Link
                            href="/location/create"
                            className="float-right mb-4"
                        >
                            <Button variant="outline" size="lg">
                                Add Location
                            </Button>
                        </Link>

                        <Table className="p-5">
                            {/* <TableCaption>A list of your recent locations.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="">Country</TableHead>
                                    <TableHead className="">State</TableHead>
                                    <TableHead className="">City</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="">
                                {locations.length > 0 ? (
                                    locations.map((location: any) => (
                                        <TableRow key={location.id}>
                                            {/* Country */}
                                            <TableCell className="capitalize">
                                                {location.country}
                                            </TableCell>

                                            {/* States */}
                                            <TableCell className="capitalize">
                                                {(() => {
                                                    try {
                                                        const states =
                                                            Array.isArray(
                                                                location.states,
                                                            )
                                                                ? location.states
                                                                : JSON.parse(
                                                                      location.states ||
                                                                          '[]',
                                                                  );
                                                        return states.length
                                                            ? states.join(' | ')
                                                            : '—';
                                                    } catch {
                                                        return String(
                                                            location.states ||
                                                                '—',
                                                        );
                                                    }
                                                })()}
                                            </TableCell>

                                            {/* Cities */}
                                            <TableCell className="capitalize">
                                                {(() => {
                                                    try {
                                                        const cities =
                                                            Array.isArray(
                                                                location.cities,
                                                            )
                                                                ? location.cities
                                                                : JSON.parse(
                                                                      location.cities ||
                                                                          '[]',
                                                                  );
                                                        return cities.length
                                                            ? cities.join(', ')
                                                            : '—';
                                                    } catch {
                                                        return String(
                                                            location.cities ||
                                                                '—',
                                                        );
                                                    }
                                                })()}
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
                                                                    'location.edit',
                                                                    location.id,
                                                                )}
                                                            >
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="text-red-500">
                                                            <Link
                                                                href={route(
                                                                    'location.destroy',
                                                                    location.id,
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
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={3}
                                            className="py-6 text-center"
                                        >
                                            No locations found.
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
