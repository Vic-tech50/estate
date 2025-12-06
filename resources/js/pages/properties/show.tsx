import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { useRoute } from 'ziggy-js';

// import { toast } from "sonner";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Add Property',
        href: '#',
    },
];

export default function AddProperty() {
    let property: any = usePage().props.property || [];
    const { auth }: any = usePage().props;
    const route = useRoute();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Property" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="mx-auto my-10 w-3/4">
                        <img
                            src={'/' + property.thumbnail}
                            alt="Thumbnail"
                            className="h-100 w-full rounded-md border-2 border-amber-100 object-cover"
                        />
                        {(() => {
                            if (!property.images) {
                                return (
                                    <div className="my-4 bg-red-200 p-4 text-center">
                                        <p className="text-md font-bold text-black">
                                            Not Images Added
                                        </p>
                                    </div>
                                );
                            }

                            try {
                                const imgs = Array.isArray(property.images)
                                    ? property.images
                                    : JSON.parse(property.images);

                                if (Array.isArray(imgs) && imgs.length > 0) {
                                    return (
                                        <div className="flex flex-row gap-2 overflow-x-auto">
                                            {imgs.map((imgSrc, idx) => (
                                                <img
                                                    key={idx}
                                                    src={'/' + imgSrc}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className="w-inherit my-5 h-40 rounded-md border-2 border-amber-100 object-cover"
                                                />
                                            ))}
                                        </div>
                                    );
                                } else {
                                    return '—';
                                }
                            } catch (err) {
                                const src = property.images;
                                return (
                                    <div className="flex flex-row">
                                        <img
                                            src={'/' + src}
                                            alt="Thumbnail"
                                            className="h-24 w-24 rounded-md border-2 border-amber-100 object-cover"
                                        />
                                    </div>
                                );
                            }
                        })()}

                        <form className="space-y-6">
                            <h2>Property Information :</h2>
                            <div className="grid w-full items-center gap-3">
                                <Label htmlFor="package">Package Name </Label>
                                <Input
                                    type="text"
                                    value={property.package}
                                    disabled
                                    className="h-12 w-full border-0 capitalize"
                                />
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="title">
                                        Property Title
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={property.title}
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="type">Property Type </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={property.type}
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="category">Category </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={property.category}
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="country">Country </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.country ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="state">State </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.state ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="city">City </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={property.city ?? 'Not Available'}
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="address">Address </Label>
                                <Input
                                    type="text"
                                    disabled
                                    className="h-12 w-full border-0 capitalize"
                                    value={property.address ?? 'Not Available'}
                                />
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="longitude">Longitude</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.longitude ??
                                            'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="latitude">Latitude</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.latitude ?? 'Not Available'
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-2">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="price">
                                        Property Price
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.price ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.currency ?? 'Not Available'
                                        }
                                    />
                                </div>
                            </div>

                            {/* Property Details */}
                            <h2>Property Details :</h2>
                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="property_id">
                                        Property ID
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.property_id ??
                                            'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="bedrooms">
                                        Number Of Bedroom
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.bedrooms ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="bathrooms">
                                        Number Of Bathrooms
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.bathrooms ??
                                            'Not Available'
                                        }
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid gap-6 md:grid-cols-3">
                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="garage">
                                        Number Of Garage
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.garage ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="floor">Select Floor</Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={
                                            property.floor ?? 'Not Available'
                                        }
                                    />
                                </div>

                                <div className="grid w-full items-center gap-3">
                                    <Label htmlFor="size">
                                        Size of Room in Sqft
                                    </Label>
                                    <Input
                                        type="text"
                                        disabled
                                        className="h-12 w-full border-0 capitalize"
                                        value={property.size ?? 'Not Available'}
                                    />
                                </div>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-9">
                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={Boolean(
                                            property.basketballCourt,
                                        )}
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Basketball court
                                        </p>
                                    </div>
                                </Label>

                                {/*  */}
                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={Boolean(property.gym)}
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Gym
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.swimmingPool) &&
                                            property.swimmingPool !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Swimming Pool
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.washerDryer) &&
                                            property.washerDryer !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Washer And Dryer
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.noSmokeZone) &&
                                            property.noSmokeZone !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            No Smoke Zone
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(
                                                property.wheelChairFriendly,
                                            ) &&
                                            property.wheelChairFriendly !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            WheelChair Friendly
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.parkingSpace) &&
                                            property.parkingSpace !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Parking Space
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.airConditioned) &&
                                            property.airConditioned !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Air Conditioned
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.petFriendly) &&
                                            property.petFriendly !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Pet Friendly
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.Internet) &&
                                            property.Internet !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Internet
                                        </p>
                                    </div>
                                </Label>

                                <Label className="flex items-start gap-3 rounded-lg border p-3 hover:bg-accent/50 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                                    <Checkbox
                                        id="toggle-2"
                                        checked={
                                            Boolean(property.Water) &&
                                            property.Water !== 0
                                        }
                                        className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
                                    />
                                    <div className="grid gap-1.5 font-normal">
                                        <p className="text-sm leading-none font-medium">
                                            Water
                                        </p>
                                    </div>
                                </Label>
                            </div>

                            <div className="mt-8 grid w-full items-center gap-3">
                                <Label htmlFor="video">
                                    Property Video Link
                                </Label>
                                <Input
                                    type="text"
                                    disabled
                                    className="h-12 w-full border-0 capitalize"
                                    value={property.video ?? 'Not Available'}
                                />
                            </div>

                            <div className="mt-8 grid w-full gap-3">
                                <Label htmlFor="message">Description</Label>
                                <Textarea
                                    value={
                                        property.description ?? 'Not Available'
                                    }
                                    disabled
                                />
                            </div>

                            {auth.user.role === 'admin' ? (
                                <>
                                    {property.status !== 'available' ? (
                                        <Link
                                            href={route(
                                                'properties.approve',
                                                property.id,
                                            )}
                                            as={Button}
                                            className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                                        >
                                            Approve Property
                                        </Link>
                                    ) : (
                                        <Link
                                            href={route(
                                                'properties.cancel',
                                                property.id,
                                            )}
                                            as={Button}
                                            className="mt-10 h-12 w-full bg-amber-400 text-black hover:bg-amber-500 focus:ring-4 focus:ring-amber-300 dark:focus:ring-amber-900"
                                        >
                                            Cancel Property
                                        </Link>
                                    )}
                                </>
                            ) : (
                                <Link
                                    href={route('properties.index')}
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
