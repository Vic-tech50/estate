import AppLogoIcon from './app-logo-icon';
import { usePage } from '@inertiajs/react';




export default function AppLogo() {
        const { settings } = usePage().props as any;
    return (
        <>
            <div className="flex  size-10 items-center justify-center rounded-md ">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {settings.sitename || 'Estate'}
                </span>
            </div>
        </>
    );
}
